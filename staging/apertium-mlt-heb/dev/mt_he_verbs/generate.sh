#!/bin/sh

cat ../mt_verbs/stems.csv | grep , | awk -F, '{ print $1","$3"," }'
