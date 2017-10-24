#ifndef TRANSLATIONMEMORYEXCHANGE_H_
#define TRANSLATIONMEMORYEXCHANGE_H_

#include <iostream>
#include <string>
#include <map>
#include <list>

#include "rapidxml.hpp"
#include "ISerializable.h"

class TranslationMemoryExchange : public ISerializable {
public:
	TranslationMemoryExchange(rapidxml::xml_node<> *);
	virtual ~TranslationMemoryExchange();

	typedef std::map<std::string, std::string> AttributesType;

	class Note : public ISerializable {
	public:
		Note(rapidxml::xml_node<> *);
		virtual ~Note();

		virtual void serialize(rapidxml::xml_node<>*, rapidxml::xml_document<>&);

	private:
		std::string text;
	};

	class Property : public ISerializable {
	public:
		Property(rapidxml::xml_node<> *);
		virtual ~Property();

		virtual void serialize(rapidxml::xml_node<>*, rapidxml::xml_document<>&);

	private:
		std::string text;
	};

	class TranslationUnit : public ISerializable {
	public:
		TranslationUnit(rapidxml::xml_node<> *);
		virtual ~TranslationUnit();

		class TranslationUnitVariant : public ISerializable {
		public:
			TranslationUnitVariant(rapidxml::xml_node<> *);
			virtual ~TranslationUnitVariant();

			virtual void serialize(rapidxml::xml_node<>*, rapidxml::xml_document<>&);

		private:
			AttributesType attributes;
			std::string text;
		};

		bool const languageComparator(const TranslationUnit *a,	const TranslationUnit *b);

		typedef std::list<TranslationUnitVariant *> TranslationUnitVariantsType;
		TranslationUnitVariantsType getTranslationUnitVariants();

		virtual void serialize(rapidxml::xml_node<>*, rapidxml::xml_document<>&);

	private:
		AttributesType attributes;
		TranslationUnitVariantsType translationUnitVariants;
	};

	typedef std::list<TranslationUnit *> TranslationUnitsType;

	TranslationUnitsType getTranslationUnits();
	void setTranslationUnits(TranslationUnitsType);

	virtual void serialize(rapidxml::xml_node<>*, rapidxml::xml_document<>&);

private:
	std::string version;
	AttributesType header;

	TranslationUnitsType translationUnits;
};

#endif /* TRANSLATIONMEMORYEXCHANGE_H_ */
