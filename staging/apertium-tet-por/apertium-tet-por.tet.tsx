<?xml version="1.0" encoding="UTF-8"?>
<tagger name="tetum">
<tagset>
<!--
  48 single tags
  3 multiple tags
-->
  <def-label name="apos" closed="true">
    <tags-item tags="apos"/>
  </def-label>
  <def-label name="adj">
    <tags-item tags="adj"/>
  </def-label>
  <def-label name="adv">
    <tags-item tags="adv"/>
  </def-label>
  <def-label name="adv.itg" closed="true">
    <tags-item tags="adv.itg"/>
  </def-label>
  <def-label name="cla" closed="true">
    <tags-item tags="cla"/>
  </def-label>
  <def-label name="cm" closed="true">
    <tags-item tags="cm"/>
  </def-label>
  <def-label name="cnjadv">
    <tags-item tags="cnjadv"/>
  </def-label>
  <def-label name="cnjcoo" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>
  <def-label name="cnjsub" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>
  <def-label name="det" closed="true">
    <tags-item tags="det"/>
  </def-label>
  <def-label name="det.dem" closed="true">
    <tags-item tags="det.dem"/>
  </def-label>
  <def-label name="det.ind" closed="true">
    <tags-item tags="det.ind"/>
  </def-label>
  <def-label name="det.pos" closed="true">
    <tags-item tags="det.pos"/>
  </def-label>
  <def-label name="det.qnt" closed="true">
    <tags-item tags="det.qnt"/>
  </def-label>
  <def-label name="foc" closed="true">
    <tags-item tags="foc"/>
  </def-label>
  <def-label name="guio" closed="true">
    <tags-item tags="guio"/>
  </def-label>
  <def-label name="ij" closed="true">
    <tags-item tags="ij"/>
  </def-label>
  <def-label name="n">
    <tags-item tags="n"/>
  </def-label>
  <def-label name="np.ant.f">
    <tags-item tags="np.ant.f"/>
  </def-label>
  <def-label name="np.ant.m">
    <tags-item tags="np.ant.m"/>
  </def-label>
  <def-label name="np.cog">
    <tags-item tags="np.cog"/>
  </def-label>
  <def-label name="np.org">
    <tags-item tags="np.org"/>
  </def-label>
  <def-label name="np.top">
    <tags-item tags="np.top"/>
  </def-label>
  <def-label name="postadv" closed="true">
    <tags-item tags="postadv"/>
  </def-label>
  <def-label name="postdet" closed="true">
    <tags-item tags="postdet"/>
  </def-label>
  <def-label name="postverb" closed="true">
    <tags-item tags="postverb"/>
  </def-label>
  <def-label name="pr" closed="true">
    <tags-item tags="pr"/>
  </def-label>
  <def-label name="predet.ind" closed="true">
    <tags-item tags="predet.ind"/>
  </def-label>
  <def-label name="preverb" closed="true">
    <tags-item tags="preverb"/>
  </def-label>
  <def-label name="prn.dem" closed="true">
    <tags-item tags="prn.dem"/>
  </def-label>
  <def-label name="prn.ind" closed="true">
    <tags-item tags="prn.ind"/>
  </def-label>
  <def-label name="prn.itg" closed="true">
    <tags-item tags="prn.itg"/>
  </def-label>
  <def-label name="prn.pers.p1n.pl" closed="true">
    <tags-item tags="prn.pers.p1n.pl"/>
  </def-label>
  <def-label name="prn.pers.p1.sg" closed="true">
    <tags-item tags="prn.pers.p1.sg"/>
  </def-label>
  <def-label name="prn.pers.p1x.pl" closed="true">
    <tags-item tags="prn.pers.p1x.pl"/>
  </def-label>
  <def-label name="prn.pers.p2.hon.sg" closed="true">
    <tags-item tags="prn.pers.p2.hon.sg"/>
  </def-label>
  <def-label name="prn.pers.p2.pl" closed="true">
    <tags-item tags="prn.pers.p2.pl"/>
  </def-label>
  <def-label name="prn.pers.p2.sg" closed="true">
    <tags-item tags="prn.pers.p2.sg"/>
  </def-label>
  <def-label name="prn.pers.p3.pl" closed="true">
    <tags-item tags="prn.pers.p3.pl"/>
  </def-label>
  <def-label name="prn.pers.p3.sg" closed="true">
    <tags-item tags="prn.pers.p3.sg"/>
  </def-label>
  <def-label name="prn.rec" closed="true">
    <tags-item tags="prn.rec"/>
  </def-label>
  <def-label name="rel.adv" closed="true">
    <tags-item tags="rel.adv"/>
  </def-label>
  <def-label name="vbhaver" closed="true">
    <tags-item tags="vbhaver"/>
  </def-label>
  <def-label name="vblex.caus">
    <tags-item tags="vblex.caus"/>
  </def-label>
  <def-label name="vblex.iv">
    <tags-item tags="vblex.iv"/>
  </def-label>
  <def-label name="vblex.TD">
    <tags-item tags="vblex.TD"/>
  </def-label>
  <def-label name="vblex.tv">
    <tags-item tags="vblex.tv"/>
  </def-label>
  <def-label name="vbmod" closed="true">
    <tags-item tags="vbmod"/>
  </def-label>
  <def-label name="num" closed="true">
    <tags-item tags="num"/>
  </def-label>
  <def-mult name="adv+vbmod" closed="true">
    <sequence>
      <tags-item tags="adv"/>
      <tags-item tags="vbmod"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.iv+prn.ref">
    <sequence>
      <tags-item tags="vblex.iv"/>
      <tags-item tags="prn.ref"/>
    </sequence>
  </def-mult>
  <def-mult name="vblex.tv+prn.ref">
    <sequence>
      <tags-item tags="vblex.tv"/>
      <tags-item tags="prn.ref"/>
    </sequence>
  </def-mult>
</tagset>
</tagger>
