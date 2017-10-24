#ifndef ISERIALIZABLE_H_
#define ISERIALIZABLE_H_

#include "rapidxml.hpp"

class ISerializable {
public:
	virtual void serialize(rapidxml::xml_node<>*, rapidxml::xml_document<>&) = 0;
};

#endif /* ISERIALIZABLE_H_ */
