#!/bin/sh
if autoreconf -i ; then
	echo "run ./configure && make to proceed"
else
	echo "autoreconf failed :-("
fi
