<?xml version="1.0" encoding="utf-8"?>
<tagger name="maltese">
<tagset>
<!--
  162 single tags
  2519 multiple tags
-->
  <def-label name="ABBR">
    <tags-item tags="abbr"/>
  </def-label>
  <def-label name="NEG">
    <tags-item tags="neg"/>
  </def-label>
  <def-label name="VBLEX-PPRS">
    <tags-item tags="vblex.pprs"/>
    <tags-item tags="vblex.pprs.*"/>
  </def-label>
  <def-label name="ADJ-COMP">
    <tags-item tags="adj.comp"/>
  </def-label>
  <def-label name="ADJ-F-SG">
    <tags-item tags="adj.f.sg"/>
    <tags-item tags="vblex.pp.f.sg"/>
    <tags-item tags="vblex.pprs.f.sg"/>
  </def-label>
  <def-label name="ADJ-GD-SG">
    <tags-item tags="adj.GD.sg"/>
    <tags-item tags="vblex.pp.sg"/>
  </def-label>
  <def-label name="ADJ-MF-SP">
    <tags-item tags="adj.mf.sp"/>
    <tags-item tags="adj.*.mf.sp"/>
  </def-label>
  <def-label name="ADJ-PL">
    <tags-item tags="adj.*.pl"/>
    <tags-item tags="adj.GD.pl"/>
    <tags-item tags="adj.mf.pl"/>
    <tags-item tags="vblex.pp.mf.pl"/>
    <tags-item tags="vblex.pp.pl"/>
    <tags-item tags="vblex.pprs.pl"/>
    <tags-item tags="vblex.pprs.mf.pl"/>
  </def-label>
  <def-label name="ADJ-MF-SG">
    <tags-item tags="adj.mf.sg"/>
  </def-label>
  <def-label name="ADJ-M-SG">
    <tags-item tags="adj.m.sg"/>
    <tags-item tags="vblex.pp.m.sg"/>
    <tags-item tags="vblex.pprs.m.sg"/>
  </def-label>
  <def-label name="ADV">
    <tags-item tags="adv"/>
  </def-label>
  <def-label name="ADV-ITG" closed="true">
    <tags-item tags="adv.itg"/>
  </def-label>
  <def-label name="COMMA" closed="true">
    <tags-item tags="cm"/>
  </def-label>
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label>
  <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>
  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>
  <def-label name="DET-MF-SG" closed="true">
    <tags-item tags="det.mf.sg"/>
    <tags-item tags="det.*.mf.sg"/>
  </def-label>
  <def-label name="DET-MF-SP" closed="true">
    <tags-item tags="det.mf.sp"/>
    <tags-item tags="det.*.mf.sp"/>
  </def-label>
  <def-label name="DET-F-SG" closed="true">
    <tags-item tags="det.f.sg"/>
    <tags-item tags="det.*.f.sg"/>
  </def-label>
  <def-label name="DET-MF-PL" closed="true">
    <tags-item tags="det.mf.pl"/>
    <tags-item tags="det.*.mf.pl"/>
  </def-label>
  <def-label name="DET-M-SG" closed="true">
    <tags-item tags="det.m.sg"/>
    <tags-item tags="det.*.m.sg"/>
  </def-label>
  <def-label name="INTERJ" closed="true">
    <tags-item tags="ij"/>
  </def-label>
  <def-label name="N-F-COLL">
    <tags-item tags="n.f.col"/>
  </def-label>
  <def-label name="N-F-DU">
    <tags-item tags="n.f.du"/>
  </def-label>
  <def-label name="N-F-ND">
    <tags-item tags="n.f.ND"/>
  </def-label>
  <def-label name="N-F-PL">
    <tags-item tags="n.f.pl"/>
  </def-label>
  <def-label name="N-M-SG-POSS">
    <tags-item tags="n.m.sg.px1pl"/>
    <tags-item tags="n.m.sg.px1sg"/>
    <tags-item tags="n.m.sg.px2pl"/>
    <tags-item tags="n.m.sg.px2sg"/>
    <tags-item tags="n.m.sg.px3pl"/>
    <tags-item tags="n.m.sg.px3sg_f"/>
    <tags-item tags="n.m.sg.px3sg_m"/>
  </def-label>
  <def-label name="N-M-PL-POSS">
    <tags-item tags="n.m.pl.px1pl"/>
    <tags-item tags="n.m.pl.px1sg"/>
    <tags-item tags="n.m.pl.px2pl"/>
    <tags-item tags="n.m.pl.px2sg"/>
    <tags-item tags="n.m.pl.px3pl"/>
    <tags-item tags="n.m.pl.px3sg_f"/>
    <tags-item tags="n.m.pl.px3sg_m"/>
  </def-label>
  <def-label name="N-MF-SG-POSS">
    <tags-item tags="n.mf.sg.px1pl"/>
    <tags-item tags="n.mf.sg.px1sg"/>
    <tags-item tags="n.mf.sg.px2pl"/>
    <tags-item tags="n.mf.sg.px2sg"/>
    <tags-item tags="n.mf.sg.px3pl"/>
    <tags-item tags="n.mf.sg.px3sg_f"/>
    <tags-item tags="n.mf.sg.px3sg_m"/>
  </def-label>
  <def-label name="N-MF-PL-POSS">
    <tags-item tags="n.mf.pl.px1pl"/>
    <tags-item tags="n.mf.pl.px1sg"/>
    <tags-item tags="n.mf.pl.px2pl"/>
    <tags-item tags="n.mf.pl.px2sg"/>
    <tags-item tags="n.mf.pl.px3pl"/>
    <tags-item tags="n.mf.pl.px3sg_f"/>
    <tags-item tags="n.mf.pl.px3sg_m"/>
  </def-label>
  <def-label name="N-F-SG-POSS">
    <tags-item tags="n.f.sg.px1pl"/>
    <tags-item tags="n.f.sg.px1sg"/>
    <tags-item tags="n.f.sg.px2pl"/>
    <tags-item tags="n.f.sg.px2sg"/>
    <tags-item tags="n.f.sg.px3pl"/>
    <tags-item tags="n.f.sg.px3sg_f"/>
    <tags-item tags="n.f.sg.px3sg_m"/>
  </def-label>
  <def-label name="N-F-PL-POSS">
    <tags-item tags="n.f.pl.px1pl"/>
    <tags-item tags="n.f.pl.px1sg"/>
    <tags-item tags="n.f.pl.px2pl"/>
    <tags-item tags="n.f.pl.px2sg"/>
    <tags-item tags="n.f.pl.px3pl"/>
    <tags-item tags="n.f.pl.px3sg_f"/>
    <tags-item tags="n.f.pl.px3sg_m"/>
  </def-label>

  <def-label name="N-F-SG">
    <tags-item tags="n.f.sg"/>
    <tags-item tags="n.*.f.sg"/>
  </def-label>
  <def-label name="N-GD-ND">
    <tags-item tags="n.GD.ND"/>
  </def-label>
  <def-label name="N-GD-PL">
    <tags-item tags="n.GD.pl"/>
  </def-label>
  <def-label name="N-GD-SG">
    <tags-item tags="n.GD.sg"/>
  </def-label>
  <def-label name="N-M-DU">
    <tags-item tags="n.m.du"/>
  </def-label>
  <def-label name="N-MF-PL">
    <tags-item tags="n.mf.pl"/>
  </def-label>
  <def-label name="N-MF-SG">
    <tags-item tags="n.mf.sg"/>
  </def-label>
  <def-label name="N-M-ND">
    <tags-item tags="n.m.ND"/>
  </def-label>
  <def-label name="N-M-PL">
    <tags-item tags="n.m.pl"/>
    <tags-item tags="n.*.m.pl"/>
  </def-label>

  <def-label name="N-M-SG">
    <tags-item tags="n.m.sg"/>
    <tags-item tags="n.*.m.sg"/>
  </def-label>

  <def-label name="NP-ANT-SG">
    <tags-item tags="np.ant.*.sg"/>
  </def-label>
  <def-label name="NP-AL-SG">
    <tags-item tags="np.al.*.sg"/>
  </def-label>
  <def-label name="NP-COG">
    <tags-item tags="np.cog.*"/>
  </def-label>
  <def-label name="NP-TOP">
    <tags-item tags="np.top.*"/>
  </def-label>
  <def-label name="NUM" closed="true">
    <tags-item tags="num"/>
    <tags-item tags="num.*"/>
  </def-label>
  <def-label name="PREP" closed="true">
    <tags-item tags="pr"/>
  </def-label>
  <def-label name="prn.def.mf.pl" closed="true">
    <tags-item tags="prn.def.mf.pl"/>
  </def-label>
  <def-label name="prn.def.mf.sg" closed="true">
    <tags-item tags="prn.def.mf.sg"/>
  </def-label>
  <def-label name="prn.dem.f.sg" closed="true">
    <tags-item tags="prn.dem.f.sg"/>
  </def-label>
  <def-label name="prn.dem.mf.pl" closed="true">
    <tags-item tags="prn.dem.mf.pl"/>
  </def-label>
  <def-label name="prn.dem.m.sg" closed="true">
    <tags-item tags="prn.dem.m.sg"/>
  </def-label>
  <def-label name="prn.ind.mf.pl" closed="true">
    <tags-item tags="prn.ind.mf.pl"/>
  </def-label>
  <def-label name="prn.ind.mf.sg" closed="true">
    <tags-item tags="prn.ind.mf.sg"/>
  </def-label>
  <def-label name="PRON-IND-MF-SG-POSS" closed="true">
    <tags-item tags="prn.ind.mf.sg.px1pl"/>
    <tags-item tags="prn.ind.mf.sg.px1sg"/>
    <tags-item tags="prn.ind.mf.sg.px2pl"/>
    <tags-item tags="prn.ind.mf.sg.px2sg"/>
    <tags-item tags="prn.ind.mf.sg.px3pl"/>
    <tags-item tags="prn.ind.mf.sg.px3sg_f"/>
    <tags-item tags="prn.ind.mf.sg.px3sg_m"/>
  </def-label>
  <def-label name="prn.ind.mf.sp" closed="true">
    <tags-item tags="prn.ind.mf.sp"/>
  </def-label>
  <def-label name="prn.ind.m.sg" closed="true">
    <tags-item tags="prn.ind.m.sg"/>
  </def-label>
  <def-label name="prn.itg.mf.sp" closed="true">
    <tags-item tags="prn.itg.mf.sp"/>
  </def-label>
  <def-label name="prn.p1.mf.pl" closed="true">
    <tags-item tags="prn.p1.mf.pl"/>
  </def-label>
  <def-label name="prn.p1.mf.sg" closed="true">
    <tags-item tags="prn.p1.mf.sg"/>
  </def-label>
  <def-label name="prn.p2.mf.pl" closed="true">
    <tags-item tags="prn.p2.mf.pl"/>
  </def-label>
  <def-label name="prn.p2.mf.sg" closed="true">
    <tags-item tags="prn.p2.mf.sg"/>
  </def-label>
  <def-label name="prn.p3.f.sg" closed="true">
    <tags-item tags="prn.p3.f.sg"/>
  </def-label>
  <def-label name="prn.p3.mf.pl" closed="true">
    <tags-item tags="prn.p3.mf.pl"/>
  </def-label>
  <def-label name="prn.p3.m.sg" closed="true">
    <tags-item tags="prn.p3.m.sg"/>
  </def-label>
  <def-label name="prn.pos.mf.sp" closed="true">
    <tags-item tags="prn.pos.mf.sp"/>
  </def-label>
  <def-label name="prn.recip.mf.sp" closed="true">
    <tags-item tags="prn.recip.mf.sp"/>
  </def-label>
  <def-label name="PRON-REF" closed="true">
    <tags-item tags="prn.ref"/>
  </def-label>
  <def-label name="REL" closed="true">
    <tags-item tags="rel.an.mf.sp"/>
  </def-label>
  <def-label name="VAUX-INF" closed="true">
    <tags-item tags="vaux.inf"/>
  </def-label>
  <def-label name="VAUX-SG1" closed="true">
    <tags-item tags="vaux.*.p1.sg"/>
  </def-label>
  <def-label name="VAUX-SG2" closed="true">
    <tags-item tags="vaux.*.p2.sg"/>
  </def-label>
  <def-label name="VAUX-SG3" closed="true">
    <tags-item tags="vaux.*.p3.sg"/>
    <tags-item tags="vaux.*.p3.*.sg"/>
  </def-label>
  <def-label name="VAUX-PL1" closed="true">
    <tags-item tags="vaux.*.p1.pl"/>
  </def-label>
  <def-label name="VAUX-PL2" closed="true">
    <tags-item tags="vaux.*.p2.pl"/>
  </def-label>
  <def-label name="VAUX-PL3" closed="true">
    <tags-item tags="vaux.*.p3.pl"/>
  </def-label>
  <def-label name="VBLEX-GER">
    <tags-item tags="vblex.ger"/>
  </def-label>
  <def-label name="VBLEX-IMP-SG">
    <tags-item tags="vblex.imp.*.sg"/>
  </def-label>
  <def-label name="VBLEX-IMP-PL">
    <tags-item tags="vblex.imp.*.pl"/>
  </def-label>
  <def-label name="VBLEX-INF">
    <tags-item tags="vblex.inf"/>
  </def-label>
  <def-label name="VBLEX-PL1">
    <tags-item tags="vblex.*.p1.pl"/>
  </def-label>
  <def-label name="VBLEX-PL2">
    <tags-item tags="vblex.*.p2.pl"/>
  </def-label>
  <def-label name="VBLEX-PL3">
    <tags-item tags="vblex.*.p3.pl"/>
  </def-label>
  <def-label name="VBLEX-SG1">
    <tags-item tags="vblex.*.p1.sg"/>
  </def-label>
  <def-label name="VBLEX-SG2">
    <tags-item tags="vblex.*.p2.sg"/>
  </def-label>
  <def-label name="VBLEX-SG3">
    <tags-item tags="vblex.*.p3.sg"/>
    <tags-item tags="vblex.*.p3.*.sg"/>
  </def-label>

  <def-mult name="adv+neg" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="pr+adv" closed="true">
    <sequence>
      <tags-item tags="pr"/>
      <tags-item tags="adv"/>
    </sequence>
  </def-mult>
  <def-mult name="pr+det.def.mf.sp" closed="true">
    <sequence>
      <tags-item tags="pr"/>
      <tags-item tags="det.def.mf.sp"/>
    </sequence>
  </def-mult>
  <def-mult name="prn.dem.f.sg+det.def.mf.sp" closed="true">
    <sequence>
      <tags-item tags="prn.dem.f.sg"/>
      <tags-item tags="det.def.mf.sp"/>
    </sequence>
  </def-mult>
  <def-mult name="prn.dem.m.sg+det.def.mf.sp" closed="true">
    <sequence>
      <tags-item tags="prn.dem.m.sg"/>
      <tags-item tags="det.def.mf.sp"/>
    </sequence>
  </def-mult>
  <def-mult name="pr+n">
    <sequence>
      <tags-item tags="pr"/>
      <tags-item tags="n.*"/>
    </sequence>
  </def-mult>
  <def-mult name="pr+prn" closed="true">
    <sequence>
      <tags-item tags="pr"/>
      <tags-item tags="prn.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.inf+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.inf"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p1.pl+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p1.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p1.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p1.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p2.pl+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p2.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p2.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p2.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p3.f.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p3.m.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.p3.pl+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.*.p3.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
<!--
  <def-mult name="vaux.pres.p1.pl+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p1.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.pres.p1.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p1.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.pres.p2.pl+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p2.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.pres.p2.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p2.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.pres.p3.f.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.pres.p3.m.sg+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vaux.pres.p3.pl+neg" closed="true">
    <sequence>
      <tags-item tags="vaux.pres.p3.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
-->
  <def-mult name="vblex.ger+neg">
    <sequence>
      <tags-item tags="vblex.ger"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.*.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2.pl+prn.p1">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2.pl+prn.p1+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1+prn.p1">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1+prn.p1+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p1.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1+prn.p2">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1+prn.p2+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p2.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.imp.p2+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.imp.p2.*"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>

  <def-mult name="vblex.inf+neg">
    <sequence>
      <tags-item tags="vblex.inf"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
<!--
  <def-mult name="vblex.past.p1.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p1.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p2.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.f.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.m.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.past.p3.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.past.p3.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult> -->
  <def-mult name="vblex.pp.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.f.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.mf.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.m.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pp.pl+neg">
    <sequence>
      <tags-item tags="vblex.pp.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.pprs+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PPRS"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>

  <def-mult name="vblex.pp.sg+neg">
    <sequence>
      <tags-item tags="vblex.pp.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL1"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p1.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p1.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL2"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p2.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p2.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.sg+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <tags-item tags="vblex.*.p3.*.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>

  <def-mult name="vblex.p3.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1+prn.p1">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1+prn.p1+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p1.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1+prn.p2">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1+prn.p2+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.*"/>
      <tags-item tags="prn.p2.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p1.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2+prn.p2">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.*"/>
      <tags-item tags="prn.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2+prn.p2+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.*"/>
      <tags-item tags="prn.p2.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>

  <def-mult name="vblex.p3.pl+prn.p2+prn.p1">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.*"/>
      <tags-item tags="prn.p1.*"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2+prn.p1+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.*"/>
      <tags-item tags="prn.p1.*"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>

  <def-mult name="vblex.p3.pl+prn.p2.mf.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p2.mf.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.f.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.f.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.mf.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p1.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p1.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p1.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p1.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p1.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p2.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p2.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p2.mf.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p2.mf.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p2.mf.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p3.f.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p3.f.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.f.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p3.mf.pl">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p3.mf.pl+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.mf.pl"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p3.m.sg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.p3.pl+prn.p3.m.sg+prn.p3.m.sg+neg">
    <sequence>
      <label-item label="VBLEX-PL3"/>
      <tags-item tags="prn.p3.m.sg"/>
      <tags-item tags="prn.p3.m.sg"/>
      <label-item label="NEG"/>
    </sequence>
  </def-mult>
</tagset>
</tagger>
