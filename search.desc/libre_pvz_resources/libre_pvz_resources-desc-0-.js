searchState.loadedDescShard("libre_pvz_resources", 0, "librePvZ-resources: resource loading logics for librePvZ.\nResources plugin group.\nSprite and animation API.\nGenerate proper values for <code>AssetExtensions</code>. Always prefer …\nGenerate <code>StateIndex</code> and <code>StateIndex::cache</code> for cached known …\nSerialize and deserialize as some kind of raw form (a …\nDynamic resource support. For simplicity, we use shared …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nLoaders for <code>bincode</code>, JSON, and YAML files. These files can …\nMark a trait available for dynamic (de)serialization.\nModels incorporating animations.\nKey frame action.\nChange alpha (transparency).\nAnimations, originally in <code>.reanim</code> format.\nAnimation and all its dependency images.\nResources plugin.\nElement on the stage. Only one element is allowed on a …\nKey frame: show and transform elements. Transformations …\nImage element.\nLoad an element to replace the current one on the stage.\nMeta data for animations.\n2D vectors.\nChange the rotation.\nChange the scaling.\nShow or hide the element.\nText element.\nA series of frames to play consecutively.\nChange the translation.\nAccumulate the actions until some frame.\nOptics for <code>Action</code>.\nAnimation clip for the <code>Meta</code> at some index.\nthe <code>AnimationClip</code> generated from description.\nthe animation description.\n(inclusive) End of the frame range this meta data covers.\nFrames per second.\nFrame list, grouped into segments internally.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a meta track by name.\nGet an iterator of all the image file names in this …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMeta data for this animation.\nName of this meta data.\nTrack name for internal recognition.\nSpawn an animation.\nSpawn an animation, ignore internal entities.\n(inclusive) Start of the frame range this meta data covers.\nAnimation tracks.\nFont name.\nImage name.\nText content to display. Characters not in the font are …\nPrism for <code>Action::Alpha</code>.\nPrism for <code>Action::LoadElement</code>.\nPrism for <code>Action::Rotation</code>.\nPrism for <code>Action::Scale</code>.\nPrism for <code>Action::Show</code>.\nPrism for <code>Action::Translation</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRaw key storage with cached handle.\nContainer of key-value pairs, equipped with a handle type …\nEntries in linear homogeneous collections.\nKey for fast lookup: indices into arrays, <code>Handle</code>s in Bevy, …\nKey type of this entry.\nKey type, the actual key for entries in the container.\nRaw key storage with cached handle.\nValue type, usually the entries in the container.\nGet as an <code>AssetPath</code> for use in the asset manager.\nCached shortcut version for this key.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the asset managed by Bevy.\nAccess the values in the container by handle. Should be a …\nGet the handle for the specific key, for access and for …\nGet handle from a container, and cache the handle for …\nGet handle from a container, and cache the handle for …\nGet a mutable borrow of the asset managed by Bevy.\nGet from a container, and cache the handle for shortcut. …\nGet the transition index for the given trigger. Optimized …\nInitialise and cache the handle. Panics if called more …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the key in this entry.\nCreate a new <code>Cached</code> key.\nRaw key to be serialized to the storage.\nResource types with dynamic (de)serialization. …\nType registry for dynamic content (de)serialization.\nResource, but without a statically-known type.\nAllow dynamic (de)serialization for trait objects.\nReadable name for this type of trait objects as dynamic …\n<code>TypeData</code> providing support for <code>AnyResource</code> trait.\nConvert to a <code>Reflect</code> trait object.\nConvert to a mutable <code>Reflect</code> trait object.\nDecode as <code>bincode</code> from a given <code>Reader</code> using standard …\nDeserialize using <code>bincode</code> into a trait object.\nDeserialize from an <code>erased</code> deserializer.\nDeserialize using <code>serde</code> into a trait object.\nEncode as <code>bincode</code> to a given <code>Writer</code> using standard …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTry to downcast a <code>&amp;dyn Reflect</code> type to <code>&amp;dyn AnyResource</code>.\nGet a shared reference to Bevy’s type registry (already …\nTry to downcast a <code>Box&lt;dyn Reflect&gt;</code> type to …\nTry to downcast a <code>&amp;mut dyn Reflect</code> type to …\nGet the global dynamic registry. Panics if called before …\nInitialize the global dynamic registry. This saves the […\nInitialize the global dynamic registry, without a Bevy app.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRegister a type for dynamic (de)serialization.\nGet the <code>ReflectAnyResource</code> for the type registered as the …\nTry convert from a fully-erased dynamic resource to this …\nExtension to the <code>App</code> API for adding two-stage asset …\nFile extensions for two-stage assets. See also <code>asset_ext</code>.\nFrontend asset format.\n<code>bincode</code> format.\nThe file extensions this asset is associated to.\nJSON format.\nThe decoded representation for this asset.\nList of <code>str</code>, with static lifetime all the way down.\nA new trait for two-stage asset loading, in place of …\nAsset loader for <code>TwoStageAsset</code>s.\nYAML format.\nRegister a two-stage asset to the app.\nFile extensions for JSON file storage, e.g., <code>[&quot;anim.bin&quot;]</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the extensions list.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFile extensions for JSON file storage, e.g., <code>[&quot;anim.json&quot;]</code>.\nProcesses the asset in an asynchronous closure.\nLoad from raw bytes to intermediate representation.\nThe post-processing logic: transform the <code>Repr</code> to a more …\nFile extensions for YAML file storage, e.g., …\nAttachment, useful for separating different movable parts …\nAutomatically apply the <code>None</code> trigger for the respective …\nCool down component for state transitions.\nTicks the cool down timers, systems relying on <code>CoolDown</code> …\nRegistry for marker components.\nExtend the <code>App</code> for registering marker components.\nModel: animation together with its association.\nModel plugin.\nKeep track of the current state of the model.\nLabels for model-related systems.\nPlant meta information.\nState controls the appearance and behaviours.\nTransition from one state to another.\n<code>ModelState</code> transition events.\nShows animation for state transitions; responds to …\nRequest to trigger a <code>ModelState</code> transition.\nResponds to <code>TransitionTrigger</code> events, systems writing such …\nAnimation, the all-in-one source.\nAttach the marker with the given name to the specified …\nAttachment models.\nDuration in seconds for the blending.\nBreadth, number of grids taken by this plant, along the Y …\nThe model to be attached.\nCool down time before any state transition can happen.\nCool down time before this state transition can happen. If …\nCurrent state index into <code>Model::states</code>.\nDefault state, or start-up state.\nDestination for this transition.\nOverride the frame rate in this state. <code>None</code> for using the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThese tracks should be hidden in this model.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMarker components for instances of this model.\nGet the parent model of this model state.\nModel of this plant.\nName of this state.\nNormally, if the current state does not recognize the …\nPrevious state index into <code>Model::states</code>.\nAre we already cooled down enough for this action? If …\nRegister a marker component in the global registry.\nRegister a marker component in this registry.\nSpawn an instance of this model using the given command …\nThis state correspond to this meta range in the animation.\nState machine for this model. Sorted by name.\nThe trigger will try to take effect on this <code>Entity</code>.\nThe entity on which this state transition happened.\nTarget track to which this model is attached.\nIndex of the transition it took to reach the current state.\nTransitions leaving this state.\nTriggering condition for this transition. <code>None</code> means this …\nThe trigger, as specified in <code>StateTransition::trigger</code>.\nProduce the specified trigger if the cool down is ready.\nProduce the <code>None</code> trigger if the cool down is ready and the …\nWidth, number of grids taken by this plant, along the X …")