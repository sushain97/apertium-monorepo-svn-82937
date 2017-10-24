#include "TranslationMemoryExchange.h"

#include <algorithm>

TranslationMemoryExchange::TranslationMemoryExchange(rapidxml::xml_node<> *TMXNode) {
	rapidxml::xml_attribute<> *versionAttr = TMXNode->first_attribute("version");
	version = versionAttr->value();

	rapidxml::xml_node<> *headerNode = TMXNode->first_node("header");

	for (rapidxml::xml_attribute<> *headerAttr = headerNode->first_attribute(); headerAttr; headerAttr = headerAttr->next_attribute()) {
	    header[headerAttr->name()] = headerAttr->value();
	}

	rapidxml::xml_node<> *bodyNode = TMXNode->first_node("body");

	for (rapidxml::xml_node<> *tuNode = bodyNode->first_node("tu"); tuNode; tuNode = tuNode->next_sibling()) {
		TranslationUnit *tu = new TranslationUnit(tuNode);
		translationUnits.push_back(tu);
	}
}

TranslationMemoryExchange::~TranslationMemoryExchange() {
	for (TranslationUnitsType::iterator it = translationUnits.begin(); it != translationUnits.end(); ++it) {
		delete *it;
	}
}

TranslationMemoryExchange::TranslationUnit::TranslationUnit(rapidxml::xml_node<> *tuNode) {
	for (rapidxml::xml_attribute<> *attr = tuNode->first_attribute(); attr; attr = attr->next_attribute()) {
	    attributes[attr->name()] = attr->value();
	}

	for (rapidxml::xml_node<> *tuvNode = tuNode->first_node("tuv"); tuvNode; tuvNode = tuvNode->next_sibling()) {
		TranslationUnitVariant *tuv = new TranslationUnitVariant(tuvNode);
		translationUnitVariants.push_back(tuv);
	}
}

TranslationMemoryExchange::TranslationUnit::~TranslationUnit() {
	for (TranslationUnitVariantsType::iterator it = translationUnitVariants.begin(); it != translationUnitVariants.end(); ++it) {
		delete *it;
	}
}

TranslationMemoryExchange::TranslationUnit::TranslationUnitVariant::TranslationUnitVariant(rapidxml::xml_node<> *tuvNode) {
	for (rapidxml::xml_attribute<> *attr = tuvNode->first_attribute(); attr; attr = attr->next_attribute()) {
	    attributes[attr->name()] = attr->value();
	}

	text = tuvNode->first_node("seg")->value();
}

TranslationMemoryExchange::TranslationUnit::TranslationUnitVariant::~TranslationUnitVariant() {

}

void TranslationMemoryExchange::TranslationUnit::TranslationUnitVariant::serialize(rapidxml::xml_node<> *parent, rapidxml::xml_document<> &doc) {
	rapidxml::xml_node<> *tuvNode = doc.allocate_node(rapidxml::node_element, "tuv");
	parent->append_node(tuvNode);

	for (AttributesType::iterator it = attributes.begin(); it != attributes.end(); ++it) {
		const char *key = it->first.c_str();
		const char *value = it->second.c_str();
		rapidxml::xml_attribute<> *attr = doc.allocate_attribute(key, value);
		tuvNode->append_attribute(attr);
	}

	rapidxml::xml_node<> *segNode = doc.allocate_node(rapidxml::node_element, "seg", text.c_str());
	tuvNode->append_node(segNode);
}

const bool TranslationMemoryExchange::TranslationUnit::languageComparator(const TranslationUnit *a, const TranslationUnit *b) {
	return true;
}

TranslationMemoryExchange::TranslationUnit::TranslationUnitVariantsType TranslationMemoryExchange::TranslationUnit::getTranslationUnitVariants() {
	return translationUnitVariants;
}

void TranslationMemoryExchange::TranslationUnit::serialize(rapidxml::xml_node<> *parent, rapidxml::xml_document<> &doc) {
	rapidxml::xml_node<> *tuNode = doc.allocate_node(rapidxml::node_element, "tu");
	parent->append_node(tuNode);

	for (AttributesType::iterator it = attributes.begin(); it != attributes.end(); ++it) {
		const char *key = it->first.c_str();
		const char *value = it->second.c_str();
		rapidxml::xml_attribute<> *headerAttr = doc.allocate_attribute(key, value);
		tuNode->append_attribute(headerAttr);
	}

	for (TranslationUnitVariantsType::iterator it = translationUnitVariants.begin(); it != translationUnitVariants.end(); ++it) {
		(*it)->serialize(tuNode, doc);
	}
}

TranslationMemoryExchange::TranslationUnitsType TranslationMemoryExchange::getTranslationUnits() {
	return translationUnits;
}

void TranslationMemoryExchange::setTranslationUnits(TranslationMemoryExchange::TranslationUnitsType u) {
	translationUnits = u;
}

void TranslationMemoryExchange::serialize(rapidxml::xml_node<> *parent, rapidxml::xml_document<> &doc) {
	rapidxml::xml_node<> *tmxNode = doc.allocate_node(rapidxml::node_element, "tmx");
	doc.append_node(tmxNode);

	rapidxml::xml_attribute<> *versionAttr = doc.allocate_attribute("version", version.c_str());
	tmxNode->append_attribute(versionAttr);

	rapidxml::xml_node<> *headerNode = doc.allocate_node(rapidxml::node_element, "header");
	tmxNode->append_node(headerNode);

	for (AttributesType::iterator it = header.begin(); it != header.end(); ++it) {
		const char *key = it->first.c_str();
		const char *value = it->second.c_str();
		rapidxml::xml_attribute<> *headerAttr = doc.allocate_attribute(key, value);
		headerNode->append_attribute(headerAttr);
	}

	rapidxml::xml_node<> *bodyNode = doc.allocate_node(rapidxml::node_element, "body");
	tmxNode->append_node(bodyNode);

	for (TranslationUnitsType::iterator it = translationUnits.begin(); it != translationUnits.end(); ++it) {
		(*it)->serialize(bodyNode, doc);
	}
}
