searchState.loadedDescShard("toml_edit", 0, "<code>toml_edit</code>\nType representing a TOML array, payload of the <code>Value::Array</code>…\nAn inline array of values.\nAn owned iterator type over <code>Table</code>’s key/value pairs.\nAn iterator type over <code>Array</code>’s values.\nAn iterator type over <code>Array</code>’s values.\nType representing a TOML array of tables\nType representing array of tables.\nAn iterator type over <code>ArrayOfTables</code>’s values.\nAn iterator type over <code>ArrayOfTables</code>’s values.\nAn iterator type over <code>ArrayOfTables</code>’s values.\nA boolean value.\nOffset between local time and UTC\nA parsed TOML date value\nA parsed TOML datetime value\nAn RFC 3339 formatted date-time with offset.\nError returned from parsing a <code>Datetime</code> in the <code>FromStr</code> …\nA prefix and suffix,\nDeprecated, replaced with <code>DocumentMut</code>\nType representing a TOML document\nA view into a single location in a map, which may be …\nA 64-bit float value.\nA value together with its <code>to_string</code> representation, …\nType representing a parsed TOML document\nA view into a single location in a map, which may be …\nA view into a single occupied location in a <code>IndexMap</code>.\nType representing a TOML inline table, payload of the …\nAn inline table of key/value pairs.\nAn owned iterator type over key/value pairs of an inline …\nAn iterator type over key/value pairs of an inline table.\nA mutable iterator type over key/value pairs of an inline …\nA view into a single empty location in a <code>IndexMap</code>.\nA 64-bit integer value.\nOpaque string storage internal to <code>toml_edit</code>\nAn owned iterator type over <code>Table</code>’s key/value pairs.\nType representing either a value, a table, an array of …\nAn iterator type over <code>Table</code>’s key/value pairs.\nA mutable iterator type over <code>Table</code>’s key/value pairs.\nKey as part of a Key/Value Pair or a table header.\nA mutable reference to a <code>Key</code>’s formatting\nType representing none.\nAn occupied Entry.\nAn occupied Entry.\nA view into a single occupied location in a <code>IndexMap</code>.\nA parsed TOML time offset\nOpaque string storage for raw TOML; internal to <code>toml_edit</code>\nTOML-encoded value\nA string value.\nType representing a TOML non-inline table\nType representing table.\nThis trait represents either a <code>Table</code>, or an <code>InlineTable</code>.\nA parsed TOML time value\nType representing a TOML parse error\nA vacant Entry.\nA vacant Entry.\nA view into a single empty location in a <code>IndexMap</code>.\nRepresentation of a TOML Value (as part of a Key/Value …\nType representing value.\nA suffix which, when applied to a time, denotes a UTC …\nReturns an empty array of tables.\nCasts <code>self</code> to array.\nCasts <code>self</code> to array.\nCasts <code>self</code> to mutable array.\nCasts <code>self</code> to mutable array.\nCasts <code>self</code> to array of tables.\nCasts <code>self</code> to mutable array of tables.\nCasts <code>self</code> to boolean.\nCasts <code>self</code> to boolean.\nCasts <code>self</code> to date-time.\nCasts <code>self</code> to date-time.\nCasts <code>self</code> to float.\nCasts <code>self</code> to float.\nCasts <code>self</code> to inline table.\nCasts <code>self</code> to inline table.\nCasts <code>self</code> to mutable inline table.\nCasts <code>self</code> to mutable inline table.\nCasts <code>self</code> to integer.\nCasts <code>self</code> to integer.\nReturns a reference to the root item.\nReturns a reference to the root item.\nReturns a mutable reference to the root item.\nAccess a mutable proxy for the <code>Key</code>.\nAccess the underlying value\nReturns key raw representation, if available.\nReturns the raw representation, if available.\nReturns the raw representation, if available.\nAccess the underlying string\nCasts <code>self</code> to str.\nAccess the underlying string\nCasts <code>self</code> to str.\nReturns a reference to the root table.\nReturns a reference to the root table.\nCasts <code>self</code> to table.\nCasts <code>self</code> to either a table or an inline table.\nCasts <code>self</code> to either a table or an inline table.\nReturns a mutable reference to the root table.\nCasts <code>self</code> to mutable table.\nCasts <code>self</code> to value.\nCasts <code>self</code> to mutable value.\nClears the table, removing all key-value pairs. Keeps the …\nClears the array, removing all values. Keeps the allocated …\nRemoves all the tables.\nClears the table, removing all key-value pairs. Keeps the …\nGo back to default decor\nClears the table, removing all key-value pairs. Keeps the …\nReturns true if the table contains an array of tables with …\nReturns true if the table contains an item with the given …\nReturns true if the table contains given key.\nReturns true if the table contains an item with the given …\nReturns true if the table contains a table with the given …\nReturns true if the table contains a value with the given …\nOptional date. Required for: <em>Offset Date-Time</em>, <em>Local </em>…\nDay: 1 to {28, 29, 30, 31} (based on month/year)\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the decor associated with a given key of the table.\nGet the decoration of the value.\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nReturns the surrounding whitespace\nGet the decoration of the value.\nSets the prefix and the suffix for value.\nReturns the surrounding whitespace for between dots\nReturns the surrounding whitespace for between dots\nReturns the surrounding whitespace for between dots\nReturns the surrounding whitespace for between dots\nGets the given key’s corresponding entry in the Table …\nGets the given key’s corresponding entry in the Table …\nGets the given key’s corresponding entry in the Table …\nGets the given key’s corresponding entry in the Table …\nGets the given key’s corresponding entry in the Table …\nGets the given key’s corresponding entry in the Table …\nAuto formats the table.\nAuto formats the array.\nAuto formats the table.\nAuto formats the key.\nAuto formats the key.\nAuto formats the value.\nAuto formats the table.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParses a document from a &amp;str\nParses a document from a &amp;str\nParses a value from a &amp;str\nTries to parse a key from a &amp;str, if fails, tries as basic …\nParses a value from a &amp;str\nReturns an optional reference to an item given the key.\nGets a reference to the value in the entry.\nGets a reference to the value in the entry.\nReturns a reference to the value at the given index, or …\nReturns an optional reference to the table.\nReturn an optional reference to the value at the given the …\nIndex into a TOML array or map. A string index can be used …\nReturns the parsed key value.\nReturns the parsed key value.\nReturns an optional reference to an item given the key.\nReturn references to the key-value pair stored for key, if …\nReturn references to the key-value pair stored for key, if …\nReturn references to the key-value pair stored for key, if …\nReturn mutable references to the key-value pair stored for …\nReturn mutable references to the key-value pair stored for …\nReturn mutable references to the key-value pair stored for …\nReturns an optional mutable reference to an item given the …\nGets a mutable reference to the value in the entry.\nGets a mutable reference to the value in the entry.\nReturns a reference to the value at the given index, or …\nReturns an optional mutable reference to the table.\nReturn an optional mutable reference to the value at the …\nMutably index into a TOML array or map. A string index can …\nReturns an optional mutable reference to an item given the …\nInserts a key/value pair if the table does not contain the …\nGet key/values for values that are visually children of …\nGet key/values for values that are visually children of …\nGet key/values for values that are visually children of …\nHour: 0 to 23\nInserts a key-value pair into the map.\nSets the value of the entry, and returns the entry’s old …\nSets the value of the entry with the <code>VacantEntry</code>’s key, …\nSets the value of the entry, and returns the entry’s old …\nSets the value of the entry with the <code>VacantEntry</code>’s key, …\nInserts an element at the given position within the array, …\nInserts a key-value pair into the map.\nInserts a key-value pair into the map.\nInserts an already formatted value at the given position …\nInserts a key-value pair into the map.\nInserts a key-value pair into the map.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert to an inline array\nCasts <code>self</code> to array of tables.\nConvert to an inline table\nConverts the <code>OccupiedEntry</code> into a mutable reference to the …\nConverts the <code>OccupiedEntry</code> into a mutable reference to the …\nAllow editing of the <code>DocumentMut</code>\nConvert to a table\nCasts <code>self</code> to table.\nCasts <code>self</code> to value.\nThe wrapped value\nReturns true if <code>self</code> is an array.\nReturns true if <code>self</code> is an array.\nReturns true if <code>self</code> is an array of tables.\nReturns true if <code>self</code> is a boolean.\nReturns true if <code>self</code> is a boolean.\nReturns true if <code>self</code> is a date-time.\nReturns true if <code>self</code> is a date-time.\nCheck if this is a wrapper for dotted keys, rather than a …\nCheck if this is a wrapper for dotted keys, rather than a …\nCheck if this is a wrapper for dotted keys, rather than a …\nReturns true if the table is empty.\nReturns true if the table is empty.\nReturn true if <code>self.len() == 0</code>.\nReturns true if <code>self.len() == 0</code>.\nReturns true if the table is empty.\nReturns true if the table is empty.\nReturns true if <code>self</code> is a float.\nReturns true if <code>self</code> is a float.\nIf a table has no key/value pairs and implicit, it will …\nReturns true if <code>self</code> is an inline table.\nReturns true if <code>self</code> is an inline table.\nReturns true if <code>self</code> is an integer.\nReturns true if <code>self</code> is an integer.\nReturns true if <code>self</code> is <code>None</code>.\nReturns true if <code>self</code> is a string.\nReturns true if <code>self</code> is a string.\nReturns true if <code>self</code> is a table.\nReturns true if <code>self</code> is either a table, or an inline table.\nReturns true if <code>self</code> is a value.\nReturns an iterator over key/value pairs.\nReturns an iterator over all values.\nReturns an iterator over tables.\nReturns an iterator over the root table.\nReturns an iterator over the root table.\nReturns an iterator over key/value pairs.\nReturns an iterator over all key/value pairs, including …\nReturns an mutable iterator over all key/value pairs, …\nReturns an iterator over all values.\nReturns an iterator over tables.\nReturns an iterator over key/value pairs.\nReturns an mutable iterator over all key/value pairs, …\nReturns an accessor to a key’s formatting\nReturns the entry key\nGets a reference to the entry key\nGets a reference to the entry key\nReturns the entry key\nGets a reference to the entry key\nGets a reference to the entry key\nReturns an accessor to a key’s formatting\nReturns an accessor to a key’s formatting\nReturns the decor associated with a given key of the table.\nReturns the decor associated with a given key of the table.\nReturns the decor associated with a given key of the table.\nReturns the decor associated with a given key of the table.\nReturns the decor associated with a given key of the table.\nReturns the decor associated with a given key of the table.\nReturns an accessor to a key’s formatting\nGets a mutable reference to the entry key\nGets a mutable reference to the entry key\nReturns an accessor to a key’s formatting\nReturns an accessor to a key’s formatting\nReturns the surrounding whitespace for the line entry\nReturns the surrounding whitespace for the line entry\nReturns the surrounding whitespace for the line entry\nReturns the surrounding whitespace for the line entry\nReturns the number of nonempty items.\nReturns the number of nonempty items.\nReturns the length of the underlying Vec.\nReturns the length of the underlying Vec. To get the …\nReturns the number of key/value pairs.\nReturns the number of non-empty items in the table.\nIn-place convert to a value\nWhat went wrong\nMinute: 0 to 59\nMonth: 1 to 12\nNanosecond: 0 to <code>999_999_999</code>\nCreate an empty <code>Array</code>\nCreates an empty array of tables.\nCreates an empty document\nCreates an empty document\nCreates an empty table.\nCreate an empty string\nCreate a new table key\nDefault-formatted value\nCreates a new decor from the given prefix and suffix.\nCreates an empty table.\nOptional offset. Required for: <em>Offset Date-Time</em>.\nEnsures a value is in the entry by inserting the default …\nEnsures a value is in the entry by inserting the default …\nSets <code>self</code> to the given item if <code>self</code> is none and returns a …\nEnsures a value is in the entry by inserting the result of …\nEnsures a value is in the entry by inserting the result of …\nParse a TOML document\nParse a TOML key expression\nThe position of the <code>Table</code> within the <code>DocumentMut</code>.\nWhitespace after before element\nGet the prefix.\nAppends a new value to the end of the array, applying …\nAppends a table to the array.\nAppends a new, already formatted value to the end of the …\nAccess the raw, unparsed document\nRemoves an item given the key.\nTakes the value out of the entry, and returns it\nTakes the value out of the entry, and returns it\nRemoves the value at the given index.\nRemoves a table with the given index.\nRemoves an item given the key.\nRemoves an item given the key.\nRemoves a key from the map, returning the stored key and …\nRemoves a key from the map, returning the stored key and …\nReplaces the element at the given position within the …\nReplaces the element at the given position within the …\nRetains only the values specified by the <code>keep</code> predicate.\nRetains only the elements specified by the <code>keep</code> predicate.\nRetains only the elements specified by the <code>keep</code> predicate.\nRetains only the elements specified by the <code>keep</code> predicate.\nSecond: 0 to {58, 59, 60} (based on leap second rules)\nChange this table’s dotted status\nChange this table’s dotted status\nChange this table’s dotted status\nIf a table has no key/value pairs and implicit, it will …\nSets the position of the <code>Table</code> within the <code>DocumentMut</code>.\nSet whitespace after before element\nSet the prefix.\nSet the suffix.\nSet whitespace after last element\nSet whitespace after last element\nSet whether the array will use a trailing comma\nSorts the slice with a comparator function.\nSorts the array with a key extraction function.\nSorts Key/Value Pairs of the table.\nSorts the key/value pairs by key.\nSorts Key/Value Pairs of the table.\nSort Key/Value Pairs of the table using the using the …\nSort Key/Value Pairs of the table using the using the …\nThe location within the original document\nThe location within the original document\nThe start/end index into the original document where the …\nThe location within the original document\nThe location within the original document\nThe location within the original document\nThe location within the original document\nThe location within the original document\nThe location within the original document\nThe location within the original document\nThe location within the original document\nGet the suffix.\nReturns an empty table.\nOptional time. Required for: <em>Offset Date-Time</em>, <em>Local </em>…\nWhitespace after last element\nWhitespace after last element\nWhitespace after last element\nWhether the array will use a trailing comma\nText description of value type\nText description of value type\nReturns a formatted value.\nThe wrapped value\nDocument tree traversal to walk a shared borrow of a …\nDocument tree traversal to mutate an exclusive borrow of a …\nWhile creating the <code>Key</code>, add <code>Decor</code> to it\nWhile creating the <code>Key</code>, add <code>Decor</code> to it for between dots\nWhile creating the <code>Key</code>, add <code>Decor</code> to it for the line entry\nYear: four digits\nMinutes: -<code>1_440..1_440</code>\nDocument tree traversal to mutate an exclusive borrow of a …\nDocument tree traversal to mutate an exclusive borrow of a …\n<code>visit_table_mut</code> and <code>visit_inline_table_mut</code> both recurse …")