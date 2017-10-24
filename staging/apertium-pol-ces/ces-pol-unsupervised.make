TAGGER_UNSUPERVISED_ITERATIONS=2
BASENAME=apertium-pol-ces
LANG1=ces
LANG2=pol
TAGGER=$(LANG1)-tagger-data
PREFIX=$(LANG1)-$(LANG2)

TSX_FILE=$(BASENAME).$(LANG1).tsx
#TSX_FILE=dev/generated-ces.tsx

all: $(PREFIX).prob

$(PREFIX).prob: $(TSX_FILE) $(TAGGER)/$(LANG1).dic $(TAGGER)/$(LANG1).crp
	apertium-validate-tagger $(TSX_FILE)
	apertium-tagger -d -t $(TAGGER_UNSUPERVISED_ITERATIONS) \
                           $(TAGGER)/$(LANG1).dic \
                           $(TAGGER)/$(LANG1).crp \
                           $(TSX_FILE) \
                           $(PREFIX).prob;

$(TAGGER)/$(LANG1).dic: $(BASENAME).$(LANG1).dix $(PREFIX).automorf.bin
	@echo "Generating $@";
	@echo "This may take some time. Please, take a cup of coffee and come back later.";
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	apertium-validate-tagger $(TSX_FILE)
	lt-expand $(BASENAME).$(LANG1).dix | grep -v "__REGEXP__" | grep -v ":<:" |\
	awk 'BEGIN{FS=":>:|:"}{print $$1 ".";}' >$(LANG1).dic.expanded
	@echo "." >>$(LANG1).dic.expanded
	@echo "?" >>$(LANG1).dic.expanded
	@echo ";" >>$(LANG1).dic.expanded
	@echo ":" >>$(LANG1).dic.expanded
	@echo "!" >>$(LANG1).dic.expanded
	@echo "42" >>$(LANG1).dic.expanded
	@echo "," >>$(LANG1).dic.expanded
	@echo "(" >>$(LANG1).dic.expanded
	@echo "\\[" >>$(LANG1).dic.expanded
	@echo ")" >>$(LANG1).dic.expanded
	@echo "\\]" >>$(LANG1).dic.expanded
	@echo "¿" >>$(LANG1).dic.expanded
	@echo "¡" >>$(LANG1).dic.expanded   
	@echo "JKL" >>$(LANG1).dic.expanded
	lt-proc -a $(PREFIX).automorf.bin <$(LANG1).dic.expanded | \
	# awk '{gsub(/\/([^< ]+)<n><acr><sp>/,""); print;}' | \
	sed -r 's/\/[A-Z]+<n><acr><sp>//g' | \
	sed -r 's/\^([^$$/\\ ]+)\$$/^\1\/\1<n><acr><sp>$$/g' | \
	apertium-filter-ambiguity $(TSX_FILE) > $@
	rm $(LANG1).dic.expanded;

$(TAGGER)/$(LANG1).crp: $(PREFIX).automorf.bin $(TAGGER)/$(LANG1).crp.txt
	apertium-destxt < $(TAGGER)/$(LANG1).crp.txt | \
	lt-proc $(PREFIX).automorf.bin> $(TAGGER)/$(LANG1).crp
#	lt-proc $(PREFIX).automorf.bin | \
	# awk '{gsub(/\/([^< ]+)<n><acr><sp>/,""); print;}' | \
	sed -r 's/\/[A-Z]+<n><acr><sp>//g' | \
	sed -r 's/\^([^$$/\\ ]+)\$$/^\1\/\1<n><acr><sp>$$/g' > $(TAGGER)/$(LANG1).crp

clean:
	rm -f $(PREFIX).prob
