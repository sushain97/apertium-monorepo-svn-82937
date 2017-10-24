#include <iostream>
#include <memory>

#include <fstream>
#include <list>

#include <string>

#include "rapidxml.hpp"
#include "rapidxml_utils.hpp"
#include "rapidxml_print.hpp"

#include "TranslationMemoryExchange.h"

#include "xsd/tmx20.hxx"

using namespace std;

int main(int argc, char **argv) {

	try {
		auto_ptr<tmx20::tmx> t(tmx20::tmx_(argv[1]));
		tmx20::tmx::body_type body = t->body();

	    for (tmx20::tmx::body_type::tu_const_iterator it(body.tu().begin());
	    		it != body.tu().end();
	    		++it) {

	    	tmx20::tmx::body_type::tu_type tu = *it;
	    }

	} catch (const xml_schema::exception &e) {
		cerr << e << endl;
		return(1);
	}

	/*
    rapidxml::file<> *f = new rapidxml::file<>("sample.xml");

	char *data = f->data();

	if (data != NULL) {
		rapidxml::xml_document<> doc;
		doc.parse<0>(data);

		rapidxml::xml_node<> *TMXNode = doc.first_node("tmx");

		TranslationMemoryExchange *tmx = new TranslationMemoryExchange(TMXNode);

		rapidxml::xml_document<> doc2;
		tmx->serialize(NULL, doc2);

		cout << doc2;

		delete tmx;
	}

	delete f;
	*/

	return 0;
}
