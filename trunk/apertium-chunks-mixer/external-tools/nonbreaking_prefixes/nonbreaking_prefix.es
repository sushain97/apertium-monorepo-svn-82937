#Anything in this file, followed by a period (and an upper-case word), does NOT indicate an end-of-sentence marker.
#Special cases are included for prefixes that ONLY appear before 0-9 numbers.

#any single upper case letter  followed by a period is not a sentence ender (excluding I occasionally, but we leave it in)
#usually upper case letters are initials in a name
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z

#List of titles. These are often followed by upper-case names, but do not indicate sentence breaks
Adj
Adm
Adv
Asst
Bart
Bldg
Brig
Bros
Capt
Cmdr
Col
Comdr
Con
Corp
Cpl
DR
Dr
Drs
Ens
Gen
Gov
Hon
Hr
Hosp
Insp
Lt
MM
MR
MRS
MS
Maj
Messrs
Mlle
Mme
Mr
Mrs
Ms
Msgr
Op
Ord
Pfc
Ph
Prof
Pvt
Rep
Reps
Res
Rev
Rt
Sen
Sens
Sfc
Sgt
Sr
St
Supt
Surg

#misc - odd period-ending items that NEVER indicate breaks (p.m. does NOT fall into this category - it sometimes ends a sentence)
v
vs
i.e
rev
e.g

#Numbers only. These should only induce breaks when followed by a numeric sequence
# add NUMERIC_ONLY after the word for this function
#This case is mostly for the english "No." which can either be a sentence of its own, or
#if followed by a number, a non-breaking prefix
No #NUMERIC_ONLY# 
Nos
Art #NUMERIC_ONLY#
Nr
pp #NUMERIC_ONLY#
