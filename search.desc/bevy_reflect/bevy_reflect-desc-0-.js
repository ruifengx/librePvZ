searchState.loadedDescShard("bevy_reflect", 0, "Reflection in Rust.\nA singular element access within a path. Multiple accesses …\nAn error originating from an <code>Access</code> of an element within a …\nThe kind of <code>AccessError</code>, along with some kind-specific …\nA enumeration of all error outcomes that might happen when …\nA trait used to power array-like operations via reflection.\nA container for compile-time array info.\nAn iterator over an <code>Array</code>.\nAttempted to apply to types with mismatched sizez, e.g. a […\nA fixed-size list of reflected values.\nA dynamic representation of an enum.\nA list of reflected values.\nAn ordered mapping between reflected values.\nA struct type which allows fields to be added at runtime.\nA tuple which allows fields to be added at runtime.\nA tuple struct which allows fields to be added at runtime.\nDynamic dispatch for <code>TypePath</code>.\nA dynamic representation of an enum variant.\nA trait used to power enum-like operations via reflection.\nA container for compile-time enum info, used by <code>TypeInfo</code>.\nA name-based field access on a struct.\nA index-based field access on a struct.\nAn iterator over the field values of a struct.\nA trait that enables types to be dynamically constructed …\nDerives the <code>FromReflect</code> trait.\nTrait used to generate <code>TypeData</code> for trait reflection.\nA convenience trait which combines fetching and …\nA trait which allows nested <code>Reflect</code> values to be retrieved …\nA convenience trait which combines fetching and …\nA convenience trait which combines fetching and …\nA trait which allows a type to generate its …\nAn error that occurs when using an <code>Access</code> on the wrong …\nAn error that occurs when using an <code>Access</code> on the wrong …\nAn error caused by trying to access a path that’s not …\nAn error that occurs when a type cannot downcast to a …\nA trait used to power list-like operations via reflection.\nAn index-based access on a list.\nA container for compile-time list info.\nAn iterator over an <code>List</code>.\nA trait used to power map-like operations via reflection.\nA container for compile-time map info.\nAn iterator over the key-value pairs of a <code>Map</code>.\nAttempted to apply the wrong kind to a type, e.g. a struct …\nTried to apply incompatible types.\nEnum variant that we tried to apply to was missing a field.\nAn error that occurs when a certain type doesn’t contain …\nThe named field of a reflected struct.\nAn <code>Access</code> combined with an <code>offset</code> for more helpful error …\nAn error that occurs when parsing reflect path strings.\nAn error caused by an invalid path string that couldn’t …\nA pre-parsed path to an element within a type.\nThe core trait of <code>bevy_reflect</code>, used for accessing and …\nThe main derive macro used by <code>bevy_reflect</code> for deriving …\nA struct used to deserialize reflected instances of a type.\n<code>Reflect</code> values are commonly used in situations where the …\nType data that represents the <code>FromReflect</code> trait and allows …\nA zero-sized enumuration of the “kinds” of a reflected …\nA mutable enumeration of “kinds” of a reflected type.\nAn owned enumeration of “kinds” of a reflected type.\nSomething that can be interpreted as a reflection path in …\nAn error returned from a failed path string query.\nAn immutable enumeration of “kinds” of a reflected …\nA struct used to serialize reflected instances of a type.\nA trait used to power struct-like operations via reflection…\nStruct enums take the form:\nStruct enums take the form:\nA container for compile-time named struct info.\nType info for struct variants.\nA trait used to power tuple-like operations via reflection.\nTuple enums take the form:\nTuple enums take the form:\nAn iterator over the field values of a tuple.\nAn index-based access on a tuple.\nA container for compile-time tuple info.\nA trait used to power tuple struct-like operations via …\nAn iterator over the field values of a tuple struct.\nA container for compile-time tuple struct info.\nType info for tuple variants.\nA trait used to type-erase type metadata.\nCompile-time type information for various reflected types.\nA static accessor to type paths and names.\nDerives the <code>TypePath</code> trait, providing a stable alternative …\nProvides dynamic access to all methods on <code>TypePath</code>.\nRuntime storage for type metadata, registered into the …\nA registry of reflected types.\nA synchronized wrapper around a <code>TypeRegistry</code>.\nA static accessor to compile-time type information.\nUnit enums take the form:\nUnit enums take the form:\nType info for unit variants.\nThe enum we tried to apply to didn’t contain a variant …\nThe unnamed field of a reflected tuple or tuple struct.\nA container for compile-time info related to general value …\nAn iterator over the fields in the current enum variant.\nA container for compile-time enum variant info.\nDescribes the form of an enum variant.\nRepresentation for individual element accesses within a …\nThe returns the <code>Access</code> that this <code>AccessError</code> occurred in.\nThe <code>Access</code> itself.\nAttempts to register the type described by <code>registration</code>.\nApplies a reflected value to this value.\nApplies a reflected value to this value.\nApplies the reflected array data to the given array.\nThe default debug formatter for <code>Array</code> types.\nReturns the <code>u64</code> hash of the given array.\nCompares two arrays (one concrete and one reflected) to …\nTries to apply the reflected array data to the given array …\nReturns the value as a <code>&amp;dyn Any</code>.\nReturns the value as a <code>&amp;mut dyn Any</code>.\nCasts this type to a reflected value.\nConvert <code>Ptr</code> into <code>&amp;dyn Reflect</code>.\nCasts this type to a mutable reflected value.\nConvert <code>PtrMut</code> into <code>&amp;mut dyn Reflect</code>.\nThe compile-time capacity of the array.\nClones the map, producing a <code>DynamicMap</code>.\nClones the struct into a <code>DynamicStruct</code>.\nClones the struct into a <code>DynamicTuple</code>.\nClones the struct into a <code>DynamicTupleStruct</code>.\nClones the list, producing a <code>DynamicArray</code>.\nClones the list, producing a <code>DynamicArray</code>.\nClones the list, producing a <code>DynamicList</code>.\nClones the list, producing a <code>DynamicList</code>.\nClones the value as a <code>Reflect</code> trait object.\nChecks if a variant with the given name exists within this …\nReturns the name of the crate the type is in, or <code>None</code> if …\nReturns the name of the crate the type is in, or <code>None</code> if …\nSee <code>TypePath::crate_name</code>.\nReturns the custom attributes for this item.\nReturns the custom attributes for this item.\nReturns the custom attributes for this item.\nReturns the custom attributes for this item.\nReturns the custom attributes for this item.\nReturns the custom attributes for this variant.\nReturns the custom attributes for this item.\nReturns the custom attributes for this item.\nReturns the custom attributes for this item.\nReturns a reference to the value of type <code>T</code> in this …\nReturns a mutable reference to the value of type <code>T</code> in this …\nDebug formatter for the value.\nDebug formatter for the value.\nDeserializes a reflected value.\nReturns a boxed object from a boxed trait object if the …\nDowncasts the value to type <code>T</code>, consuming the trait object.\nReturns a mutable reference to the object within the trait …\nDowncasts the value to type <code>T</code> by mutable reference.\nReturns an <code>Rc</code>-ed object from an <code>Rc</code>-ed trait object if the …\nReturns a reference to the object within the trait object …\nDowncasts the value to type <code>T</code> by reference.\nDrain the elements of this array to get a vector of owned …\nDrain the elements of this list to get a vector of owned …\nDrain the key-value pairs of this map to get a vector of …\nDrain the fields of this tuple to get a vector of owned …\nGets a <code>&amp;T</code> to the specified element on the given <code>Reflect</code> …\nGets a <code>&amp;T</code> to the specified element on the given <code>Reflect</code> …\nGets a <code>&amp;mut T</code> to the specified element on the given <code>Reflect</code>…\nGets a <code>&amp;mut T</code> to the specified element on the given <code>Reflect</code>…\nCreate a type registry with <em>no</em> registered types.\nThe default debug formatter for <code>Enum</code> types.\nReturns the <code>u64</code> hash of the given enum.\nCompares an <code>Enum</code> with a <code>Reflect</code> value.\nReturns a reference to the value of the field named <code>name</code> …\nReturns a reference to the value of the field with index …\nReturns a reference to the value of the field with index …\nReturns a reference to the value of the field (in the …\nGet the field with the given name.\nGet the field with the given name.\nReturns a reference to the value of the field with index …\nReturns a reference to the value of the field (in the …\nGet the field at the given index.\nGet the field at the given index.\nGet the field at the given index.\nGet the field at the given index.\nGet the field at the given index.\nReturns a mutable reference to the value of the field with …\nReturns a mutable reference to the value of the field (in …\nReturns the number of fields in the struct.\nReturns the number of fields in the tuple.\nReturns the number of fields in the tuple struct.\nReturns the number of fields in the current variant.\nThe total number of fields in this struct.\nThe total number of fields in this tuple.\nThe total number of fields in this struct.\nThe total number of fields in this variant.\nThe total number of fields in this variant.\nReturns a mutable reference to the value of the field …\nReturns a mutable reference to the value of the field with …\nReturns a mutable reference to the value of the field with …\nReturns a mutable reference to the value of the field (in …\nA slice containing the names of all fields in order.\nA slice containing the names of all fields in order.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>DynamicEnum</code> from an existing one.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a function pointer to turn a <code>Ptr</code> into <code>&amp;dyn Reflect</code> for …\nGet a function pointer to turn a <code>PtrMut</code> into …\nCreate a <code>DynamicEnum</code> from an existing one.\nConstructs a concrete instance of <code>Self</code> from a reflected …\nPerform a <code>FromReflect::from_reflect</code> conversion on the …\nReturns a reference to the element at <code>index</code>, or <code>None</code> if …\nReturns a reference to the element at <code>index</code>, or <code>None</code> if …\nReturns a reference to the value associated with the given …\nReturns a reference to the <code>TypeRegistration</code> of the type …\nReturns the key-value pair at <code>index</code> by reference, or <code>None</code> …\nReturns the key-value pair at <code>index</code> by reference where the …\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by type.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nGets a custom attribute by its <code>TypeId</code>.\nReturns a reference to the value of the field named <code>name</code>, …\nReturns a reference to the value of the field with index …\nReturns a reference to the value of the field with index …\nReturns a mutable reference to the value of the field …\nReturns a mutable reference to the value of the field with …\nReturns a mutable reference to the value of the field with …\nReturns a mutable reference to the element at <code>index</code>, or …\nReturns a mutable reference to the element at <code>index</code>, or …\nReturns a mutable reference to the value associated with …\nReturns a mutable reference to the <code>TypeRegistration</code> of the …\nReturns the <code>TypeInfo</code> of the type <em>represented</em> by this value.\nTurn the value into a serializable representation\nReturns a reference to the <code>TypeData</code> of type <code>T</code> associated …\nReturns a mutable reference to the <code>TypeData</code> of type <code>T</code> …\nReturns the <code>TypeInfo</code> associated with the given <code>TypeId</code>.\nReturns the default <code>TypeRegistration</code> for this type.\nReturns a reference to the <code>TypeRegistration</code> of the type …\nReturns a mutable reference to the <code>TypeRegistration</code> of the …\nReturns a reference to the <code>TypeRegistration</code> of the type …\nReturns a mutable reference to the <code>TypeRegistration</code> of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this variant has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute of the …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this variant has a custom attribute with …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this item has a custom attribute with the …\nReturns <code>true</code> if this item has a custom attribute with the …\nSee <code>TypePath::type_ident</code>.\nA macro used to generate a <code>FromReflect</code> trait …\nA replacement for <code>#[derive(Reflect)]</code> to be used with …\nA macro used to generate reflection trait implementations …\nA replacement for deriving <code>TypePath</code> for use on foreign …\nReturns the index of the field.\nReturns the index of the field (in the current variant) …\nGet the index of the field with the given name.\nGets the index of the field with the given name.\nGet the index of the variant with the given name.\nGet the index of the field with the given name.\nInserts an element at position <code>index</code> within the list, …\nInserts an instance of <code>T</code> into this registration’s type …\nInserts a typed key-value pair into the map.\nInserts a field named <code>name</code> with the typed value <code>value</code> into …\nAppends a typed element with value <code>value</code> to the tuple.\nAppends a typed element with value <code>value</code> to the tuple …\nInserts a key-value pair into the map.\nInserts a field named <code>name</code> with value <code>value</code> into the …\nAppends an element with value <code>value</code> to the tuple.\nAppends an element with value <code>value</code> to the tuple struct.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the value as a <code>Box&lt;dyn Any&gt;</code>.\nCasts this type to a boxed reflected value.\nReturns true if the trait object wraps an object of type …\nCheck if the given type matches the array type.\nCheck if the given type matches the field type.\nCheck if the given type matches the field type.\nCheck if the given type matches the list type.\nCheck if the given type matches the map type.\nReturns <code>true</code> if the underlying value is of type <code>T</code>, or <code>false</code>\nCheck if the given type matches the struct type.\nCheck if the given type matches the tuple type.\nCheck if the given type matches the tuple struct type.\nCheck if the given type matches the underlying type.\nCheck if the given type matches the value type.\nCheck if the given type matches the enum type.\nReturns <code>true</code> if the given short type path is ambiguous, …\nIndicates whether or not this type is a <em>dynamic</em> type.\nIndicates whether or not this type is a <em>dynamic</em> type.\nReturns <code>true</code> if the collection contains no elements.\nReturns <code>true</code> if the collection contains no elements.\nReturns <code>true</code> if the collection contains no elements.\nReturns <code>true</code> if the collection contains no elements.\nReturns <code>true</code> if the list contains no elements.\nReturns <code>true</code> if the list contains no elements.\nReturns true if the current variant’s type matches the …\nReturns true if the current variant’s type matches the …\nCheck if the given type matches the array item type.\nCheck if the given type matches the list item type.\nThe <code>TypeId</code> of the array item.\nThe <code>TypeId</code> of the list item.\nA representation of the type path of the array item.\nA representation of the type path of the list item.\nReturns an iterator over the array.\nReturns an iterator over the list.\nReturns an iterator over the key-value pairs of the map.\nReturns an iterator over the <code>TypeRegistration</code>s of the …\nIterate over the fields of this struct.\nIterate over the fields of this tuple.\nIterate over the fields of this struct.\nIterate over the variants of this enum.\nIterate over the fields of this variant.\nIterate over the fields of this variant.\nReturns an iterator over the values of the reflectable …\nReturns an iterator over the values of the tuple’s …\nReturns an iterator over the values of the tuple struct’…\nReturns an iterator over the values of the current variant…\nReturns a mutable iterator over the <code>TypeRegistration</code>s of …\nChecks to see if the <code>TypeData</code> of type <code>T</code> is associated with …\nCheck if the given type matches the key type.\nThe <code>TypeId</code> of the key.\nA representation of the type path of the key type.\nReturns the “kind” of this reflected type without any …\nReturns the “kind” of this reflected type without any …\nReturns the “kind” of this reflected type without any …\nReturns the kind of <code>AccessError</code>.\nReturns the number of elements in the array.\nReturns the number of elements in the list.\nReturns the number of elements in the map.\nApplies the elements of <code>b</code> to the corresponding elements of …\nThe default debug formatter for <code>List</code> types.\nReturns the <code>u64</code> hash of the given list.\nCompares a <code>List</code> with a <code>Reflect</code> value.\nTries to apply the elements of <code>b</code> to the corresponding …\nApplies the elements of reflected map <code>b</code> to the …\nThe default debug formatter for <code>Map</code> types.\nCompares a <code>Map</code> with a <code>Reflect</code> value.\nTries to apply the elements of reflected map <code>b</code> to the …\nReturns the path to the module the type is in, or <code>None</code> if …\nReturns the path to the module the type is in, or <code>None</code> if …\nSee <code>TypePath::module_path</code>.\nThe name of the field.\nThe name of this variant.\nThe name of this variant.\nThe name of this variant.\nReturns the name of the field with index <code>index</code>.\nReturns the name of the field (in the current variant) …\nCreates a new <code>ArrayIter</code>.\nCreates a new <code>ListIter</code>.\nCreates a new <code>MapIter</code>.\nCreate a type registry with default registrations for …\nCreate a new <code>ArrayInfo</code>.\nCreate a new <code>NamedField</code>.\nCreate a new <code>ListInfo</code>.\nCreate a new <code>MapInfo</code>.\nCreate a new <code>StructInfo</code>.\nCreate a new <code>TupleInfo</code>.\nCreate a new <code>TupleStructInfo</code>.\nCreate a new <code>DynamicEnum</code> to represent an enum at runtime.\nCreate a new <code>EnumInfo</code>.\nCreate a new <code>StructVariantInfo</code>.\nCreate a new <code>TupleVariantInfo</code>.\nCreate a new <code>UnitVariantInfo</code>.\nCreate a new <code>DynamicEnum</code> with a variant index to represent …\nCreates type registration information for <code>T</code>.\nCreates a new table from a type.\nIf the <code>Access</code> was created with a parser or an offset was …\nA character offset in the string the path was parsed from.\nRegisters the type described by <code>registration</code>.\nParses a <code>ParsedPath</code> from a string.\nSimilar to <code>Self::parse</code> but only works on <code>&amp;&#39;static str</code> and …\nReturns a statically typed reference to the value …\nReturns a statically typed reference to the value …\nSee <code>TypePath::type_path</code>.\nReturns a statically typed mutable reference to the value …\nReturns a statically typed mutable reference to the value …\nRemoves the <em>back</em> element from the list and returns it, or …\nRemoves the <em>back</em> element from the list and returns it, or …\nAppends an element to the <em>back</em> of the list.\nAppends an element to the <em>back</em> of the list.\nAppends a typed value to the list.\nAppends a <code>Reflect</code> trait object to the list.\nTakes a read lock on the underlying <code>TypeRegistry</code>.\nSee <code>TypePath::crate_name</code>.\nGets a reference to the specified element on the given …\nGets a mutable reference to the specified element on the …\nReturns a hash of the value (which includes the type).\nReturns a hash of the value (which includes the type).\nReturns a zero-sized enumeration of “kinds” of type.\nReturns a zero-sized enumeration of “kinds” of type.\nSee <code>TypePath::module_path</code>.\nReturns a mutable enumeration of “kinds” of type.\nReturns an owned enumeration of “kinds” of type.\nReturns a “partial equality” comparison result.\nReturns a “partial equality” comparison result.\nReturns a reference to the value specified by <code>path</code>.\nReturns a reference to the value specified by <code>path</code>.\nReturns a mutable reference to the value specified by <code>path</code>.\nReturns a mutable reference to the value specified by <code>path</code>.\nReturns an immutable enumeration of “kinds” of type.\nSee <code>TypePath::short_type_path</code>.\nA macro that automatically generates type data for traits, …\nSee <code>TypePath::type_ident</code>.\nSee <code>TypePath::type_path</code>.\nAttempts to register the type <code>T</code> if it has not yet been …\nRegisters the type data <code>D</code> for type <code>T</code>.\nRegisters other types needed by this type.\nRegisters other types needed by this type.\nRemoves and returns the element at position <code>index</code> within …\nRemoves an entry from the map.\nReturns <code>true</code> if the underlying value represents a value of …\nReturns a serializable version of the value.\nReturns a serializable version of the value.\nPerforms a type-checked assignment of a reflected value to …\nSets the type to be represented by this <code>DynamicArray</code>.\nSets the type to be represented by this <code>DynamicList</code>.\nSets the type to be represented by this <code>DynamicMap</code>.\nSets the type to be represented by this <code>DynamicStruct</code>.\nSets the type to be represented by this <code>DynamicTuple</code>.\nSets the type to be represented by this <code>DynamicTupleStruct</code>.\nSets the type to be represented by this <code>DynamicEnum</code>.\nSet the current enum variant represented by this struct.\nSet the current enum variant represented by this struct …\nSee <code>TypePath::short_type_path</code>.\nReturns a short, pretty-print enabled path to the type.\nThe default debug formatter for <code>Struct</code> types.\nCompares a <code>Struct</code> with a <code>Reflect</code> value.\nDowncasts the value to type <code>T</code>, unboxing and consuming the …\nAttempts to downcast the given value to <code>Self</code> using, …\nAttempts to downcast the given value to <code>Self</code> using, …\nTries to <code>apply</code> a reflected value to this value.\nApplies the elements of <code>b</code> to the corresponding elements of …\nThe default debug formatter for <code>Tuple</code> types.\nCompares a <code>Tuple</code> with a <code>Reflect</code> value.\nThe default debug formatter for <code>TupleStruct</code> types.\nCompares a <code>TupleStruct</code> with a <code>Reflect</code> value.\nTries to apply the elements of <code>b</code> to the corresponding …\nReturns the <code>TypeId</code> of the type.\nThe <code>TypeId</code> of the array.\nThe <code>TypeId</code> of the field.\nThe <code>TypeId</code> of the field.\nThe <code>TypeId</code> of the list.\nThe <code>TypeId</code> of the map.\nThe <code>TypeId</code> of the struct.\nThe <code>TypeId</code> of the tuple.\nThe <code>TypeId</code> of the tuple struct.\nThe <code>TypeId</code> of the underlying type.\nThe <code>TypeId</code> of the value.\nReturns the <code>TypeId</code> that the <code>ReflectFromPtr</code> was constructed …\nThe <code>TypeId</code> of the enum.\nReturns the name of the type, or <code>None</code> if it is anonymous.\nReturns the name of the type, or <code>None</code> if it is anonymous.\nReturns the compile-time info for the underlying type.\nReturns a reference to the registration’s <code>TypeInfo</code>\nReturns the fully qualified path of the underlying type.\nThe stable, full type path of the array.\nThe stable, full type path of the field.\nThe stable, full type path of the field.\nThe stable, full type path of the list.\nThe stable, full type path of the map.\nThe stable, full type path of the struct.\nThe stable, full type path of the tuple.\nThe stable, full type path of the struct.\nThe stable, full type path of the underlying type.\nThe stable, full type path of the value.\nThe stable, full type path of the value.\nA representation of the type path of the array.\nA representation of the type path of the field.\nA representation of the type path of the field.\nA representation of the type path of the list.\nA representation of the type path of the map.\nA representation of the type path of the struct.\nA representation of the type path of the tuple.\nA representation of the type path of the struct.\nA representation of the type path of the underlying type.\nA representation of the type path of the value.\nA representation of the type path of the value.\nHelpers for working with Bevy reflection.\nCheck if the given type matches the value type.\nThe <code>TypeId</code> of the value.\nA representation of the type path of the value type.\nGet a variant with the given name.\nGet a variant at the given index.\nThe index of the current variant.\nThe number of variants in this enum.\nThe name of the current variant.\nA slice containing the names of all variants in order.\nReturns the full path to the current variant.\nReturns the full path to the current variant.\nReturns the full path to the given variant.\nThe type of the current variant.\nSets the custom attributes for this field.\nSets the custom attributes for this field.\nSets the custom attributes for this struct.\nSets the custom attributes for this struct.\nSets the custom attributes for this enum.\nSets the custom attributes for this variant.\nSets the custom attributes for this variant.\nSets the custom attributes for this variant.\nTakes a write lock on the underlying <code>TypeRegistry</code>.\nThe actual <code>ReflectKind</code> that was found.\nThe actual <code>VariantType</code> that was found.\nThe <code>ReflectKind</code> that was expected based on the <code>Access</code>.\nThe <code>VariantType</code> that was expected based on the <code>Access</code>.\nThe underlying error.\nPosition in <code>path</code>.\nThe path that the error occurred in.\nA singular element access within a path. Multiple accesses …\nA name-based field access on a struct.\nA index-based field access on a struct.\nAn index-based access on a list.\nAn index-based access on a tuple.\nReturns a reference to this <code>Access</code>’s inner value as a …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConverts this into an “owned” value.\nA collection of custom attributes for a type, field, or …\nReturns <code>true</code> if this collection contains a custom …\nReturns <code>true</code> if this collection contains a custom …\nReturns the argument unchanged.\nGets a custom attribute by type.\nGets a custom attribute by its <code>TypeId</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this collection is empty.\nReturns an iterator over all custom attributes.\nReturns the number of custom attributes in this collection.\nInserts a custom attribute into the collection.\nA general purpose deserializer for reflected types.\nA general purpose serializer for reflected types.\nContains data relevant to the automatic reflect powered …\nData needed for (de)serialization of a skipped field.\nA deserializer for type registrations.\nA deserializer for reflected types whose <code>TypeRegistration</code> …\nA serializer for reflected types whose type will be known …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerates a default instance of the skipped field at the …\nGenerates a default instance of the field.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if there are no skipped fields.\nReturns true if the given index corresponds to a field …\nReturns an iterator over the skipped fields.\nReturns the number of skipped fields.\nCreates a new <code>SerializationData</code> instance with the given …\nCreate a new <code>SkippedField</code>.\nA struct used to provide the default value of a type.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA container for <code>TypedProperty</code> over generic types, allowing …\nSee <code>GenericTypeCell</code>.\nSee <code>GenericTypeCell</code>.\nA container for <code>TypeInfo</code> over non-generic types, allowing …\nSee <code>NonGenericTypeCell</code>.\nUsed to store a <code>String</code> in a <code>GenericTypePathCell</code> as part of …\nA type that can be stored in a (<code>Non</code>)<code>GenericTypeCell</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the <code>TypedProperty</code> stored in the …\nReturns a reference to the <code>TypedProperty</code> stored in the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInitialize a <code>NonGenericTypeCell</code> for non-generic types.\nInitialize a <code>GenericTypeCell</code> for generic types.\nDeterministic fixed state hasher to be used by …")