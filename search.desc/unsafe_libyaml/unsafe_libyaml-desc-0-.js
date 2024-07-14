searchState.loadedDescShard("unsafe_libyaml", 0, "github crates-io docs-rs\nAn ALIAS event.\nAn ALIAS token.\nAn ANCHOR token.\nLet the parser choose the break type.\nLet the parser choose the encoding.\nLet the emitter choose the style.\nLet the emitter choose the style.\nLet the emitter choose the style.\nA BLOCK-END token.\nA BLOCK-ENTRY token.\nA BLOCK-MAPPING-START token.\nThe block mapping style.\nA BLOCK-SEQUENCE-START token.\nThe block sequence style.\nCannot compose a YAML document.\nUse CR LN for line breaks (DOS style).\nUse CR for line breaks (Mac style).\nA DOCUMENT-END event.\nA DOCUMENT-END token.\nA DOCUMENT-START event.\nA DOCUMENT-START token.\nThe double-quoted scalar style.\nCannot emit a YAML stream.\nExpect the first key of a block mapping.\nExpect the key of a block mapping.\nExpect a value for a simple key of a block mapping.\nExpect a value of a block mapping.\nExpect the first item of a block sequence.\nExpect an item of a block sequence.\nExpect the content of a document.\nExpect DOCUMENT-END.\nExpect DOCUMENT-START or STREAM-END.\nExpect nothing.\nExpect the first DOCUMENT-START or STREAM-END.\nExpect the first key of a flow mapping.\nExpect a key of a flow mapping.\nExpect a value for a simple key of a flow mapping.\nExpect a value of a flow mapping.\nExpect the first item of a flow sequence.\nExpect an item of a flow sequence.\nExpect STREAM-START.\nA FLOW-ENTRY token.\nA FLOW-MAPPING-END token.\nA FLOW-MAPPING-START token.\nThe flow mapping style.\nA FLOW-SEQUENCE-END token.\nA FLOW-SEQUENCE-START token.\nThe flow sequence style.\nThe folded scalar style.\nA KEY token.\nThe literal scalar style.\nUse LN for line breaks (Unix style).\nA MAPPING-END event.\nA mapping node.\nA MAPPING-START event.\nCannot allocate or reallocate a block of memory.\nNo error is produced.\nAn empty event.\nAn empty node.\nAn empty token.\nCannot parse the input stream.\nExpect the first key of a block mapping.\nExpect a block mapping key.\nExpect a block mapping value.\nExpect a block node or indentless sequence.\nExpect a block node.\nExpect an entry of a block sequence.\nExpect the first entry of a block sequence.\nExpect the content of a document.\nExpect DOCUMENT-END.\nExpect DOCUMENT-START.\nExpect nothing.\nExpect an empty value of a flow mapping.\nExpect the first key of a flow mapping.\nExpect a key of a flow mapping.\nExpect a value of a flow mapping.\nExpect a flow node.\nExpect the and of an ordered mapping entry.\nExpect a key of an ordered mapping.\nExpect a value of an ordered mapping.\nExpect an entry of a flow sequence.\nExpect the first entry of a flow sequence.\nExpect the beginning of an implicit document.\nExpect an entry of an indentless sequence.\nExpect STREAM-START.\nThe plain scalar style.\nCannot read or decode the input stream.\nA SCALAR event.\nA scalar node.\nA SCALAR token.\nCannot scan the input stream.\nA SEQUENCE-END event.\nA sequence node.\nA SEQUENCE-START event.\nThe single-quoted scalar style.\nA STREAM-END event.\nA STREAM-END token.\nA STREAM-START event.\nA STREAM-START token.\nA TAG-DIRECTIVE token.\nA TAG token.\nThe UTF-16-BE encoding with BOM.\nThe UTF-16-LE encoding with BOM.\nThe default UTF-8 encoding.\nA VALUE token.\nA VERSION-DIRECTIVE token.\nCannot write to the output stream.\nThe anchor.\nThe position column.\nThe error context.\nThe context position.\nThe token data.\nThe event data.\nThe node data.\nThe end of the stack.\nIs the document end indicator implicit?\nThe end of the token.\nThe end of the event.\nThe end of the node.\nThe end of the document.\nError type.\nError type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe tag handle.\nThe position index.\nThe node id.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe key of the element.\nThe position line.\nThe major version number.\nThe position mark.\nThe anchor mark.\nThe minor version number.\nThe document nodes.\nIs a simple key possible?\nThe tag prefix.\nError description.\nError description.\nThe problem position.\nThe byte about which the problem occurred.\nThe problematic value (-1 is none).\nIs a simple key required?\nThe beginning of the stack.\nIs the document start indicator implicit?\nThe beginning of the token.\nThe beginning of the event.\nThe beginning of the node.\nThe beginning of the document.\nThe node tag.\nThe list of tag directives.\nThe number of the token.\nThe top of the stack.\nThe token type.\nThe event type.\nThe node type.\nThe value of the element.\nThe version directive.\nThis structure holds aliases data.\nCreate an ALIAS event.\nLine break type.\nCreate a MAPPING node and attach it to the document.\nCreate a SCALAR node and attach it to the document.\nCreate a SEQUENCE node and attach it to the document.\nAdd a pair of a key and a value to a MAPPING node.\nAdd an item to a SEQUENCE node.\nDelete a YAML document and all its nodes.\nCreate the DOCUMENT-END event.\nGet a node of a YAML document.\nGet the root of a YAML document node.\nCreate a YAML document.\nCreate the DOCUMENT-START event.\nThe document structure.\nFinish a YAML stream.\nDestroy an emitter.\nEmit a YAML document.\nEmit an event.\nFlush the accumulated characters to the output.\nInitialize an emitter.\nStart a YAML stream.\nSet the preferred line break.\nSet if the output should be in the “canonical” format …\nSet the output encoding.\nSet the indentation increment.\nSet a generic output handler.\nSet a string output.\nSet if unescaped non-ASCII characters are allowed.\nSet the preferred line width. -1 means unlimited.\nThe emitter states.\nThe emitter structure.\nThe stream encoding.\nMany bad things could happen with the parser and emitter.\nFree any memory allocated for an event object.\nThe event structure.\nEvent types.\nCreate a MAPPING-END event.\nCreate a MAPPING-START event.\nMapping styles.\nThe pointer position.\nAn element of a sequence node.\nAn element of a mapping node.\nThe node structure.\nNode types.\nDestroy a parser.\nInitialize a parser.\nParse the input stream and produce the next YAML document.\nParse the input stream and produce the next parsing event.\nScan the input stream and produce the next token.\nSet the source encoding.\nSet a generic input handler.\nSet a string input.\nThe states of the parser.\nThe parser structure.\nThe prototype of a read handler.\nCreate a SCALAR event.\nScalar styles.\nCreate a SEQUENCE-END event.\nCreate a SEQUENCE-START event.\nSequence styles.\nThis structure holds information about a potential simple …\nCreate the STREAM-END event.\nCreate the STREAM-START event.\nThe tag directive data.\nFree any memory allocated for a token object.\nThe token structure.\nToken types.\nThe version directive data.\nThe prototype of a write handler.")