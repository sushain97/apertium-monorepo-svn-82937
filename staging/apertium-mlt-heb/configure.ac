#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.2.0])
m4_define([required_lttoolbox_version], [3.1.2])

AC_INIT([apertium-mt-he], [0.1.0], [sagie@maoz.info])
AM_INIT_AUTOMAKE([apertium-mt-he], [0.1.0], no-define)
AC_PROG_LN_S
AC_PROG_AWK
# todo: only needed if we use a config.in file--should we?
# AC_CONFIG_HEADER([config])

PKG_CHECK_MODULES(APERTIUM,   apertium >= required_apertium_version, [], [PKG_CHECK_MODULES(APERTIUM,   apertium-3.2 >= required_apertium_version)])

AC_OUTPUT([Makefile])
