#import "xmlvm.h"
#import "java_lang_Object.h"

// For circular include:
@class java_util_Map;
@class java_lang_Object;
@class java_util_List;
@class java_lang_String;
@class java_lang_StringBuilder;
@class java_lang_Integer;
@class org_apertium_lttoolbox_process_TNodeState;
@class org_apertium_lttoolbox_Alphabet;
@class org_apertium_lttoolbox_process_Node;
@class java_util_Iterator;
@class java_util_Set;

// Automatically generated by xmlvm2obj. Do not edit!


	
@interface org_apertium_lttoolbox_process_TNodeState : java_lang_Object
{
@private org_apertium_lttoolbox_process_Node* org_apertium_lttoolbox_process_TNodeState_where;
@private java_util_List* org_apertium_lttoolbox_process_TNodeState_sequence;
@private int org_apertium_lttoolbox_process_TNodeState_caseWasChanged;

}
+ (void) initialize;
- (id) init;
- (org_apertium_lttoolbox_process_Node*) _GET_where;
- (void) _PUT_where: (org_apertium_lttoolbox_process_Node*) v;
- (java_util_List*) _GET_sequence;
- (void) _PUT_sequence: (java_util_List*) v;
- (int) _GET_caseWasChanged;
- (void) _PUT_caseWasChanged: (int) v;
- (void) __init_org_apertium_lttoolbox_process_TNodeState___org_apertium_lttoolbox_process_Node_java_util_List_boolean :(org_apertium_lttoolbox_process_Node*)n1 :(java_util_List*)n2 :(int)n3;
- (java_lang_String*) toString__;

@end

