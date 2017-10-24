<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" encoding="UTF-8"/>

<xsl:template match="alphabet">
  <alphabet><xsl:apply-templates/></alphabet>
</xsl:template>

<xsl:template match="sdefs">
  <sdefs>
    <xsl:apply-templates/>
  </sdefs>
</xsl:template>

<xsl:template match="sdef">
  <sdef n="{./@n}"/>
</xsl:template>

<xsl:template match="pardefs">
  <pardefs>
    <xsl:apply-templates/>
  </pardefs>
</xsl:template>

<xsl:template match="pardef">
  <pardef n="{./@n}">
    <xsl:apply-templates/>
  </pardef>
</xsl:template>

<xsl:template match="e[not(@c='bort')]">
  <xsl:copy-of select="."/>
</xsl:template>

<xsl:template match="e[@c='bort']">
</xsl:template>

<xsl:template match="p">
  <p>
    <xsl:apply-templates/>
  </p>
</xsl:template>

<xsl:template match="l">
  <l><xsl:apply-templates/></l>
</xsl:template>

<xsl:template match="r">
  <r><xsl:apply-templates/></r>
</xsl:template>

<xsl:template match="s">
  <s n="{./@n}"/>
</xsl:template>

<xsl:template match="b">
  <b/>
</xsl:template>

<xsl:template match="j">
  <j/>
</xsl:template>

<xsl:template match="a">
  <a/>
</xsl:template>

<xsl:template match="re">
  <re><xsl:apply-templates/></re>
</xsl:template>

<xsl:template match="section">
  <section id="{./@id}" type="{./@type}">
    <xsl:apply-templates/>
  </section>
</xsl:template>

<xsl:template match="i">
  <i>
    <xsl:apply-templates/>
  </i>
</xsl:template>

<xsl:template match="g"><g><xsl:apply-templates/></g></xsl:template>

<xsl:template match="par">
  <par n="{./@n}"/>
</xsl:template>

<xsl:template match="dictionary">
<dictionary>
  <xsl:apply-templates/>
</dictionary>
</xsl:template>


</xsl:stylesheet>
