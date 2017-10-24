<?xml version="1.0" encoding="UTF-8"?>
<tagger name="latvian">
<tagset>
<!--
  1235 single tags
  492 multiple tags
-->
  <def-label name="quot" closed="true">
    <tags-item tags="quot"/>
    <tags-item tags="lquot"/>
    <tags-item tags="rquot"/>
  </def-label>

  <def-label name="abbr">
    <tags-item tags="abbr"/>
  </def-label>

  <def-label name="guio" closed="true">
    <tags-item tags="guio"/>
  </def-label>

  <def-label name="apos" closed="true">
    <tags-item tags="apos"/>
  </def-label>

  <def-label name="cm" closed="true">
    <tags-item tags="cm"/>
  </def-label>

  <def-label name="ij" closed="true">
    <tags-item tags="ij"/>
  </def-label>

  <def-label name="pr" closed="true">
    <tags-item tags="pr"/>
    <tags-item tags="pr.*"/>
  </def-label>

  <def-label name="num" closed="true">
    <tags-item tags="num"/>
  </def-label>

  <def-label name="preadv" closed="true">
    <tags-item tags="preadv"/>
  </def-label>

  <def-label name="adv">
    <tags-item tags="adv"/>
    <tags-item tags="adv.sint"/>
  </def-label>

  <def-label name="adv.itg" closed="true">
    <tags-item tags="adv.itg"/>
  </def-label>

  <def-label name="adv.sint">
    <tags-item tags="adv.sint.comp"/>
    <tags-item tags="adv.sint.sup"/>
  </def-label>

  <def-label name="cnjadv" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label>

  <def-label name="cnjcoo" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>

  <def-label name="cnjsub" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>

  <!-- No ambiguities between pronouns in the masculine nominative -->
  <def-label name="prn.m.nom" closed="true">
    <tags-item tags="prn.ind.m.*.nom"/>
    <tags-item tags="prn.neg.m.*.nom"/>
    <tags-item tags="prn.def.m.*.nom"/>
  </def-label>

  <def-label name="prn.m.dat" closed="true">
    <tags-item tags="prn.ind.m.*.dat"/>
    <tags-item tags="prn.neg.m.*.dat"/>
    <tags-item tags="prn.def.m.*.dat"/>
  </def-label>

  <def-label name="prn.f.dat" closed="true">
    <tags-item tags="prn.ind.f.*.dat"/>
    <tags-item tags="prn.neg.f.*.dat"/>
    <tags-item tags="prn.def.f.*.dat"/>
  </def-label>

  <def-label name="adj.m.nom">
    <tags-item tags="adj.m.*.nom.*"/>
    <tags-item tags="adj.sint.m.*.nom.*"/>
    <tags-item tags="adj.sint.*.m.*.nom.*"/>
  </def-label>

  <def-label name="adj.m.dat">
    <tags-item tags="adj.m.*.dat.*"/>
    <tags-item tags="adj.sint.m.*.dat.*"/>
    <tags-item tags="adj.sint.*.m.*.dat.*"/>
  </def-label>

  <def-label name="adj.f.gen">
    <tags-item tags="adj.f.*.gen.*"/>
    <tags-item tags="adj.sint.f.*.gen.*"/>
  </def-label>

  <def-label name="adj.f.acc">
    <tags-item tags="adj.f.*.acc.*"/>
    <tags-item tags="adj.sint.f.*.acc.*"/>
  </def-label>

  <def-label name="adj.f.dat">
    <tags-item tags="adj.f.*.dat.*"/>
    <tags-item tags="adj.sint.f.*.dat.*"/>
  </def-label>

  <def-label name="adj.f.pl.loc">
    <tags-item tags="adj.f.pl.loc.*"/>
    <tags-item tags="adj.sint.f.pl.loc.*"/>
  </def-label>
  <def-label name="adj.f.pl.nom">
    <tags-item tags="adj.f.pl.nom.*"/>
    <tags-item tags="adj.sint.f.pl.nom.*"/>
  </def-label>
  <def-label name="adj.f.pl.voc.def">
    <tags-item tags="adj.f.pl.voc.def"/>
    <tags-item tags="adj.sint.f.pl.voc.def"/>
  </def-label>
  <def-label name="adj.f.sg.loc">
    <tags-item tags="adj.f.sg.loc.*"/>
    <tags-item tags="adj.sint.f.sg.loc.*"/>
  </def-label>
  <def-label name="adj.f.sg.nom">
    <tags-item tags="adj.f.sg.nom.*"/>
    <tags-item tags="adj.sint.f.sg.nom.*"/>
  </def-label>
  <def-label name="adj.f.sg.voc.def">
    <tags-item tags="adj.f.sg.voc.def"/>
    <tags-item tags="adj.sint.f.sg.voc.def"/>
  </def-label>
  <def-label name="adj.m.pl.acc">
    <tags-item tags="adj.m.pl.acc.*"/>
    <tags-item tags="adj.sint.m.pl.acc.*"/>
  </def-label>
  <def-label name="adj.m.pl.gen">
    <tags-item tags="adj.m.pl.gen.*"/>
    <tags-item tags="adj.sint.m.pl.gen.*"/>
  </def-label>
  <def-label name="adj.m.pl.loc">
    <tags-item tags="adj.m.pl.loc.*"/>
    <tags-item tags="adj.sint.m.pl.loc.*"/>
  </def-label>
  <def-label name="adj.m.pl.voc.def">
    <tags-item tags="adj.m.pl.voc.def"/>
    <tags-item tags="adj.sint.m.pl.voc.def"/>
  </def-label>
  <def-label name="adj.m.sg.acc">
    <tags-item tags="adj.m.sg.acc.*"/>
    <tags-item tags="adj.sint.m.sg.acc.*"/>
  </def-label>

  <def-label name="adj.m.sg.gen">
    <tags-item tags="adj.m.sg.gen.*"/>
    <tags-item tags="adj.sint.m.sg.gen.*"/>
  </def-label>

  <def-label name="adj.sint.m.gen">
    <tags-item tags="adj.sint.*.m.*.gen.*"/>
  </def-label>

  <def-label name="adj.sint.m.loc">
    <tags-item tags="adj.sint.*.m.*.loc.*"/>
  </def-label>

  <def-label name="adj.m.sg.loc">
    <tags-item tags="adj.m.sg.loc.*"/>
    <tags-item tags="adj.sint.m.sg.loc.*"/>
  </def-label>

  <def-label name="adj.m.sg.voc.def">
    <tags-item tags="adj.m.sg.voc.def"/>
    <tags-item tags="adj.sint.m.sg.voc.def"/>
  </def-label>
  <def-label name="adj.sint.f.pl.acc">
    <tags-item tags="adj.sint.*.f.pl.acc.*"/>
  </def-label>
  <def-label name="adj.sint.f.pl.dat">
    <tags-item tags="adj.sint.*.f.pl.dat.*"/>
  </def-label>
  <def-label name="adj.sint.f.pl.gen">
    <tags-item tags="adj.sint.*.f.pl.gen.*"/>
  </def-label>
  <def-label name="adj.sint.f.pl.loc">
    <tags-item tags="adj.sint.*.f.pl.loc.*"/>
  </def-label>
  <def-label name="adj.sint.f.pl.nom">
    <tags-item tags="adj.sint.*.f.pl.nom.*"/>
  </def-label>
  <def-label name="adj.sint.f.pl.voc.def">
    <tags-item tags="adj.sint.*.f.pl.voc.def"/>
  </def-label>
  <def-label name="adj.sint.f.sg.acc">
    <tags-item tags="adj.sint.*.f.sg.acc.*"/>
  </def-label>
  <def-label name="adj.sint.f.sg.dat">
    <tags-item tags="adj.sint.*.f.sg.dat.*"/>
  </def-label>
  <def-label name="adj.sint.f.sg.gen">
    <tags-item tags="adj.sint.*.f.sg.gen.*"/>
  </def-label>
  <def-label name="adj.sint.f.sg.loc">
    <tags-item tags="adj.sint.*.f.sg.loc.*"/>
  </def-label>
  <def-label name="adj.sint.f.sg.nom">
    <tags-item tags="adj.sint.*.f.sg.nom.*"/>
  </def-label>
  <def-label name="adj.sint.f.sg.voc.def">
    <tags-item tags="adj.sint.*.f.sg.voc.def"/>
  </def-label>
  <def-label name="adj.sint.m.pl.acc">
    <tags-item tags="adj.sint.*.m.pl.acc.*"/>
  </def-label>
  <def-label name="adj.sint.m.pl.voc.def">
    <tags-item tags="adj.sint.*.m.pl.voc.def"/>
  </def-label>
  <def-label name="adj.sint.m.sg.acc">
    <tags-item tags="adj.sint.*.m.sg.acc.*"/>
  </def-label>
  <def-label name="adj.sint.m.sg.voc.def">
    <tags-item tags="adj.sint.*.m.sg.voc.*"/>
  </def-label>

  <def-label name="det.m.nom" closed="true">
    <tags-item tags="det.*.m.*.nom"/>
  </def-label>
  <def-label name="det.m.dat" closed="true">
    <tags-item tags="det.*.m.*.dat"/>
  </def-label>

  <def-label name="det.dem.f.pl.acc" closed="true">
    <tags-item tags="det.dem.f.pl.acc"/>
  </def-label>
  <def-label name="det.dem.f.pl.dat" closed="true">
    <tags-item tags="det.dem.f.pl.dat"/>
  </def-label>
  <def-label name="det.dem.f.pl.gen" closed="true">
    <tags-item tags="det.dem.f.pl.gen"/>
  </def-label>
  <def-label name="det.dem.f.pl.loc" closed="true">
    <tags-item tags="det.dem.f.pl.loc"/>
  </def-label>
  <def-label name="det.dem.f.pl.nom" closed="true">
    <tags-item tags="det.dem.f.pl.nom"/>
  </def-label>
  <def-label name="det.dem.f.sg.acc" closed="true">
    <tags-item tags="det.dem.f.sg.acc"/>
  </def-label>
  <def-label name="det.dem.f.sg.dat" closed="true">
    <tags-item tags="det.dem.f.sg.dat"/>
  </def-label>
  <def-label name="det.dem.f.sg.gen" closed="true">
    <tags-item tags="det.dem.f.sg.gen"/>
  </def-label>
  <def-label name="det.dem.f.sg.loc" closed="true">
    <tags-item tags="det.dem.f.sg.loc"/>
  </def-label>
  <def-label name="det.dem.f.sg.nom" closed="true">
    <tags-item tags="det.dem.f.sg.nom"/>
  </def-label>
  <def-label name="det.dem.mf.pl.loc" closed="true">
    <tags-item tags="det.dem.mf.pl.loc"/>
  </def-label>
  <def-label name="det.dem.mf.sg.loc" closed="true">
    <tags-item tags="det.dem.mf.sg.loc"/>
  </def-label>
  <def-label name="det.dem.m.pl.acc" closed="true">
    <tags-item tags="det.dem.m.pl.acc"/>
  </def-label>
  <def-label name="det.dem.m.pl.gen" closed="true">
    <tags-item tags="det.dem.m.pl.gen"/>
  </def-label>
  <def-label name="det.dem.m.pl.loc" closed="true">
    <tags-item tags="det.dem.m.pl.loc"/>
  </def-label>
  <def-label name="det.dem.m.sg.acc" closed="true">
    <tags-item tags="det.dem.m.sg.acc"/>
  </def-label>
  <def-label name="det.dem.m.sg.gen" closed="true">
    <tags-item tags="det.dem.m.sg.gen"/>
  </def-label>
  <def-label name="det.dem.m.sg.loc" closed="true">
    <tags-item tags="det.dem.m.sg.loc"/>
  </def-label>
  <def-label name="det.ind.f.pl.acc" closed="true">
    <tags-item tags="det.ind.f.pl.acc"/>
  </def-label>
  <def-label name="det.ind.f.pl.dat" closed="true">
    <tags-item tags="det.ind.f.pl.dat"/>
  </def-label>
  <def-label name="det.ind.f.pl.gen" closed="true">
    <tags-item tags="det.ind.f.pl.gen"/>
  </def-label>
  <def-label name="det.ind.f.pl.loc" closed="true">
    <tags-item tags="det.ind.f.pl.loc"/>
  </def-label>
  <def-label name="det.ind.f.pl.nom" closed="true">
    <tags-item tags="det.ind.f.pl.nom"/>
  </def-label>
  <def-label name="det.ind.m.pl.acc" closed="true">
    <tags-item tags="det.ind.m.pl.acc"/>
  </def-label>
  <def-label name="det.ind.m.pl.gen" closed="true">
    <tags-item tags="det.ind.m.pl.gen"/>
  </def-label>
  <def-label name="det.ind.m.pl.loc" closed="true">
    <tags-item tags="det.ind.m.pl.loc"/>
  </def-label>
  <def-label name="det.pos.f.pl.acc" closed="true">
    <tags-item tags="det.pos.f.pl.acc"/>
  </def-label>
  <def-label name="det.pos.f.pl.dat" closed="true">
    <tags-item tags="det.pos.f.pl.dat"/>
  </def-label>
  <def-label name="det.pos.f.pl.gen" closed="true">
    <tags-item tags="det.pos.f.pl.gen"/>
  </def-label>
  <def-label name="det.pos.f.pl.loc" closed="true">
    <tags-item tags="det.pos.f.pl.loc"/>
  </def-label>
  <def-label name="det.pos.f.pl.nom" closed="true">
    <tags-item tags="det.pos.f.pl.nom"/>
  </def-label>
  <def-label name="det.pos.f.sg.acc" closed="true">
    <tags-item tags="det.pos.f.sg.acc"/>
  </def-label>
  <def-label name="det.pos.f.sg.dat" closed="true">
    <tags-item tags="det.pos.f.sg.dat"/>
  </def-label>
  <def-label name="det.pos.f.sg.gen" closed="true">
    <tags-item tags="det.pos.f.sg.gen"/>
  </def-label>
  <def-label name="det.pos.f.sg.loc" closed="true">
    <tags-item tags="det.pos.f.sg.loc"/>
  </def-label>
  <def-label name="det.pos.f.sg.nom" closed="true">
    <tags-item tags="det.pos.f.sg.nom"/>
  </def-label>
  <def-label name="det.pos.m.pl.acc" closed="true">
    <tags-item tags="det.pos.m.pl.acc"/>
  </def-label>
  <def-label name="det.pos.m.pl.gen" closed="true">
    <tags-item tags="det.pos.m.pl.gen"/>
  </def-label>
  <def-label name="det.pos.m.pl.loc" closed="true">
    <tags-item tags="det.pos.m.pl.loc"/>
  </def-label>
  <def-label name="det.pos.m.sg.acc" closed="true">
    <tags-item tags="det.pos.m.sg.acc"/>
  </def-label>
  <def-label name="det.pos.m.sg.gen" closed="true">
    <tags-item tags="det.pos.m.sg.gen"/>
  </def-label>
  <def-label name="det.pos.m.sg.loc" closed="true">
    <tags-item tags="det.pos.m.sg.loc"/>
  </def-label>

  <def-label name="n.m.nom">
    <tags-item tags="n.m.*.nom"/>
  </def-label>

  <def-label name="n.m.dat">
    <tags-item tags="n.m.*.dat"/>
  </def-label>

  <def-label name="n.m.ins">
    <tags-item tags="n.m.*.ins"/>
  </def-label>

  <def-label name="n.f.pl.abl">
    <tags-item tags="n.f.pl.abl"/>
  </def-label>
  <def-label name="n.f.pl.acc">
    <tags-item tags="n.f.pl.acc"/>
  </def-label>
  <def-label name="n.f.pl.dat">
    <tags-item tags="n.f.pl.dat"/>
  </def-label>
  <def-label name="n.f.pl.gen">
    <tags-item tags="n.f.pl.gen"/>
  </def-label>
  <def-label name="n.f.pl.ins">
    <tags-item tags="n.f.pl.ins"/>
  </def-label>
  <def-label name="n.f.pl.loc">
    <tags-item tags="n.f.pl.loc"/>
  </def-label>
  <def-label name="n.f.pl.nom">
    <tags-item tags="n.f.pl.nom"/>
  </def-label>
  <def-label name="n.f.pl.voc">
    <tags-item tags="n.f.pl.voc"/>
  </def-label>
  <def-label name="n.f.sg.abl">
    <tags-item tags="n.f.sg.abl"/>
  </def-label>
  <def-label name="n.f.sg.acc">
    <tags-item tags="n.f.sg.acc"/>
  </def-label>
  <def-label name="n.f.sg.dat">
    <tags-item tags="n.f.sg.dat"/>
  </def-label>
  <def-label name="n.f.sg.gen">
    <tags-item tags="n.f.sg.gen"/>
  </def-label>
  <def-label name="n.f.sg.ins">
    <tags-item tags="n.f.sg.ins"/>
  </def-label>
  <def-label name="n.f.sg.loc">
    <tags-item tags="n.f.sg.loc"/>
  </def-label>
  <def-label name="n.f.sg.nom">
    <tags-item tags="n.f.sg.nom"/>
  </def-label>
  <def-label name="n.f.sg.voc">
    <tags-item tags="n.f.sg.voc"/>
  </def-label>
  <def-label name="n.m.pl.abl">
    <tags-item tags="n.m.pl.abl"/>
  </def-label>
  <def-label name="n.m.pl.acc">
    <tags-item tags="n.m.pl.acc"/>
  </def-label>
  <def-label name="n.m.pl.gen">
    <tags-item tags="n.m.pl.gen"/>
  </def-label>
  <def-label name="n.m.pl.loc">
    <tags-item tags="n.m.pl.loc"/>
  </def-label>
  <def-label name="n.m.pl.voc">
    <tags-item tags="n.m.pl.voc"/>
  </def-label>
  <def-label name="n.m.sg.abl">
    <tags-item tags="n.m.sg.abl"/>
  </def-label>
  <def-label name="n.m.sg.acc">
    <tags-item tags="n.m.sg.acc"/>
  </def-label>
  <def-label name="n.m.sg.gen">
    <tags-item tags="n.m.sg.gen"/>
  </def-label>
  <def-label name="n.m.sg.loc">
    <tags-item tags="n.m.sg.loc"/>
  </def-label>
  <def-label name="n.m.sg.voc">
    <tags-item tags="n.m.sg.voc"/>
  </def-label>

  <def-label name="np.f.indecl">
    <tags-item tags="np.*.f.*.indecl"/>
  </def-label>

  <def-label name="np.m.indecl">
    <tags-item tags="np.*.m.*.indecl"/>
  </def-label>

  <def-label name="np.top.m.dat">
    <tags-item tags="np.top.m.*.dat"/>
  </def-label>

  <def-label name="np.top.m.nom">
    <tags-item tags="np.top.m.*.nom"/>
  </def-label>

  <def-label name="np.al.f.pl.acc">
    <tags-item tags="np.al.f.pl.acc"/>
  </def-label>
  <def-label name="np.al.f.pl.dat">
    <tags-item tags="np.al.f.pl.dat"/>
  </def-label>
  <def-label name="np.al.f.pl.gen">
    <tags-item tags="np.al.f.pl.gen"/>
  </def-label>
  <def-label name="np.al.f.pl.loc">
    <tags-item tags="np.al.f.pl.loc"/>
  </def-label>
  <def-label name="np.al.f.pl.nom">
    <tags-item tags="np.al.f.pl.nom"/>
  </def-label>
  <def-label name="np.al.f.pl.voc">
    <tags-item tags="np.al.f.pl.voc"/>
  </def-label>
  <def-label name="np.al.f.sg.acc">
    <tags-item tags="np.al.f.sg.acc"/>
  </def-label>
  <def-label name="np.al.f.sg.dat">
    <tags-item tags="np.al.f.sg.dat"/>
  </def-label>
  <def-label name="np.al.f.sg.gen">
    <tags-item tags="np.al.f.sg.gen"/>
  </def-label>
  <def-label name="np.al.f.sg.loc">
    <tags-item tags="np.al.f.sg.loc"/>
  </def-label>
  <def-label name="np.al.f.sg.nom">
    <tags-item tags="np.al.f.sg.nom"/>
  </def-label>
  <def-label name="np.al.f.sg.voc">
    <tags-item tags="np.al.f.sg.voc"/>
  </def-label>
  <def-label name="np.ant.f.pl.abl">
    <tags-item tags="np.ant.f.pl.abl"/>
  </def-label>
  <def-label name="np.ant.f.pl.acc">
    <tags-item tags="np.ant.f.pl.acc"/>
  </def-label>
  <def-label name="np.ant.f.pl.dat">
    <tags-item tags="np.ant.f.pl.dat"/>
  </def-label>
  <def-label name="np.ant.f.pl.gen">
    <tags-item tags="np.ant.f.pl.gen"/>
  </def-label>
  <def-label name="np.ant.f.pl.ins">
    <tags-item tags="np.ant.f.pl.ins"/>
  </def-label>
  <def-label name="np.ant.f.pl.loc">
    <tags-item tags="np.ant.f.pl.loc"/>
  </def-label>
  <def-label name="np.ant.f.pl.nom">
    <tags-item tags="np.ant.f.pl.nom"/>
  </def-label>
  <def-label name="np.ant.f.pl.voc">
    <tags-item tags="np.ant.f.pl.voc"/>
  </def-label>
  <def-label name="np.ant.f.sg.abl">
    <tags-item tags="np.ant.f.sg.abl"/>
  </def-label>
  <def-label name="np.ant.f.sg.acc">
    <tags-item tags="np.ant.f.sg.acc"/>
  </def-label>
  <def-label name="np.ant.f.sg.dat">
    <tags-item tags="np.ant.f.sg.dat"/>
  </def-label>
  <def-label name="np.ant.f.sg.gen">
    <tags-item tags="np.ant.f.sg.gen"/>
  </def-label>
  <def-label name="np.ant.f.sg.ins">
    <tags-item tags="np.ant.f.sg.ins"/>
  </def-label>
  <def-label name="np.ant.f.sg.loc">
    <tags-item tags="np.ant.f.sg.loc"/>
  </def-label>
  <def-label name="np.ant.f.sg.nom">
    <tags-item tags="np.ant.f.sg.nom"/>
  </def-label>
  <def-label name="np.ant.f.sg.voc">
    <tags-item tags="np.ant.f.sg.voc"/>
  </def-label>
  <def-label name="np.ant.m.pl.abl">
    <tags-item tags="np.ant.m.pl.abl"/>
  </def-label>
  <def-label name="np.ant.m.pl.acc">
    <tags-item tags="np.ant.m.pl.acc"/>
  </def-label>
  <def-label name="np.ant.m.pl.dat">
    <tags-item tags="np.ant.m.pl.dat"/>
  </def-label>
  <def-label name="np.ant.m.pl.gen">
    <tags-item tags="np.ant.m.pl.gen"/>
  </def-label>
  <def-label name="np.ant.m.pl.ins">
    <tags-item tags="np.ant.m.pl.ins"/>
  </def-label>
  <def-label name="np.ant.m.pl.loc">
    <tags-item tags="np.ant.m.pl.loc"/>
  </def-label>
  <def-label name="np.ant.m.pl.nom">
    <tags-item tags="np.ant.m.pl.nom"/>
  </def-label>
  <def-label name="np.ant.m.pl.voc">
    <tags-item tags="np.ant.m.pl.voc"/>
  </def-label>
  <def-label name="np.ant.m.sg.abl">
    <tags-item tags="np.ant.m.sg.abl"/>
  </def-label>
  <def-label name="np.ant.m.sg.acc">
    <tags-item tags="np.ant.m.sg.acc"/>
  </def-label>
  <def-label name="np.ant.m.sg.dat">
    <tags-item tags="np.ant.m.sg.dat"/>
  </def-label>
  <def-label name="np.ant.m.sg.gen">
    <tags-item tags="np.ant.m.sg.gen"/>
  </def-label>
  <def-label name="np.ant.m.sg.indecl">
    <tags-item tags="np.ant.m.sg.indecl"/>
  </def-label>
  <def-label name="np.ant.m.sg.ins">
    <tags-item tags="np.ant.m.sg.ins"/>
  </def-label>
  <def-label name="np.ant.m.sg.loc">
    <tags-item tags="np.ant.m.sg.loc"/>
  </def-label>
  <def-label name="np.ant.m.sg.nom">
    <tags-item tags="np.ant.m.sg.nom"/>
  </def-label>
  <def-label name="np.ant.m.sg.voc">
    <tags-item tags="np.ant.m.sg.voc"/>
  </def-label>
  <def-label name="np.top.f.sg.abl">
    <tags-item tags="np.top.f.sg.abl"/>
  </def-label>
  <def-label name="np.top.f.sg.acc">
    <tags-item tags="np.top.f.sg.acc"/>
  </def-label>
  <def-label name="np.top.f.sg.dat">
    <tags-item tags="np.top.f.sg.dat"/>
  </def-label>
  <def-label name="np.top.f.sg.gen">
    <tags-item tags="np.top.f.sg.gen"/>
  </def-label>
  <def-label name="np.top.f.sg.indecl">
    <tags-item tags="np.top.f.sg.indecl"/>
  </def-label>
  <def-label name="np.top.f.sg.ins">
    <tags-item tags="np.top.f.sg.ins"/>
  </def-label>
  <def-label name="np.top.f.sg.loc">
    <tags-item tags="np.top.f.sg.loc"/>
  </def-label>
  <def-label name="np.top.f.sg.nom">
    <tags-item tags="np.top.f.sg.nom"/>
  </def-label>
  <def-label name="np.top.f.sg.voc">
    <tags-item tags="np.top.f.sg.voc"/>
  </def-label>
  <def-label name="np.top.m.sg.acc">
    <tags-item tags="np.top.m.sg.acc"/>
  </def-label>
  <def-label name="np.top.m.sg.gen">
    <tags-item tags="np.top.m.sg.gen"/>
  </def-label>
  <def-label name="np.top.m.sg.indecl">
    <tags-item tags="np.top.m.sg.indecl"/>
  </def-label>
  <def-label name="np.top.m.sg.loc">
    <tags-item tags="np.top.m.sg.loc"/>
  </def-label>

  <def-label name="np.top.m.sg.voc">
    <tags-item tags="np.top.m.sg.voc"/>
  </def-label>
  <def-label name="num.f.pl.acc" closed="true">
    <tags-item tags="num.f.pl.acc"/>
  </def-label>
  <def-label name="num.f.pl.dat" closed="true">
    <tags-item tags="num.f.pl.dat"/>
  </def-label>
  <def-label name="num.f.pl.gen" closed="true">
    <tags-item tags="num.f.pl.gen"/>
  </def-label>
  <def-label name="num.f.pl.loc" closed="true">
    <tags-item tags="num.f.pl.loc"/>
  </def-label>
  <def-label name="num.f.pl.nom" closed="true">
    <tags-item tags="num.f.pl.nom"/>
  </def-label>
  <def-label name="num.f.sg.acc" closed="true">
    <tags-item tags="num.f.sg.acc"/>
  </def-label>
  <def-label name="num.f.sg.dat" closed="true">
    <tags-item tags="num.f.sg.dat"/>
  </def-label>
  <def-label name="num.f.sg.gen" closed="true">
    <tags-item tags="num.f.sg.gen"/>
  </def-label>
  <def-label name="num.f.sg.loc" closed="true">
    <tags-item tags="num.f.sg.loc"/>
  </def-label>
  <def-label name="num.f.sg.nom" closed="true">
    <tags-item tags="num.f.sg.nom"/>
  </def-label>
  <def-label name="num.m.pl.acc" closed="true">
    <tags-item tags="num.m.pl.acc"/>
  </def-label>
  <def-label name="num.m.pl.dat" closed="true">
    <tags-item tags="num.m.pl.dat"/>
  </def-label>
  <def-label name="num.m.pl.gen" closed="true">
    <tags-item tags="num.m.pl.gen"/>
  </def-label>
  <def-label name="num.m.pl.loc" closed="true">
    <tags-item tags="num.m.pl.loc"/>
  </def-label>
  <def-label name="num.m.pl.nom" closed="true">
    <tags-item tags="num.m.pl.nom"/>
  </def-label>
  <def-label name="num.m.sg.acc" closed="true">
    <tags-item tags="num.m.sg.acc"/>
  </def-label>
  <def-label name="num.m.sg.dat" closed="true">
    <tags-item tags="num.m.sg.dat"/>
  </def-label>
  <def-label name="num.m.sg.gen" closed="true">
    <tags-item tags="num.m.sg.gen"/>
  </def-label>
  <def-label name="num.m.sg.loc" closed="true">
    <tags-item tags="num.m.sg.loc"/>
  </def-label>
  <def-label name="num.m.sg.nom" closed="true">
    <tags-item tags="num.m.sg.nom"/>
  </def-label>
  <def-label name="num.pl.indecl" closed="true">
    <tags-item tags="num.pl.indecl"/>
  </def-label>

  <def-label name="prn.def.f.pl.acc" closed="true">
    <tags-item tags="prn.def.f.pl.acc"/>
  </def-label>
  <def-label name="prn.def.f.pl.gen" closed="true">
    <tags-item tags="prn.def.f.pl.gen"/>
  </def-label>
  <def-label name="prn.def.f.pl.loc" closed="true">
    <tags-item tags="prn.def.f.pl.loc"/>
  </def-label>
  <def-label name="prn.def.f.pl.nom" closed="true">
    <tags-item tags="prn.def.f.pl.nom"/>
  </def-label>
  <def-label name="prn.def.f.sg.acc" closed="true">
    <tags-item tags="prn.def.f.sg.acc"/>
  </def-label>
  <def-label name="prn.def.f.sg.gen" closed="true">
    <tags-item tags="prn.def.f.sg.gen"/>
  </def-label>
  <def-label name="prn.def.f.sg.loc" closed="true">
    <tags-item tags="prn.def.f.sg.loc"/>
  </def-label>
  <def-label name="prn.def.f.sg.nom" closed="true">
    <tags-item tags="prn.def.f.sg.nom"/>
  </def-label>
  <def-label name="prn.def.m.pl.acc" closed="true">
    <tags-item tags="prn.def.m.pl.acc"/>
  </def-label>
  <def-label name="prn.def.m.pl.gen" closed="true">
    <tags-item tags="prn.def.m.pl.gen"/>
  </def-label>
  <def-label name="prn.def.m.pl.loc" closed="true">
    <tags-item tags="prn.def.m.pl.loc"/>
  </def-label>
  <def-label name="prn.def.m.sg.acc" closed="true">
    <tags-item tags="prn.def.m.sg.acc"/>
  </def-label>
  <def-label name="prn.def.m.sg.gen" closed="true">
    <tags-item tags="prn.def.m.sg.gen"/>
  </def-label>
  <def-label name="prn.def.m.sg.loc" closed="true">
    <tags-item tags="prn.def.m.sg.loc"/>
  </def-label>
  <def-label name="prn.emph.f.pl.acc" closed="true">
    <tags-item tags="prn.emph.f.pl.acc"/>
  </def-label>
  <def-label name="prn.emph.f.pl.dat" closed="true">
    <tags-item tags="prn.emph.f.pl.dat"/>
  </def-label>
  <def-label name="prn.emph.f.pl.gen" closed="true">
    <tags-item tags="prn.emph.f.pl.gen"/>
  </def-label>
  <def-label name="prn.emph.f.pl.loc" closed="true">
    <tags-item tags="prn.emph.f.pl.loc"/>
  </def-label>
  <def-label name="prn.emph.f.pl.nom" closed="true">
    <tags-item tags="prn.emph.f.pl.nom"/>
  </def-label>
  <def-label name="prn.emph.f.sg.acc" closed="true">
    <tags-item tags="prn.emph.f.sg.acc"/>
  </def-label>
  <def-label name="prn.emph.f.sg.dat" closed="true">
    <tags-item tags="prn.emph.f.sg.dat"/>
  </def-label>
  <def-label name="prn.emph.f.sg.gen" closed="true">
    <tags-item tags="prn.emph.f.sg.gen"/>
  </def-label>
  <def-label name="prn.emph.f.sg.loc" closed="true">
    <tags-item tags="prn.emph.f.sg.loc"/>
  </def-label>
  <def-label name="prn.emph.f.sg.nom" closed="true">
    <tags-item tags="prn.emph.f.sg.nom"/>
  </def-label>
  <def-label name="prn.emph.m.pl.acc" closed="true">
    <tags-item tags="prn.emph.m.pl.acc"/>
  </def-label>
  <def-label name="prn.emph.m.pl.dat" closed="true">
    <tags-item tags="prn.emph.m.pl.dat"/>
  </def-label>
  <def-label name="prn.emph.m.pl.gen" closed="true">
    <tags-item tags="prn.emph.m.pl.gen"/>
  </def-label>
  <def-label name="prn.emph.m.pl.loc" closed="true">
    <tags-item tags="prn.emph.m.pl.loc"/>
  </def-label>
  <def-label name="prn.emph.m.pl.nom" closed="true">
    <tags-item tags="prn.emph.m.pl.nom"/>
  </def-label>
  <def-label name="prn.emph.m.sg.acc" closed="true">
    <tags-item tags="prn.emph.m.sg.acc"/>
  </def-label>
  <def-label name="prn.emph.m.sg.dat" closed="true">
    <tags-item tags="prn.emph.m.sg.dat"/>
  </def-label>
  <def-label name="prn.emph.m.sg.gen" closed="true">
    <tags-item tags="prn.emph.m.sg.gen"/>
  </def-label>
  <def-label name="prn.emph.m.sg.loc" closed="true">
    <tags-item tags="prn.emph.m.sg.loc"/>
  </def-label>
  <def-label name="prn.emph.m.sg.nom" closed="true">
    <tags-item tags="prn.emph.m.sg.nom"/>
  </def-label>
  <def-label name="prn.ind.f.pl.acc" closed="true">
    <tags-item tags="prn.ind.f.pl.acc"/>
  </def-label>
  <def-label name="prn.ind.f.pl.gen" closed="true">
    <tags-item tags="prn.ind.f.pl.gen"/>
  </def-label>
  <def-label name="prn.ind.f.pl.loc" closed="true">
    <tags-item tags="prn.ind.f.pl.loc"/>
  </def-label>
  <def-label name="prn.ind.f.pl.nom" closed="true">
    <tags-item tags="prn.ind.f.pl.nom"/>
  </def-label>
  <def-label name="prn.ind.f.sg.acc" closed="true">
    <tags-item tags="prn.ind.f.sg.acc"/>
  </def-label>
  <def-label name="prn.ind.f.sg.gen" closed="true">
    <tags-item tags="prn.ind.f.sg.gen"/>
  </def-label>
  <def-label name="prn.ind.f.sg.loc" closed="true">
    <tags-item tags="prn.ind.f.sg.loc"/>
  </def-label>
  <def-label name="prn.ind.f.sg.nom" closed="true">
    <tags-item tags="prn.ind.f.sg.nom"/>
  </def-label>
  <def-label name="prn.ind.mf.sp.acc" closed="true">
    <tags-item tags="prn.ind.mf.sp.acc"/>
  </def-label>
  <def-label name="prn.ind.mf.sp.dat" closed="true">
    <tags-item tags="prn.ind.mf.sp.dat"/>
  </def-label>
  <def-label name="prn.ind.mf.sp.gen" closed="true">
    <tags-item tags="prn.ind.mf.sp.gen"/>
  </def-label>
  <def-label name="prn.ind.mf.sp.loc" closed="true">
    <tags-item tags="prn.ind.mf.sp.loc"/>
  </def-label>
  <def-label name="prn.ind.mf.sp.nom" closed="true">
    <tags-item tags="prn.ind.mf.sp.nom"/>
  </def-label>
  <def-label name="prn.ind.m.pl.acc" closed="true">
    <tags-item tags="prn.ind.m.pl.acc"/>
  </def-label>
  <def-label name="prn.ind.m.pl.gen" closed="true">
    <tags-item tags="prn.ind.m.pl.gen"/>
  </def-label>
  <def-label name="prn.ind.m.pl.loc" closed="true">
    <tags-item tags="prn.ind.m.pl.loc"/>
  </def-label>
  <def-label name="prn.ind.m.sg.acc" closed="true">
    <tags-item tags="prn.ind.m.sg.acc"/>
  </def-label>
  <def-label name="prn.ind.m.sg.gen" closed="true">
    <tags-item tags="prn.ind.m.sg.gen"/>
  </def-label>
  <def-label name="prn.ind.m.sg.loc" closed="true">
    <tags-item tags="prn.ind.m.sg.loc"/>
  </def-label>
  <def-label name="prn.itg.f.pl.acc" closed="true">
    <tags-item tags="prn.itg.f.pl.acc"/>
  </def-label>
  <def-label name="prn.itg.f.pl.dat" closed="true">
    <tags-item tags="prn.itg.f.pl.dat"/>
  </def-label>
  <def-label name="prn.itg.f.pl.gen" closed="true">
    <tags-item tags="prn.itg.f.pl.gen"/>
  </def-label>
  <def-label name="prn.itg.f.pl.loc" closed="true">
    <tags-item tags="prn.itg.f.pl.loc"/>
  </def-label>
  <def-label name="prn.itg.f.pl.nom" closed="true">
    <tags-item tags="prn.itg.f.pl.nom"/>
  </def-label>
  <def-label name="prn.itg.f.sg.acc" closed="true">
    <tags-item tags="prn.itg.f.sg.acc"/>
  </def-label>
  <def-label name="prn.itg.f.sg.dat" closed="true">
    <tags-item tags="prn.itg.f.sg.dat"/>
  </def-label>
  <def-label name="prn.itg.f.sg.gen" closed="true">
    <tags-item tags="prn.itg.f.sg.gen"/>
  </def-label>
  <def-label name="prn.itg.f.sg.loc" closed="true">
    <tags-item tags="prn.itg.f.sg.loc"/>
  </def-label>
  <def-label name="prn.itg.f.sg.nom" closed="true">
    <tags-item tags="prn.itg.f.sg.nom"/>
  </def-label>
  <def-label name="prn.itg.mf.sp.acc" closed="true">
    <tags-item tags="prn.itg.mf.sp.acc"/>
  </def-label>
  <def-label name="prn.itg.mf.sp.dat" closed="true">
    <tags-item tags="prn.itg.mf.sp.dat"/>
  </def-label>
  <def-label name="prn.itg.mf.sp.gen" closed="true">
    <tags-item tags="prn.itg.mf.sp.gen"/>
  </def-label>
  <def-label name="prn.itg.mf.sp.loc" closed="true">
    <tags-item tags="prn.itg.mf.sp.loc"/>
  </def-label>
  <def-label name="prn.itg.mf.sp.nom" closed="true">
    <tags-item tags="prn.itg.mf.sp.nom"/>
  </def-label>
  <def-label name="prn.itg.m.pl.acc" closed="true">
    <tags-item tags="prn.itg.m.pl.acc"/>
  </def-label>
  <def-label name="prn.itg.m.pl.dat" closed="true">
    <tags-item tags="prn.itg.m.pl.dat"/>
  </def-label>
  <def-label name="prn.itg.m.pl.gen" closed="true">
    <tags-item tags="prn.itg.m.pl.gen"/>
  </def-label>
  <def-label name="prn.itg.m.pl.loc" closed="true">
    <tags-item tags="prn.itg.m.pl.loc"/>
  </def-label>
  <def-label name="prn.itg.m.pl.nom" closed="true">
    <tags-item tags="prn.itg.m.pl.nom"/>
  </def-label>
  <def-label name="prn.itg.m.sg.acc" closed="true">
    <tags-item tags="prn.itg.m.sg.acc"/>
  </def-label>
  <def-label name="prn.itg.m.sg.dat" closed="true">
    <tags-item tags="prn.itg.m.sg.dat"/>
  </def-label>
  <def-label name="prn.itg.m.sg.gen" closed="true">
    <tags-item tags="prn.itg.m.sg.gen"/>
  </def-label>
  <def-label name="prn.itg.m.sg.loc" closed="true">
    <tags-item tags="prn.itg.m.sg.loc"/>
  </def-label>
  <def-label name="prn.itg.m.sg.nom" closed="true">
    <tags-item tags="prn.itg.m.sg.nom"/>
  </def-label>
  <def-label name="prn.neg.f.pl.acc" closed="true">
    <tags-item tags="prn.neg.f.pl.acc"/>
  </def-label>
  <def-label name="prn.neg.f.pl.gen" closed="true">
    <tags-item tags="prn.neg.f.pl.gen"/>
  </def-label>
  <def-label name="prn.neg.f.pl.loc" closed="true">
    <tags-item tags="prn.neg.f.pl.loc"/>
  </def-label>
  <def-label name="prn.neg.f.pl.nom" closed="true">
    <tags-item tags="prn.neg.f.pl.nom"/>
  </def-label>
  <def-label name="prn.neg.f.sg.acc" closed="true">
    <tags-item tags="prn.neg.f.sg.acc"/>
  </def-label>
  <def-label name="prn.neg.f.sg.gen" closed="true">
    <tags-item tags="prn.neg.f.sg.gen"/>
  </def-label>
  <def-label name="prn.neg.f.sg.loc" closed="true">
    <tags-item tags="prn.neg.f.sg.loc"/>
  </def-label>
  <def-label name="prn.neg.f.sg.nom" closed="true">
    <tags-item tags="prn.neg.f.sg.nom"/>
  </def-label>
  <def-label name="prn.neg.mf.sp.acc" closed="true">
    <tags-item tags="prn.neg.mf.sp.acc"/>
  </def-label>
  <def-label name="prn.neg.mf.sp.dat" closed="true">
    <tags-item tags="prn.neg.mf.sp.dat"/>
  </def-label>
  <def-label name="prn.neg.mf.sp.gen" closed="true">
    <tags-item tags="prn.neg.mf.sp.gen"/>
  </def-label>
  <def-label name="prn.neg.mf.sp.loc" closed="true">
    <tags-item tags="prn.neg.mf.sp.loc"/>
  </def-label>
  <def-label name="prn.neg.mf.sp.nom" closed="true">
    <tags-item tags="prn.neg.mf.sp.nom"/>
  </def-label>
  <def-label name="prn.neg.m.pl.acc" closed="true">
    <tags-item tags="prn.neg.m.pl.acc"/>
  </def-label>
  <def-label name="prn.neg.m.pl.gen" closed="true">
    <tags-item tags="prn.neg.m.pl.gen"/>
  </def-label>
  <def-label name="prn.neg.m.pl.loc" closed="true">
    <tags-item tags="prn.neg.m.pl.loc"/>
  </def-label>
  <def-label name="prn.neg.m.sg.acc" closed="true">
    <tags-item tags="prn.neg.m.sg.acc"/>
  </def-label>
  <def-label name="prn.neg.m.sg.gen" closed="true">
    <tags-item tags="prn.neg.m.sg.gen"/>
  </def-label>
  <def-label name="prn.neg.m.sg.loc" closed="true">
    <tags-item tags="prn.neg.m.sg.loc"/>
  </def-label>

  <def-label name="prn.pers.p1.nom" closed="true">
    <tags-item tags="prn.pers.p1.*.*.nom"/>
  </def-label>
  <def-label name="prn.pers.p2.nom" closed="true">
    <tags-item tags="prn.pers.p2.*.*.nom"/>
  </def-label>
  <def-label name="prn.pers.p1.acc" closed="true">
    <tags-item tags="prn.pers.p1.*.*.acc"/>
  </def-label>
  <def-label name="prn.pers.p1.dat" closed="true">
    <tags-item tags="prn.pers.p1.*.*.dat"/>
  </def-label>
  <def-label name="prn.pers.p2.dat" closed="true">
    <tags-item tags="prn.pers.p2.*.*.dat"/>
  </def-label>
  <def-label name="prn.pers.p1.gen" closed="true">
    <tags-item tags="prn.pers.p1.*.gen"/>
  </def-label>
  <def-label name="prn.pers.p2.gen" closed="true">
    <tags-item tags="prn.pers.p2.*.gen"/>
  </def-label>
  <def-label name="prn.pers.p1.loc" closed="true">
    <tags-item tags="prn.pers.p1.*.*.loc"/>
  </def-label>
  <def-label name="prn.pers.p2.loc" closed="true">
    <tags-item tags="prn.pers.p2.*.*.loc"/>
  </def-label>
  <def-label name="prn.pers.p2.mf.pl.acc" closed="true">
    <tags-item tags="prn.pers.p2.mf.pl.acc"/>
  </def-label>
  <def-label name="prn.pers.p2.mf.sg.acc" closed="true">
    <tags-item tags="prn.pers.p2.mf.sg.acc"/>
  </def-label>
  <def-label name="prn.pers.p3.f.pl.acc" closed="true">
    <tags-item tags="prn.pers.p3.f.pl.acc"/>
  </def-label>
  <def-label name="prn.pers.p3.f.pl.dat" closed="true">
    <tags-item tags="prn.pers.p3.f.pl.dat"/>
  </def-label>
  <def-label name="prn.pers.p3.f.pl.gen" closed="true">
    <tags-item tags="prn.pers.p3.f.pl.gen"/>
  </def-label>
  <def-label name="prn.pers.p3.f.pl.loc" closed="true">
    <tags-item tags="prn.pers.p3.f.pl.loc"/>
  </def-label>
  <def-label name="prn.pers.p3.f.pl.nom" closed="true">
    <tags-item tags="prn.pers.p3.f.pl.nom"/>
  </def-label>
  <def-label name="prn.pers.p3.f.sg.acc" closed="true">
    <tags-item tags="prn.pers.p3.f.sg.acc"/>
  </def-label>
  <def-label name="prn.pers.p3.f.sg.dat" closed="true">
    <tags-item tags="prn.pers.p3.f.sg.dat"/>
  </def-label>
  <def-label name="prn.pers.p3.f.sg.gen" closed="true">
    <tags-item tags="prn.pers.p3.f.sg.gen"/>
  </def-label>
  <def-label name="prn.pers.p3.f.sg.loc" closed="true">
    <tags-item tags="prn.pers.p3.f.sg.loc"/>
  </def-label>
  <def-label name="prn.pers.p3.f.sg.nom" closed="true">
    <tags-item tags="prn.pers.p3.f.sg.nom"/>
  </def-label>
  <def-label name="prn.pers.p3.m.pl.acc" closed="true">
    <tags-item tags="prn.pers.p3.m.pl.acc"/>
  </def-label>
  <def-label name="prn.pers.p3.m.pl.dat" closed="true">
    <tags-item tags="prn.pers.p3.m.pl.dat"/>
  </def-label>
  <def-label name="prn.pers.p3.m.pl.gen" closed="true">
    <tags-item tags="prn.pers.p3.m.pl.gen"/>
  </def-label>
  <def-label name="prn.pers.p3.m.pl.loc" closed="true">
    <tags-item tags="prn.pers.p3.m.pl.loc"/>
  </def-label>
  <def-label name="prn.pers.p3.m.pl.nom" closed="true">
    <tags-item tags="prn.pers.p3.m.pl.nom"/>
  </def-label>
  <def-label name="prn.pers.p3.m.sg.acc" closed="true">
    <tags-item tags="prn.pers.p3.m.sg.acc"/>
  </def-label>
  <def-label name="prn.pers.p3.m.sg.dat" closed="true">
    <tags-item tags="prn.pers.p3.m.sg.dat"/>
  </def-label>
  <def-label name="prn.pers.p3.m.sg.gen" closed="true">
    <tags-item tags="prn.pers.p3.m.sg.gen"/>
  </def-label>
  <def-label name="prn.pers.p3.m.sg.loc" closed="true">
    <tags-item tags="prn.pers.p3.m.sg.loc"/>
  </def-label>
  <def-label name="prn.pers.p3.m.sg.nom" closed="true">
    <tags-item tags="prn.pers.p3.m.sg.nom"/>
  </def-label>
  <def-label name="prn.pos.f.pl.acc.def" closed="true">
    <tags-item tags="prn.pos.f.pl.acc.def"/>
  </def-label>
  <def-label name="prn.pos.f.pl.acc.ind" closed="true">
    <tags-item tags="prn.pos.f.pl.acc.ind"/>
  </def-label>
  <def-label name="prn.pos.f.pl.dat.def" closed="true">
    <tags-item tags="prn.pos.f.pl.dat.def"/>
  </def-label>
  <def-label name="prn.pos.f.pl.dat.ind" closed="true">
    <tags-item tags="prn.pos.f.pl.dat.ind"/>
  </def-label>
  <def-label name="prn.pos.f.pl.gen.def" closed="true">
    <tags-item tags="prn.pos.f.pl.gen.def"/>
  </def-label>
  <def-label name="prn.pos.f.pl.gen.ind" closed="true">
    <tags-item tags="prn.pos.f.pl.gen.ind"/>
  </def-label>
  <def-label name="prn.pos.f.pl.loc.def" closed="true">
    <tags-item tags="prn.pos.f.pl.loc.def"/>
  </def-label>
  <def-label name="prn.pos.f.pl.loc.ind" closed="true">
    <tags-item tags="prn.pos.f.pl.loc.ind"/>
  </def-label>
  <def-label name="prn.pos.f.pl.nom.def" closed="true">
    <tags-item tags="prn.pos.f.pl.nom.def"/>
  </def-label>
  <def-label name="prn.pos.f.pl.nom.ind" closed="true">
    <tags-item tags="prn.pos.f.pl.nom.ind"/>
  </def-label>
  <def-label name="prn.pos.f.sg.acc.def" closed="true">
    <tags-item tags="prn.pos.f.sg.acc.def"/>
  </def-label>
  <def-label name="prn.pos.f.sg.acc.ind" closed="true">
    <tags-item tags="prn.pos.f.sg.acc.ind"/>
  </def-label>
  <def-label name="prn.pos.f.sg.dat.def" closed="true">
    <tags-item tags="prn.pos.f.sg.dat.def"/>
  </def-label>
  <def-label name="prn.pos.f.sg.dat.ind" closed="true">
    <tags-item tags="prn.pos.f.sg.dat.ind"/>
  </def-label>
  <def-label name="prn.pos.f.sg.gen.def" closed="true">
    <tags-item tags="prn.pos.f.sg.gen.def"/>
  </def-label>
  <def-label name="prn.pos.f.sg.gen.ind" closed="true">
    <tags-item tags="prn.pos.f.sg.gen.ind"/>
  </def-label>
  <def-label name="prn.pos.f.sg.loc.def" closed="true">
    <tags-item tags="prn.pos.f.sg.loc.def"/>
  </def-label>
  <def-label name="prn.pos.f.sg.loc.ind" closed="true">
    <tags-item tags="prn.pos.f.sg.loc.ind"/>
  </def-label>
  <def-label name="prn.pos.f.sg.nom.def" closed="true">
    <tags-item tags="prn.pos.f.sg.nom.def"/>
  </def-label>
  <def-label name="prn.pos.f.sg.nom.ind" closed="true">
    <tags-item tags="prn.pos.f.sg.nom.ind"/>
  </def-label>
  <def-label name="prn.pos.m.pl.acc.def" closed="true">
    <tags-item tags="prn.pos.m.pl.acc.def"/>
  </def-label>
  <def-label name="prn.pos.m.pl.acc.ind" closed="true">
    <tags-item tags="prn.pos.m.pl.acc.ind"/>
  </def-label>
  <def-label name="prn.pos.m.pl.dat.def" closed="true">
    <tags-item tags="prn.pos.m.pl.dat.def"/>
  </def-label>
  <def-label name="prn.pos.m.pl.dat.ind" closed="true">
    <tags-item tags="prn.pos.m.pl.dat.ind"/>
  </def-label>
  <def-label name="prn.pos.m.pl.gen.def" closed="true">
    <tags-item tags="prn.pos.m.pl.gen.def"/>
  </def-label>
  <def-label name="prn.pos.m.pl.gen.ind" closed="true">
    <tags-item tags="prn.pos.m.pl.gen.ind"/>
  </def-label>
  <def-label name="prn.pos.m.pl.loc.def" closed="true">
    <tags-item tags="prn.pos.m.pl.loc.def"/>
  </def-label>
  <def-label name="prn.pos.m.pl.loc.ind" closed="true">
    <tags-item tags="prn.pos.m.pl.loc.ind"/>
  </def-label>
  <def-label name="prn.pos.m.pl.nom.def" closed="true">
    <tags-item tags="prn.pos.m.pl.nom.def"/>
  </def-label>
  <def-label name="prn.pos.m.pl.nom.ind" closed="true">
    <tags-item tags="prn.pos.m.pl.nom.ind"/>
  </def-label>
  <def-label name="prn.pos.m.sg.acc.def" closed="true">
    <tags-item tags="prn.pos.m.sg.acc.def"/>
  </def-label>
  <def-label name="prn.pos.m.sg.acc.ind" closed="true">
    <tags-item tags="prn.pos.m.sg.acc.ind"/>
  </def-label>
  <def-label name="prn.pos.m.sg.dat.def" closed="true">
    <tags-item tags="prn.pos.m.sg.dat.def"/>
  </def-label>
  <def-label name="prn.pos.m.sg.dat.ind" closed="true">
    <tags-item tags="prn.pos.m.sg.dat.ind"/>
  </def-label>
  <def-label name="prn.pos.m.sg.gen.def" closed="true">
    <tags-item tags="prn.pos.m.sg.gen.def"/>
  </def-label>
  <def-label name="prn.pos.m.sg.gen.ind" closed="true">
    <tags-item tags="prn.pos.m.sg.gen.ind"/>
  </def-label>
  <def-label name="prn.pos.m.sg.loc.def" closed="true">
    <tags-item tags="prn.pos.m.sg.loc.def"/>
  </def-label>
  <def-label name="prn.pos.m.sg.loc.ind" closed="true">
    <tags-item tags="prn.pos.m.sg.loc.ind"/>
  </def-label>
  <def-label name="prn.pos.m.sg.nom.def" closed="true">
    <tags-item tags="prn.pos.m.sg.nom.def"/>
  </def-label>
  <def-label name="prn.pos.m.sg.nom.ind" closed="true">
    <tags-item tags="prn.pos.m.sg.nom.ind"/>
  </def-label>
  <def-label name="prn.ref.sp.mf.acc" closed="true">
    <tags-item tags="prn.ref.sp.mf.acc"/>
  </def-label>
  <def-label name="prn.ref.sp.mf.dat" closed="true">
    <tags-item tags="prn.ref.sp.mf.dat"/>
  </def-label>
  <def-label name="prn.ref.sp.mf.gen" closed="true">
    <tags-item tags="prn.ref.sp.mf.gen"/>
  </def-label>
  <def-label name="prn.ref.sp.mf.loc" closed="true">
    <tags-item tags="prn.ref.sp.mf.loc"/>
  </def-label>
  <def-label name="vblex.fut.p1.pl">
    <tags-item tags="vblex.fut.p1.pl"/>
  </def-label>
  <def-label name="vblex.fut.p1.sg">
    <tags-item tags="vblex.fut.p1.sg"/>
  </def-label>
  <def-label name="vblex.fut.p2.pl">
    <tags-item tags="vblex.fut.p2.pl"/>
  </def-label>
  <def-label name="vblex.fut.p2.sg">
    <tags-item tags="vblex.fut.p2.sg"/>
  </def-label>
  <def-label name="vblex.inf">
    <tags-item tags="vblex.inf"/>
    <tags-item tags="vblex.iv.inf"/>
    <tags-item tags="vblex.tv.inf"/>
    <tags-item tags="vblex.ref.inf"/>
    <tags-item tags="vblex.TD.inf"/>
  </def-label>
  <def-label name="vblex.iv.deb">
    <tags-item tags="vblex.iv.deb"/>
  </def-label>
  <def-label name="vblex.iv.fut.p1.pl">
    <tags-item tags="vblex.iv.fut.p1.pl"/>
  </def-label>
  <def-label name="vblex.iv.fut.p1.sg">
    <tags-item tags="vblex.iv.fut.p1.sg"/>
  </def-label>
  <def-label name="vblex.iv.fut.p2.pl">
    <tags-item tags="vblex.iv.fut.p2.pl"/>
  </def-label>
  <def-label name="vblex.iv.fut.p2.sg">
    <tags-item tags="vblex.iv.fut.p2.sg"/>
  </def-label>
  <def-label name="vblex.iv.fut.p3.pl">
    <tags-item tags="vblex.iv.fut.p3.pl"/>
  </def-label>
  <def-label name="vblex.iv.fut.p3.sg">
    <tags-item tags="vblex.iv.fut.p3.sg"/>
  </def-label>
  <def-label name="vblex.iv.imp.p2.pl">
    <tags-item tags="vblex.iv.imp.p2.pl"/>
  </def-label>
  <def-label name="vblex.iv.imp.p2.sg">
    <tags-item tags="vblex.iv.imp.p2.sg"/>
  </def-label>
  <def-label name="vblex.iv.past.p1.pl">
    <tags-item tags="vblex.iv.past.p1.pl"/>
  </def-label>
  <def-label name="vblex.iv.past.p1.sg">
    <tags-item tags="vblex.iv.past.p1.sg"/>
  </def-label>
  <def-label name="vblex.iv.past.p2.pl">
    <tags-item tags="vblex.iv.past.p2.pl"/>
  </def-label>
  <def-label name="vblex.iv.past.p2.sg">
    <tags-item tags="vblex.iv.past.p2.sg"/>
  </def-label>
  <def-label name="vblex.iv.past.p3.pl">
    <tags-item tags="vblex.iv.past.p3.pl"/>
  </def-label>
  <def-label name="vblex.iv.past.p3.sg">
    <tags-item tags="vblex.iv.past.p3.sg"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.acc.def">
    <tags-item tags="vblex.iv.pp.actv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.acc.ind">
    <tags-item tags="vblex.iv.pp.actv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.dat.def">
    <tags-item tags="vblex.iv.pp.actv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.dat.ind">
    <tags-item tags="vblex.iv.pp.actv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.gen.def">
    <tags-item tags="vblex.iv.pp.actv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.gen.ind">
    <tags-item tags="vblex.iv.pp.actv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.loc.def">
    <tags-item tags="vblex.iv.pp.actv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.loc.ind">
    <tags-item tags="vblex.iv.pp.actv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.nom.def">
    <tags-item tags="vblex.iv.pp.actv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.nom.ind">
    <tags-item tags="vblex.iv.pp.actv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.pl.voc.def">
    <tags-item tags="vblex.iv.pp.actv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.acc.def">
    <tags-item tags="vblex.iv.pp.actv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.acc.ind">
    <tags-item tags="vblex.iv.pp.actv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.dat.def">
    <tags-item tags="vblex.iv.pp.actv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.dat.ind">
    <tags-item tags="vblex.iv.pp.actv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.gen.def">
    <tags-item tags="vblex.iv.pp.actv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.gen.ind">
    <tags-item tags="vblex.iv.pp.actv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.loc.def">
    <tags-item tags="vblex.iv.pp.actv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.loc.ind">
    <tags-item tags="vblex.iv.pp.actv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.nom.def">
    <tags-item tags="vblex.iv.pp.actv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.nom.ind">
    <tags-item tags="vblex.iv.pp.actv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.f.sg.voc.def">
    <tags-item tags="vblex.iv.pp.actv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.acc.def">
    <tags-item tags="vblex.iv.pp.actv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.acc.ind">
    <tags-item tags="vblex.iv.pp.actv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.dat.def">
    <tags-item tags="vblex.iv.pp.actv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.dat.ind">
    <tags-item tags="vblex.iv.pp.actv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.gen.def">
    <tags-item tags="vblex.iv.pp.actv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.gen.ind">
    <tags-item tags="vblex.iv.pp.actv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.loc.def">
    <tags-item tags="vblex.iv.pp.actv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.loc.ind">
    <tags-item tags="vblex.iv.pp.actv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.nom.def">
    <tags-item tags="vblex.iv.pp.actv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.nom.ind">
    <tags-item tags="vblex.iv.pp.actv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.pl.voc.def">
    <tags-item tags="vblex.iv.pp.actv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.acc.def">
    <tags-item tags="vblex.iv.pp.actv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.acc.ind">
    <tags-item tags="vblex.iv.pp.actv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.dat.def">
    <tags-item tags="vblex.iv.pp.actv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.dat.ind">
    <tags-item tags="vblex.iv.pp.actv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.gen">
    <tags-item tags="vblex.iv.pp.actv.m.sg.gen.def"/>
    <tags-item tags="vblex.iv.pp.actv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.loc.def">
    <tags-item tags="vblex.iv.pp.actv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.loc.ind">
    <tags-item tags="vblex.iv.pp.actv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.nom.def">
    <tags-item tags="vblex.iv.pp.actv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.nom.ind">
    <tags-item tags="vblex.iv.pp.actv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.actv.m.sg.voc.def">
    <tags-item tags="vblex.iv.pp.actv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.acc.def">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.acc.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.dat.def">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.dat.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.gen.def">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.gen.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.loc.def">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.loc.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.nom.def">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.nom.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.pl.voc.def">
    <tags-item tags="vblex.iv.pp.pasv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.acc.def">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.acc.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.dat.def">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.dat.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.gen.def">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.gen.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.loc.def">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.loc.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.nom.def">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.nom.ind">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.f.sg.voc.def">
    <tags-item tags="vblex.iv.pp.pasv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.acc.def">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.acc.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.dat.def">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.dat.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.gen.def">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.gen.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.loc.def">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.loc.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.nom.def">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.nom.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.pl.voc.def">
    <tags-item tags="vblex.iv.pp.pasv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.acc.def">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.acc.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.dat.def">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.dat.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.gen.def">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.gen.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.loc.def">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.loc.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.nom.def">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.nom.ind">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pp.pasv.m.sg.voc.def">
    <tags-item tags="vblex.iv.pp.pasv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.adv">
    <tags-item tags="vblex.iv.pprs.actv.adv"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.acc.def">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.acc.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.dat.def">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.dat.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.gen.def">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.gen.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.loc.def">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.loc.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.nom.def">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.nom.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.pl.voc.def">
    <tags-item tags="vblex.iv.pprs.actv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.acc.def">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.acc.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.dat.def">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.dat.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.gen.def">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.gen.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.loc.def">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.loc.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.nom.def">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.nom.ind">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.f.sg.voc.def">
    <tags-item tags="vblex.iv.pprs.actv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.acc.def">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.acc.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.dat.def">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.dat.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.gen.def">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.gen.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.loc.def">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.loc.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.nom.def">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.nom.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.pl.voc.def">
    <tags-item tags="vblex.iv.pprs.actv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.acc.def">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.acc.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.dat.def">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.dat.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.gen">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.gen.def"/>
    <tags-item tags="vblex.iv.pprs.actv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.loc.def">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.loc.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.nom.def">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.nom.ind">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.m.sg.voc.def">
    <tags-item tags="vblex.iv.pprs.actv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.rel.f.pl.nom">
    <tags-item tags="vblex.iv.pprs.actv.rel.f.pl.nom"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.rel.f.sg.nom">
    <tags-item tags="vblex.iv.pprs.actv.rel.f.sg.nom"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.rel.m.pl.nom">
    <tags-item tags="vblex.iv.pprs.actv.rel.m.pl.nom"/>
  </def-label>
  <def-label name="vblex.iv.pprs.actv.rel.m.sg.nom">
    <tags-item tags="vblex.iv.pprs.actv.rel.m.sg.nom"/>
  </def-label>
  <def-label name="vblex.iv.pprs.ind">
    <tags-item tags="vblex.iv.pprs.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.acc.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.acc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.dat.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.dat.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.gen.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.gen.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.loc.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.loc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.nom.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.nom.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.pl.voc.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.acc.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.acc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.dat.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.dat.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.gen.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.gen.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.loc.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.loc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.nom.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.nom.ind">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.f.sg.voc.def">
    <tags-item tags="vblex.iv.pprs.pasv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.acc.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.acc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.dat.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.dat.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.gen.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.gen.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.loc.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.loc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.nom.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.nom.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.pl.voc.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.acc.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.acc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.dat.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.dat.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.gen.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.gen.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.loc.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.loc.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.nom.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.nom.ind">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.iv.pprs.pasv.m.sg.voc.def">
    <tags-item tags="vblex.iv.pprs.pasv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.iv.pres.p1.pl">
    <tags-item tags="vblex.iv.pres.p1.pl"/>
  </def-label>
  <def-label name="vblex.iv.pres.p1.sg">
    <tags-item tags="vblex.iv.pres.p1.sg"/>
  </def-label>
  <def-label name="vblex.iv.pres.p2.pl">
    <tags-item tags="vblex.iv.pres.p2.pl"/>
  </def-label>
  <def-label name="vblex.iv.pres.p2.sg">
    <tags-item tags="vblex.iv.pres.p2.sg"/>
  </def-label>
  <def-label name="vblex.iv.pres.p3.pl">
    <tags-item tags="vblex.iv.pres.p3.pl"/>
  </def-label>
  <def-label name="vblex.iv.pres.p3.sg">
    <tags-item tags="vblex.iv.pres.p3.sg"/>
  </def-label>
  <def-label name="vblex.iv.prs">
    <tags-item tags="vblex.iv.prs"/>
  </def-label>
  <def-label name="vblex.ref.deb">
    <tags-item tags="vblex.ref.deb"/>
  </def-label>
  <def-label name="vblex.ref.fut.p1.pl">
    <tags-item tags="vblex.ref.fut.p1.pl"/>
  </def-label>
  <def-label name="vblex.ref.fut.p1.sg">
    <tags-item tags="vblex.ref.fut.p1.sg"/>
  </def-label>
  <def-label name="vblex.ref.fut.p2.pl">
    <tags-item tags="vblex.ref.fut.p2.pl"/>
  </def-label>
  <def-label name="vblex.ref.fut.p2.sg">
    <tags-item tags="vblex.ref.fut.p2.sg"/>
  </def-label>
  <def-label name="vblex.ref.fut.p3.pl">
    <tags-item tags="vblex.ref.fut.p3.pl"/>
  </def-label>
  <def-label name="vblex.ref.fut.p3.sg">
    <tags-item tags="vblex.ref.fut.p3.sg"/>
  </def-label>
  <def-label name="vblex.ref.imp.p2.pl">
    <tags-item tags="vblex.ref.imp.p2.pl"/>
  </def-label>
  <def-label name="vblex.ref.imp.p2.sg">
    <tags-item tags="vblex.ref.imp.p2.sg"/>
  </def-label>
  <def-label name="vblex.ref.past.p1.pl">
    <tags-item tags="vblex.ref.past.p1.pl"/>
  </def-label>
  <def-label name="vblex.ref.past.p1.sg">
    <tags-item tags="vblex.ref.past.p1.sg"/>
  </def-label>
  <def-label name="vblex.ref.past.p2.pl">
    <tags-item tags="vblex.ref.past.p2.pl"/>
  </def-label>
  <def-label name="vblex.ref.past.p2.sg">
    <tags-item tags="vblex.ref.past.p2.sg"/>
  </def-label>
  <def-label name="vblex.ref.past.p3.pl">
    <tags-item tags="vblex.ref.past.p3.pl"/>
  </def-label>
  <def-label name="vblex.ref.past.p3.sg">
    <tags-item tags="vblex.ref.past.p3.sg"/>
  </def-label>
  <def-label name="vblex.ref.pres.p1.pl">
    <tags-item tags="vblex.ref.pres.p1.pl"/>
  </def-label>
  <def-label name="vblex.ref.pres.p1.sg">
    <tags-item tags="vblex.ref.pres.p1.sg"/>
  </def-label>
  <def-label name="vblex.ref.pres.p2.pl">
    <tags-item tags="vblex.ref.pres.p2.pl"/>
  </def-label>
  <def-label name="vblex.ref.pres.p2.sg">
    <tags-item tags="vblex.ref.pres.p2.sg"/>
  </def-label>
  <def-label name="vblex.ref.pres.p3.pl">
    <tags-item tags="vblex.ref.pres.p3.pl"/>
  </def-label>
  <def-label name="vblex.ref.pres.p3.sg">
    <tags-item tags="vblex.ref.pres.p3.sg"/>
  </def-label>
  <def-label name="vblex.TD.fut.p1.pl">
    <tags-item tags="vblex.TD.fut.p1.pl"/>
  </def-label>
  <def-label name="vblex.TD.fut.p1.sg">
    <tags-item tags="vblex.TD.fut.p1.sg"/>
  </def-label>
  <def-label name="vblex.TD.fut.p2.pl">
    <tags-item tags="vblex.TD.fut.p2.pl"/>
  </def-label>
  <def-label name="vblex.TD.fut.p2.sg">
    <tags-item tags="vblex.TD.fut.p2.sg"/>
  </def-label>
  <def-label name="vblex.TD.fut.p3.sg">
    <tags-item tags="vblex.TD.fut.p3.sg"/>
  </def-label>
  <def-label name="vblex.TD.fut.p3.pl">
    <tags-item tags="vblex.TD.fut.p3.pl"/>
  </def-label>
  <def-label name="vblex.TD.imp.p2.pl">
    <tags-item tags="vblex.TD.imp.p2.pl"/>
  </def-label>
  <def-label name="vblex.TD.imp.p2.sg">
    <tags-item tags="vblex.TD.imp.p2.sg"/>
  </def-label>
  <def-label name="vblex.TD.past.p1.pl">
    <tags-item tags="vblex.TD.past.p1.pl"/>
  </def-label>
  <def-label name="vblex.TD.past.p1.sg">
    <tags-item tags="vblex.TD.past.p1.sg"/>
  </def-label>
  <def-label name="vblex.TD.past.p2.pl">
    <tags-item tags="vblex.TD.past.p2.pl"/>
  </def-label>
  <def-label name="vblex.TD.past.p2.sg">
    <tags-item tags="vblex.TD.past.p2.sg"/>
  </def-label>
  <def-label name="vblex.TD.past.p3.sg">
    <tags-item tags="vblex.TD.past.p3.sg"/>
  </def-label>
  <def-label name="vblex.TD.past.p3.pl">
    <tags-item tags="vblex.TD.past.p3.pl"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.acc.def">
    <tags-item tags="vblex.TD.pp.actv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.acc.ind">
    <tags-item tags="vblex.TD.pp.actv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.dat.def">
    <tags-item tags="vblex.TD.pp.actv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.dat.ind">
    <tags-item tags="vblex.TD.pp.actv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.gen.def">
    <tags-item tags="vblex.TD.pp.actv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.gen.ind">
    <tags-item tags="vblex.TD.pp.actv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.loc.def">
    <tags-item tags="vblex.TD.pp.actv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.loc.ind">
    <tags-item tags="vblex.TD.pp.actv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.nom.def">
    <tags-item tags="vblex.TD.pp.actv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.nom.ind">
    <tags-item tags="vblex.TD.pp.actv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.pl.voc.def">
    <tags-item tags="vblex.TD.pp.actv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.acc.def">
    <tags-item tags="vblex.TD.pp.actv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.acc.ind">
    <tags-item tags="vblex.TD.pp.actv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.dat.def">
    <tags-item tags="vblex.TD.pp.actv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.dat.ind">
    <tags-item tags="vblex.TD.pp.actv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.gen.def">
    <tags-item tags="vblex.TD.pp.actv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.gen.ind">
    <tags-item tags="vblex.TD.pp.actv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.loc.def">
    <tags-item tags="vblex.TD.pp.actv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.loc.ind">
    <tags-item tags="vblex.TD.pp.actv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.nom.def">
    <tags-item tags="vblex.TD.pp.actv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.nom.ind">
    <tags-item tags="vblex.TD.pp.actv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.f.sg.voc.def">
    <tags-item tags="vblex.TD.pp.actv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.acc.def">
    <tags-item tags="vblex.TD.pp.actv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.acc.ind">
    <tags-item tags="vblex.TD.pp.actv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.dat.def">
    <tags-item tags="vblex.TD.pp.actv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.dat.ind">
    <tags-item tags="vblex.TD.pp.actv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.gen.def">
    <tags-item tags="vblex.TD.pp.actv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.gen.ind">
    <tags-item tags="vblex.TD.pp.actv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.loc.def">
    <tags-item tags="vblex.TD.pp.actv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.loc.ind">
    <tags-item tags="vblex.TD.pp.actv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.nom.def">
    <tags-item tags="vblex.TD.pp.actv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.nom.ind">
    <tags-item tags="vblex.TD.pp.actv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.pl.voc.def">
    <tags-item tags="vblex.TD.pp.actv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.acc.def">
    <tags-item tags="vblex.TD.pp.actv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.acc.ind">
    <tags-item tags="vblex.TD.pp.actv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.dat.def">
    <tags-item tags="vblex.TD.pp.actv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.dat.ind">
    <tags-item tags="vblex.TD.pp.actv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.gen">
    <tags-item tags="vblex.TD.pp.actv.m.sg.gen.def"/>
    <tags-item tags="vblex.TD.pp.actv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.loc.def">
    <tags-item tags="vblex.TD.pp.actv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.loc.ind">
    <tags-item tags="vblex.TD.pp.actv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.nom.def">
    <tags-item tags="vblex.TD.pp.actv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.nom.ind">
    <tags-item tags="vblex.TD.pp.actv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.actv.m.sg.voc.def">
    <tags-item tags="vblex.TD.pp.actv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.acc.def">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.acc.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.dat.def">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.dat.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.gen.def">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.gen.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.loc.def">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.loc.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.nom.def">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.nom.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.pl.voc.def">
    <tags-item tags="vblex.TD.pp.pasv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.acc.def">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.acc.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.dat.def">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.dat.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.gen.def">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.gen.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.loc.def">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.loc.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.nom.def">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.nom.ind">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.f.sg.voc.def">
    <tags-item tags="vblex.TD.pp.pasv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.acc.def">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.acc.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.dat.def">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.dat.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.gen.def">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.gen.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.loc.def">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.loc.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.nom.def">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.nom.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.pl.voc.def">
    <tags-item tags="vblex.TD.pp.pasv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.acc.def">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.acc.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.dat.def">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.dat.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.gen.def">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.gen.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.loc.def">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.loc.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.nom.def">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.nom.ind">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pp.pasv.m.sg.voc.def">
    <tags-item tags="vblex.TD.pp.pasv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.adv">
    <tags-item tags="vblex.TD.pprs.actv.adv"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.acc.def">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.acc.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.dat.def">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.dat.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.gen.def">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.gen.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.loc.def">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.loc.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.nom.def">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.nom.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.pl.voc.def">
    <tags-item tags="vblex.TD.pprs.actv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.acc.def">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.acc.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.dat.def">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.dat.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.gen.def">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.gen.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.loc.def">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.loc.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.nom.def">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.nom.ind">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.f.sg.voc.def">
    <tags-item tags="vblex.TD.pprs.actv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.acc.def">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.acc.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.dat.def">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.dat.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.gen.def">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.gen.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.loc.def">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.loc.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.nom.def">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.nom.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.pl.voc.def">
    <tags-item tags="vblex.TD.pprs.actv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.acc.def">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.acc.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.dat.def">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.dat.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.gen">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.gen.def"/>
    <tags-item tags="vblex.TD.pprs.actv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.loc.def">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.loc.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.nom.def">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.nom.ind">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.m.sg.voc.def">
    <tags-item tags="vblex.TD.pprs.actv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.rel.f.pl.nom">
    <tags-item tags="vblex.TD.pprs.actv.rel.f.pl.nom"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.rel.f.sg.nom">
    <tags-item tags="vblex.TD.pprs.actv.rel.f.sg.nom"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.rel.m.pl.nom">
    <tags-item tags="vblex.TD.pprs.actv.rel.m.pl.nom"/>
  </def-label>
  <def-label name="vblex.TD.pprs.actv.rel.m.sg.nom">
    <tags-item tags="vblex.TD.pprs.actv.rel.m.sg.nom"/>
  </def-label>
  <def-label name="vblex.TD.pprs.ind">
    <tags-item tags="vblex.TD.pprs.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.acc.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.acc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.dat.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.dat.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.gen.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.gen.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.loc.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.loc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.nom.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.nom.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.pl.voc.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.acc.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.acc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.dat.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.dat.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.gen.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.gen.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.loc.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.loc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.nom.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.nom.ind">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.f.sg.voc.def">
    <tags-item tags="vblex.TD.pprs.pasv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.acc.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.acc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.dat.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.dat.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.gen.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.gen.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.loc.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.loc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.nom.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.nom.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.pl.voc.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.acc.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.acc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.dat.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.dat.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.gen.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.gen.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.loc.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.loc.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.nom.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.nom.ind">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.TD.pprs.pasv.m.sg.voc.def">
    <tags-item tags="vblex.TD.pprs.pasv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.TD.pres.p1.pl">
    <tags-item tags="vblex.TD.pres.p1.pl"/>
  </def-label>
  <def-label name="vblex.TD.pres.p1.sg">
    <tags-item tags="vblex.TD.pres.p1.sg"/>
  </def-label>
  <def-label name="vblex.TD.pres.p2.pl">
    <tags-item tags="vblex.TD.pres.p2.pl"/>
  </def-label>
  <def-label name="vblex.TD.pres.p2.sg">
    <tags-item tags="vblex.TD.pres.p2.sg"/>
  </def-label>
  <def-label name="vblex.TD.pres.p3.sg">
    <tags-item tags="vblex.TD.pres.p3.sg"/>
  </def-label>
  <def-label name="vblex.TD.pres.p3.pl">
    <tags-item tags="vblex.TD.pres.p3.pl"/>
  </def-label>
  <def-label name="vblex.TD.prs">
    <tags-item tags="vblex.TD.prs"/>
  </def-label>
  <def-label name="vblex.tv.deb">
    <tags-item tags="vblex.tv.deb"/>
  </def-label>
  <def-label name="vblex.tv.fut.p1">
    <tags-item tags="vblex.tv.fut.p1.*"/>
  </def-label>
  <def-label name="vblex.tv.fut.p2">
    <tags-item tags="vblex.tv.fut.p2.*"/>
  </def-label>
  <def-label name="vblex.tv.fut.p3.pl">
    <tags-item tags="vblex.tv.fut.p3.pl"/>
  </def-label>
  <def-label name="vblex.tv.fut.p3.sg">
    <tags-item tags="vblex.tv.fut.p3.sg"/>
  </def-label>
  <def-label name="vblex.tv.imp.p2">
    <tags-item tags="vblex.tv.imp.p2.*"/>
  </def-label>
  <def-label name="vblex.tv.past.p1">
    <tags-item tags="vblex.tv.past.p1.*"/>
  </def-label>
  <def-label name="vblex.tv.past.p2">
    <tags-item tags="vblex.tv.past.p2.*"/>
  </def-label>
  <def-label name="vblex.tv.past.p3.pl">
    <tags-item tags="vblex.tv.past.p3.pl"/>
  </def-label>
  <def-label name="vblex.tv.past.p3.sg">
    <tags-item tags="vblex.tv.past.p3.sg"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.pl.acc">
    <tags-item tags="vblex.tv.pp.actv.f.pl.acc.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.pl.dat">
    <tags-item tags="vblex.tv.pp.actv.f.pl.dat.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.pl.gen">
    <tags-item tags="vblex.tv.pp.actv.f.pl.gen.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.pl.loc">
    <tags-item tags="vblex.tv.pp.actv.f.pl.loc.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.pl.nom">
    <tags-item tags="vblex.tv.pp.actv.f.pl.nom.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.pl.voc.def">
    <tags-item tags="vblex.tv.pp.actv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.sg.acc">
    <tags-item tags="vblex.tv.pp.actv.f.sg.acc.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.sg.dat">
    <tags-item tags="vblex.tv.pp.actv.f.sg.dat.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.sg.gen">
    <tags-item tags="vblex.tv.pp.actv.f.sg.gen.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.sg.loc">
    <tags-item tags="vblex.tv.pp.actv.f.sg.loc.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.sg.nom">
    <tags-item tags="vblex.tv.pp.actv.f.sg.nom.def"/>
    <tags-item tags="vblex.tv.pp.actv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.f.sg.voc.def">
    <tags-item tags="vblex.tv.pp.actv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.pl.acc">
    <tags-item tags="vblex.tv.pp.actv.m.pl.acc.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.pl.dat">
    <tags-item tags="vblex.tv.pp.actv.m.pl.dat.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.pl.gen">
    <tags-item tags="vblex.tv.pp.actv.m.pl.gen.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.pl.loc">
    <tags-item tags="vblex.tv.pp.actv.m.pl.loc.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.pl.nom">
    <tags-item tags="vblex.tv.pp.actv.m.pl.nom.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.pl.voc.def">
    <tags-item tags="vblex.tv.pp.actv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.sg.acc">
    <tags-item tags="vblex.tv.pp.actv.m.sg.acc.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.sg.dat">
    <tags-item tags="vblex.tv.pp.actv.m.sg.dat.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.sg.gen">
    <tags-item tags="vblex.tv.pp.actv.m.sg.gen.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.sg.loc">
    <tags-item tags="vblex.tv.pp.actv.m.sg.loc.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.sg.nom">
    <tags-item tags="vblex.tv.pp.actv.m.sg.nom.def"/>
    <tags-item tags="vblex.tv.pp.actv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.actv.m.sg.voc.def">
    <tags-item tags="vblex.tv.pp.actv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.pl.acc">
    <tags-item tags="vblex.tv.pp.pasv.f.pl.acc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.pl.dat">
    <tags-item tags="vblex.tv.pp.pasv.f.pl.dat.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.pl.gen">
    <tags-item tags="vblex.tv.pp.pasv.f.pl.gen.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.pl.loc">
    <tags-item tags="vblex.tv.pp.pasv.f.pl.loc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.pl.nom">
    <tags-item tags="vblex.tv.pp.pasv.f.pl.nom.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.pl.voc.def">
    <tags-item tags="vblex.tv.pp.pasv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.sg.acc">
    <tags-item tags="vblex.tv.pp.pasv.f.sg.acc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.sg.dat">
    <tags-item tags="vblex.tv.pp.pasv.f.sg.dat.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.sg.gen">
    <tags-item tags="vblex.tv.pp.pasv.f.sg.gen.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.sg.loc">
    <tags-item tags="vblex.tv.pp.pasv.f.sg.loc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.sg.nom">
    <tags-item tags="vblex.tv.pp.pasv.f.sg.nom.def"/>
    <tags-item tags="vblex.tv.pp.pasv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.f.sg.voc.def">
    <tags-item tags="vblex.tv.pp.pasv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.pl.acc">
    <tags-item tags="vblex.tv.pp.pasv.m.pl.acc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.pl.dat">
    <tags-item tags="vblex.tv.pp.pasv.m.pl.dat.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.pl.gen">
    <tags-item tags="vblex.tv.pp.pasv.m.pl.gen.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.pl.loc">
    <tags-item tags="vblex.tv.pp.pasv.m.pl.loc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.pl.nom.def">
    <tags-item tags="vblex.tv.pp.pasv.m.pl.nom.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.pl.voc.def">
    <tags-item tags="vblex.tv.pp.pasv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.sg.acc">
    <tags-item tags="vblex.tv.pp.pasv.m.sg.acc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.sg.dat">
    <tags-item tags="vblex.tv.pp.pasv.m.sg.dat.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.sg.gen">
    <tags-item tags="vblex.tv.pp.pasv.m.sg.gen.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.sg.loc">
    <tags-item tags="vblex.tv.pp.pasv.m.sg.loc.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.sg.nom">
    <tags-item tags="vblex.tv.pp.pasv.m.sg.nom.def"/>
    <tags-item tags="vblex.tv.pp.pasv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pp.pasv.m.sg.voc.def">
    <tags-item tags="vblex.tv.pp.pasv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.adv">
    <tags-item tags="vblex.tv.pprs.actv.adv"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.acc.def">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.acc.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.dat.def">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.dat.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.gen.def">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.gen.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.loc.def">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.loc.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.nom.def">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.nom.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.pl.voc.def">
    <tags-item tags="vblex.tv.pprs.actv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.acc.def">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.acc.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.dat.def">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.dat.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.gen.def">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.gen.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.gen.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.loc.def">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.loc.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.nom.def">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.nom.ind">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.f.sg.voc.def">
    <tags-item tags="vblex.tv.pprs.actv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.acc.def">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.acc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.acc.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.dat.def">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.dat.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.dat.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.gen.def">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.gen.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.gen.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.loc.def">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.loc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.loc.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.nom.def">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.nom.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.nom.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.pl.voc.def">
    <tags-item tags="vblex.tv.pprs.actv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.acc.def">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.acc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.acc.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.dat.def">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.dat.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.dat.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.gen">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.gen.def"/>
    <tags-item tags="vblex.tv.pprs.actv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.loc.def">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.loc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.loc.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.nom.def">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.nom.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.nom.ind">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.m.sg.voc.def">
    <tags-item tags="vblex.tv.pprs.actv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.rel.f.pl.nom">
    <tags-item tags="vblex.tv.pprs.actv.rel.f.pl.nom"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.rel.f.sg.nom">
    <tags-item tags="vblex.tv.pprs.actv.rel.f.sg.nom"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.rel.m.pl.nom">
    <tags-item tags="vblex.tv.pprs.actv.rel.m.pl.nom"/>
  </def-label>
  <def-label name="vblex.tv.pprs.actv.rel.m.sg.nom">
    <tags-item tags="vblex.tv.pprs.actv.rel.m.sg.nom"/>
  </def-label>
  <def-label name="vblex.tv.pprs.ind">
    <tags-item tags="vblex.tv.pprs.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.pl.acc">
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.acc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.pl.dat">
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.dat.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.pl.gen">
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.gen.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.pl.loc">
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.loc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.pl.nom">
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.nom.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.pl.voc.def">
    <tags-item tags="vblex.tv.pprs.pasv.f.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.sg.acc">
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.acc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.sg.dat">
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.dat.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.sg.gen">
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.gen.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.sg.loc">
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.loc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.sg.nom">
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.nom.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.f.sg.voc.def">
    <tags-item tags="vblex.tv.pprs.pasv.f.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.pl.acc">
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.acc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.pl.dat">
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.dat.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.pl.gen">
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.gen.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.pl.loc">
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.loc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.pl.nom">
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.nom.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.pl.voc.def">
    <tags-item tags="vblex.tv.pprs.pasv.m.pl.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.sg.acc">
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.acc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.acc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.sg.dat">
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.dat.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.dat.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.sg.gen">
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.gen.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.gen.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.sg.loc">
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.loc.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.loc.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.sg.nom">
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.nom.def"/>
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.nom.ind"/>
  </def-label>
  <def-label name="vblex.tv.pprs.pasv.m.sg.voc.def">
    <tags-item tags="vblex.tv.pprs.pasv.m.sg.voc.def"/>
  </def-label>
  <def-label name="vblex.tv.pres.p1">
    <tags-item tags="vblex.tv.pres.p1.*"/>
  </def-label>
  <def-label name="vblex.tv.pres.p2">
    <tags-item tags="vblex.tv.pres.p2.*"/>
  </def-label>
  <def-label name="vblex.tv.pres.p3.pl">
    <tags-item tags="vblex.tv.pres.p3.pl"/>
  </def-label>
  <def-label name="vblex.tv.pres.p3.sg">
    <tags-item tags="vblex.tv.pres.p3.sg"/>
  </def-label>
  <def-label name="vblex.tv.prs">
    <tags-item tags="vblex.tv.prs"/>
  </def-label>
  <def-label name="vbmod.fut.p1" closed="true">
    <tags-item tags="vbmod.fut.p1.*"/>
  </def-label>
  <def-label name="vbmod.fut.p2" closed="true">
    <tags-item tags="vbmod.fut.p2.*"/>
  </def-label>
  <def-label name="vbmod.pres.p3.sg" closed="true">
    <tags-item tags="vbmod.pres.p3.sg"/>
  </def-label>
  <def-label name="vbmod.pres.p3.pl" closed="true">
    <tags-item tags="vbmod.pres.p3.pl"/>
  </def-label>
  <def-label name="vbmod.past.p3.sg" closed="true">
    <tags-item tags="vbmod.past.p3.sg"/>
  </def-label>
  <def-label name="vbmod.past.p3.pl" closed="true">
    <tags-item tags="vbmod.past.p3.pl"/>
  </def-label>
  <def-label name="vbmod.fut.p3.sg" closed="true">
    <tags-item tags="vbmod.fut.p3.sg"/>
  </def-label>
  <def-label name="vbmod.fut.p3.pl" closed="true">
    <tags-item tags="vbmod.fut.p3.pl"/>
  </def-label>
  <def-label name="vbmod.inf" closed="true">
    <tags-item tags="vbmod.inf"/>
  </def-label>
  <def-label name="vbmod.past.p1.pl" closed="true">
    <tags-item tags="vbmod.past.p1.pl"/>
  </def-label>
  <def-label name="vbmod.past.p1.sg" closed="true">
    <tags-item tags="vbmod.past.p1.sg"/>
  </def-label>
  <def-label name="vbmod.past.p2.pl" closed="true">
    <tags-item tags="vbmod.past.p2.pl"/>
  </def-label>
  <def-label name="vbmod.past.p2.sg" closed="true">
    <tags-item tags="vbmod.past.p2.sg"/>
  </def-label>
  <def-label name="vbmod.pres.p1.pl" closed="true">
    <tags-item tags="vbmod.pres.p1.pl"/>
  </def-label>
  <def-label name="vbmod.pres.p1.sg" closed="true">
    <tags-item tags="vbmod.pres.p1.sg"/>
  </def-label>
  <def-label name="vbmod.pres.p2.pl" closed="true">
    <tags-item tags="vbmod.pres.p2.pl"/>
  </def-label>
  <def-label name="vbmod.pres.p2.sg" closed="true">
    <tags-item tags="vbmod.pres.p2.sg"/>
  </def-label>
  <def-label name="vbmod.prs" closed="true">
    <tags-item tags="vbmod.prs"/>
  </def-label>
  <def-label name="vbser.deb" closed="true">
    <tags-item tags="vbser.deb"/>
  </def-label>
  <def-label name="vbser.fut.p1.pl" closed="true">
    <tags-item tags="vbser.fut.p1.pl"/>
  </def-label>
  <def-label name="vbser.fut.p1.sg" closed="true">
    <tags-item tags="vbser.fut.p1.sg"/>
  </def-label>
  <def-label name="vbser.fut.p2.pl" closed="true">
    <tags-item tags="vbser.fut.p2.pl"/>
  </def-label>
  <def-label name="vbser.fut.p2.sg" closed="true">
    <tags-item tags="vbser.fut.p2.sg"/>
  </def-label>
  <def-label name="vbser.fut.p3.pl" closed="true">
    <tags-item tags="vbser.fut.p3.pl"/>
  </def-label>
  <def-label name="vbser.fut.p3.sg" closed="true">
    <tags-item tags="vbser.fut.p3.sg"/>
  </def-label>
  <def-label name="vbser.imp.p2" closed="true">
    <tags-item tags="vbser.imp.p2.*"/>
  </def-label>
  <def-label name="vbser.inf" closed="true">
    <tags-item tags="vbser.inf"/>
  </def-label>
  <def-label name="vbser.past.p1" closed="true">
    <tags-item tags="vbser.past.p1.*"/>
  </def-label>
  <def-label name="vbser.past.p2" closed="true">
    <tags-item tags="vbser.past.p2.*"/>
  </def-label>
  <def-label name="vbser.past.p3.pl" closed="true">
    <tags-item tags="vbser.past.p3.pl"/>
  </def-label>
  <def-label name="vbser.past.p3.sg" closed="true">
    <tags-item tags="vbser.past.p3.sg"/>
  </def-label>
  <def-label name="vbser.pres.p1" closed="true">
    <tags-item tags="vbser.pres.p1.*"/>
  </def-label>
  <def-label name="vbser.pres.p2" closed="true">
    <tags-item tags="vbser.pres.p2.*"/>
  </def-label>
  <def-label name="vbser.pres.p3.pl" closed="true">
    <tags-item tags="vbser.pres.p3.pl"/>
  </def-label>
  <def-label name="vbser.pres.p3.sg" closed="true">
    <tags-item tags="vbser.pres.p3.sg"/>
  </def-label>
  <def-label name="vbser.prs" closed="true">
    <tags-item tags="vbser.prs"/>
  </def-label>

  <def-mult name="adv+vblex.iv.fut.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.fut.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.fut.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.fut.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.fut.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.fut.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.fut.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.fut.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.fut.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.fut.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.fut.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.fut.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.imp.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.imp.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.imp.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.imp.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.inf">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.inf"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.past.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.past.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.past.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.past.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.past.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.past.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.past.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.past.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.past.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.past.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.past.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.past.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.gen.def.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.gen.def.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.actv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.actv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pp.pasv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pp.pasv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.adv">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.adv"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.rel.f.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.rel.f.pl.nom"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.rel.f.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.rel.f.sg.nom"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.rel.m.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.rel.m.pl.nom"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.actv.rel.m.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.actv.rel.m.sg.nom"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pprs.pasv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pprs.pasv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pres.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pres.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pres.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pres.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pres.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pres.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pres.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pres.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pres.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pres.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.pres.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.pres.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.iv.prs">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.iv.prs"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.past.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.past.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.past.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.past.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.past.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.past.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.past.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.past.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.pres.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.pres.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.pres.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.pres.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.pres.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.pres.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.pres.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.pres.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.fut.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.fut.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.fut.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.fut.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.fut.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.fut.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.fut.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.fut.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.fut.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.fut.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.fut.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.fut.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.imp">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.imp.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.inf">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.inf"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.past.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.past.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.past.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.past.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.past.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.past.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.past.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.past.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.past.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.past.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.past.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.past.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.pres.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.pres.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.pres.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.pres.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.pres.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.pres.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.pres.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.pres.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.pres.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.pres.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.ref.pres.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.ref.pres.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.TD.imp.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.TD.imp.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.TD.imp.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.TD.imp.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.fut.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.fut.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.fut.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.fut.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.fut.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.fut.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.fut.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.fut.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.fut.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.fut.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.fut.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.fut.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.imp.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.imp.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.imp.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.imp.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.inf">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.inf"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.past.p1.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.past.p1.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.past.p1.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.past.p1.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.past.p2.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.past.p2.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.past.p2.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.past.p2.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.past.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.past.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.past.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.past.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.gen.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.gen.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.acc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.acc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.acc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.acc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.dat.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.dat.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.dat.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.dat.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.gen.def.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.gen.def.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.gen.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.gen.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.loc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.loc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.loc.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.loc.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.nom.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.nom.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.nom.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.nom.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.actv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.actv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.pl.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.pl.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.pl.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.pl.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.pl.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.pl.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.pl.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.pl.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.pl.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.sg.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.sg.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.sg.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.sg.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.sg.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.sg.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.sg.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.sg.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.pl.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.pl.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.pl.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.pl.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.pl.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.pl.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.pl.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.pl.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.pl.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.sg.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.sg.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.sg.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.sg.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.sg.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.sg.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.sg.loc.*">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.sg.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pp.pasv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pp.pasv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.adv">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.adv"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.pl.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.pl.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.pl.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.pl.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.pl.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.pl.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.pl.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.pl.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.pl.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.sg.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.sg.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.sg.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.sg.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.sg.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.sg.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.sg.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.sg.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.pl.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.pl.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.pl.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.pl.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.pl.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.pl.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.pl.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.pl.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.pl.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.sg.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.sg.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.sg.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.sg.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.sg.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.sg.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.sg.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.sg.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.rel.f.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.rel.f.*.nom"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.actv.rel.m.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.actv.rel.m.*.nom"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.ind">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.ind"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.pl.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.pl.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.pl.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.pl.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.pl.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.pl.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.pl.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.pl.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.pl.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.sg.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.sg.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.sg.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.sg.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.sg.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.sg.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.sg.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.sg.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.f.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.f.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.pl.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.pl.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.pl.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.pl.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.pl.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.pl.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.pl.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.pl.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.pl.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.pl.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.pl.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.pl.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.sg.acc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.sg.acc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.sg.dat">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.sg.dat.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.sg.gen">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.sg.gen.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.sg.loc">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.sg.loc.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.sg.nom">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.sg.nom.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pprs.pasv.m.sg.voc.def">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pprs.pasv.m.sg.voc.def"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pres.p1">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pres.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pres.p2">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pres.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pres.p3.pl">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pres.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.pres.p3.sg">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.pres.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vblex.tv.prs">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vblex.tv.prs"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.fut.p1" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.fut.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.fut.p2" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.fut.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.inf" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.inf"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.past.p1" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.past.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.past.p2" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.past.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.pres.p1" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.pres.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.pres.p2" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.pres.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbmod.prs" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod.prs"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.deb" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.deb"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.fut.p1" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.fut.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.fut.p2" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.fut.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.fut.p3.pl" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.fut.p3.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.fut.p3.sg" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.fut.p3.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.imp" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.imp.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.inf" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.inf"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.past" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.past.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.pres" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.pres.*"/>
    </sequence>
  </def-mult>
  <def-mult name="adv+vbser.prs" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbser.prs"/>
    </sequence>
  </def-mult>
</tagset>
  <preferences>
   <prefer tags="np.ant.f.sg.nom"/>
   <prefer tags="np.ant.m.sg.nom"/>
   <prefer tags="adv"/>
  </preferences>
  <discard-on-ambiguity>
    <discard tags="np.ant.f.pl.nom"/>
    <discard tags="np.ant.m.pl.nom"/>
    <discard tags="np.ant.f.pl.gen"/>
    <discard tags="np.ant.m.pl.gen"/>
  </discard-on-ambiguity>
</tagger>
