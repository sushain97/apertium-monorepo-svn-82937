#!/usr/bin/env php
<?php

if (empty($_ENV['ANDROID_SDK_PATH']) || !file_exists($_ENV['ANDROID_SDK_PATH'])) {
	echo "Setting ANDROID_SDK_PATH\n";
	putenv('ANDROID_SDK_PATH=/opt/android/android-sdk-linux');
}
if (empty($_ENV['LTTOOLBOX_JAVA_PATH']) || !file_exists($_ENV['LTTOOLBOX_JAVA_PATH'])) {
	echo "Setting LTTOOLBOX_JAVA_PATH\n";
	putenv('LTTOOLBOX_JAVA_PATH=/usr/share/apertium/lttoolbox.jar');
}

$tpath = '/tmp/apertium-java-updater';
shell_exec('rm -rf '.escapeshellarg($tpath));
mkdir($tpath.'/install/bin/', 0777, true);
$gm = file_get_contents('/usr/bin/apertium-gen-modes');
$gm = str_replace('APERTIUMDIR=/usr/share/apertium', 'APERTIUMDIR='.$tpath.'/install/share/apertium', $gm);
file_put_contents($tpath.'/install/bin/apertium-gen-modes', $gm);
chmod($tpath.'/install/bin/apertium-gen-modes', 0755);
putenv('PKG_CONFIG_PATH='.$tpath.'/install/share/pkgconfig');

chdir(__DIR__);
$pkgs = trim(file_get_contents('language-pairs'));
$pkgs = explode("\n", $pkgs);

// apertium-af-nl  https://apertium.svn.sourceforge.net/svnroot/apertium/builds/apertium-af-nl/apertium-af-nl.jar  file:apertium-af-nl-0.2.0.tar.gz        af-nl, nl-af
foreach ($pkgs as $kp => $pkg) {
	chdir(__DIR__);
	$pkg = explode("\t", $pkg);
	echo "\nPackaging {$pkg[0]} ...\n";

	$rev = file_get_contents('https://svn.code.sf.net/p/apertium/svn/branches/packaging/trunk/'.$pkg[0].'/debian/changelog');
	if (!preg_match('@~r(\d+)-@', $rev, $m)) {
		echo "{$pkg[0]} failed to determine last release\n";
		continue;
	}
	$rev = intval($m[1]);

	if ('svn:rev'.$rev === $pkg[2]) {
		echo "{$pkg[0]} didn't need updating\n";
		continue;
	}
	$pkg[2] = 'svn:rev'.$rev;

	$xml = shell_exec('svn cat -r'.$rev.' https://svn.code.sf.net/p/apertium/svn/trunk/'.$pkg[0].'/modes.xml');
	$modes = preg_split('~,\s*~', $pkg[3]);
	$fmodes = [];
	foreach ($modes as $mode) {
		if (!preg_match('~<mode name="'.$mode.'" install="yes">(.*?)</mode>~s', $xml, $m)) {
			echo "Mode $mode not found\n";
			continue 2;
		}

		if (strpos($m[1], 'cg-proc') !== false) {
			echo "Mode $mode uses CG-3\n";
			continue 2;
		}
		if (strpos($m[1], 'hfst-proc') !== false) {
			echo "Mode $mode uses HFST\n";
			continue 2;
		}
		$fmodes[] = $tpath.'/install/share/apertium/modes/'.$mode.'.mode';
	}

	chdir($tpath);
	echo shell_exec('svn co -r'.$rev.' https://svn.code.sf.net/p/apertium/svn/trunk/'.$pkg[0]);
	$ac = file_get_contents($pkg[0].'/configure.ac');
	if (preg_match_all('~AP_CHECK_LING.*?(apertium-\w+)~', $ac, $ms, PREG_SET_ORDER)) {
		// ToDo: This should try to find latest release <= parent's revision
		foreach ($ms as $m) {
			chdir($tpath);
			$rev = file_get_contents('https://svn.code.sf.net/p/apertium/svn/branches/packaging/languages/'.$m[1].'/debian/changelog');
			if (!preg_match('@~r(\d+)-@', $rev, $r)) {
				echo "{$m[1]} failed to determine last release\n";
				continue 2;
			}
			echo shell_exec('svn co -r'.$r[1].' https://svn.code.sf.net/p/apertium/svn/languages/'.$m[1]);
			chdir($tpath.'/'.$m[1]);
			echo shell_exec('autoreconf -fi');
			echo shell_exec('./configure --prefix='.$tpath.'/install');
			echo shell_exec('make -j8 || make -j8 || make -j8');
			echo shell_exec('make && make install');
		}
	}
	chdir($tpath.'/'.$pkg[0]);
	echo shell_exec('autoreconf -fi');
	echo shell_exec('./configure --prefix='.$tpath.'/install');
	echo shell_exec('make -j8 || make -j8 || make -j8');
	echo shell_exec('make && make install');

	if (!file_exists($fmodes[0])) {
		echo "{$pkg[0]} failed to build or install\n";
		continue;
	}

	chdir($tpath);
	$cmd = 'apertium-pack-j '.implode(' ', $fmodes).' 2>&1';
	echo "Executing $cmd ...\n";
	echo shell_exec($cmd), "\n";

	if (!file_exists($pkg[0].'.jar')) {
		if (preg_match('~^apertium-(\w+)-(\w+)$~', $pkg[0], $m) && file_exists("apertium-{$m[2]}-{$m[1]}.jar")) {
			rename("apertium-{$m[2]}-{$m[1]}.jar", $pkg[0].'.jar');
		}
	}
	if (!file_exists($pkg[0].'.jar')) {
		echo "{$pkg[0]} failed to jar\n";
		continue;
	}

	foreach ($modes as $mode) {
		$good = shell_exec('echo "hello world" | java -jar '.$pkg[0].'.jar apertium '.escapeshellarg($mode).' 2>&1');
		if (strpos($good, 'Exception') !== false) {
			echo "{$pkg[0]} mode $mode failed to execute\n";
			continue 2;
		}
	}

	copy($pkg[0].'.jar', __DIR__.'/'.$pkg[0].'/'.$pkg[0].'.jar');
	$pkgs[$kp] = implode("\t", $pkg);
}

chdir(__DIR__);
$pkgs = implode("\n", $pkgs)."\n";
file_put_contents('language-pairs-2', $pkgs);
shell_exec('sort language-pairs-2 > language-pairs-3');
