#!/bin/sh

echo "=========================================================================";
echo "                             REGRESSION  TESTS";
echo "=========================================================================";
sh regression-tests.sh

echo "=========================================================================";
echo "                              PENDING  TESTS";
echo "=========================================================================";
sh pending-tests.sh
