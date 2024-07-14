searchState.loadedDescShard("alsa", 0, "Thin but safe wrappers for ALSA.\nRound up (towards positive infinity)\nReplaces constants ending with PLAYBACK/CAPTURE as well as …\nContains the error value\nALSA error\nRound down (towards negative infinity)\nThe value set is the submitted value, or greater\nThe value set is the submitted value, or less\nThe value set is the submitted value, or the nearest\nContains the success value\nsnd_output_t wrapper\nRounding mode (used in some mixer related calls)\nUsed to restrict hw parameters. In case the submitted …\nSound card enumeration\nControl device API\nEnumerate devices in the alsa library configuration\nFunctions that bypass alsa-lib and talk directly to the …\nUnderlying error\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe function which failed.\nHCtl API - for mixer control and jack detection\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMixer API - Simple Mixer API for mixer control\nAudio playback and capture\nTiny poll ffi\nMIDI devices I/O and enumeration\nMIDI sequencer I/O and enumeration\nAn ALSA sound card, uniquely identified by its index.\nIterate over existing sound cards.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nsnd_ctl_card_info_t wrapper\nsnd_ctl_t wrapper\nsnd_ctl_pcm_next_device wrapper. Iterate over devices of a …\nsnd_ctl_elem_id_t wrapper\nSND_CTL_ELEM_IFACE_xxx constants\nsnd_ctl_elem_info_t wrapper\nSND_CTL_ELEM_TYPE_xxx constants\nsnd_ctl_elem_value_t wrapper\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWrapper around open that takes a &amp;str instead of a &amp;CStr\nCreates a new ElemValue.\nCreates a new ElemId.\nOpen does not support async mode (it’s not very Rustic …\nNote: According to alsa-lib documentation, you’re also …\nsnd_device_name_get_hint wrapper\nsnd_device_name_hint wrapper\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\ntypical interfaces are: “pcm”, “ctl”, “rawmidi”…\nA constructor variant that takes the interface as a Rust …\nThis module bypasses alsa-lib and directly read and write …\nDummy struct for better generics\nIterator over captured samples\nWrite PCM appl ptr directly, bypassing alsa-lib.\nDummy trait for better generics\nStruct containing direct I/O functions shared between …\nDummy struct for better generics\nA raw pointer to samples, and the amount of samples …\nRead PCM status directly from memory, bypassing alsa-lib.\nRead PCM status via a simple kernel syscall, bypassing …\nRead number of frames application has read or written\nRead current number of frames committed by application\nAudio timestamp - fast version of alsa-lib’s …\nNumber of frames available to read / write.\nRead minimum number of frames in buffer in order to wakeup …\nThe number at which hw_ptr and appl_ptr wraps.\nTotal number of frames in hardware buffer\nNumber of channels in stream\nNotifies the kernel that frames have now been read / …\nReturns raw pointers to data to read / write.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTimestamp - fast version of alsa-lib’s …\nNumber of frames hardware has read or written\nRead current number of frames read / written by hardware\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRead samples from the kernel ringbuffer.\nRead samples from the kernel ringbuffer.\nReturns <code>frames</code> * <code>channels</code>, i e the amount of samples (of …\nSet number of frames application has read or written\nWrite minimum number of frames in buffer in order to …\nCurrent PCM state.\nRead current status\nExecutes sync_ptr syscall.\nWrite samples to the kernel ringbuffer.\nWrite samples to the kernel ringbuffer.\nWrites samples from an iterator.\nsnd_hctl_elem_t wrapper\nIterates over elements for a <code>HCtl</code>\nsnd_hctl_t wrapper\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWrapper around open. You probably want to call <code>load</code> …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWrapper around open that takes a &amp;str instead of a &amp;CStr\nOpen does not support async mode (it’s not very Rustic …\nWraps snd_mixer_elem_t\nIterator for all elements of mixer\nWrapper for a mB (millibel) value.\nwraps snd_mixer_t\nWraps an Elem as a Selem\nWrapper for SND_MIXER_SCHN_* constants\nWrapper for snd_mixer_selem_id_t No allocation (uses fixed …\nReturns a slice of all possible values; useful for …\nAsks alsa to convert capture volume to millibels\nAsks alsa to convert playback volume to millibels.\nGets name from snd_mixer_selem_channel_name\nreturns the elem of this selem\nReturns an empty (zeroed) SelemId. This id is not a usable …\nCreates a Selem by looking for a specific selem by name …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nreturns (min, max) values.\nreturns volume in millibels.\nreturns range for capture volume as (min, max) values\nreturns (min, max) values.\nreturns volume in millibels.\nreturns (min, max) values.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEnumerates over valid Enum values\nCreates a Selem by wrapping <code>elem</code>.\nOpens a mixer and attaches it to a card identified by its …\nTODO: This function might change to support regopt and to …\nSND_PCM_ACCESS_xxx constants\nSND_PCM_AUDIO_TSTAMP_TYPE_xxx constants\nsnd_pcm_chmap_t wrapper\nSND_CHMAP_xxx constants\nSND_CHMAP_TYPE_xxx constants\nIterator over available channel maps - see …\nSND_PCM_FORMAT_xxx constants\nsnd_pcm_sframes_t\nsnd_pcm_hw_params_t wrapper\nSample format dependent struct for reading from and …\nsnd_pcm_info_t wrapper - PCM generic info container\nsnd_pcm_t wrapper - start here for audio playback and …\nSND_PCM_STATE_xxx constants\nsnd_pcm_status_t wrapper\nBuilder for <code>Status</code>.\nsnd_pcm_sw_params_t wrapper\nSND_PCM_TSTAMP_TYPE_xxx constants\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns a slice of all possible values; useful for …\nReturns true if the alsa stream can be paused, false if …\nReturns true if the alsa stream can be resumed, false if …\nRead buffers by talking to the kernel directly, bypassing …\nWrite buffers by talking to the kernel directly, bypassing …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWraps <code>snd_pcm_get_params</code>, returns …\nSets hw parameters. Note: No IO object can exist for this …\nRetreive current PCM hardware configuration.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates IO without checking [<code>S</code>] is valid type.\nWrapper around snd_pcm_mmap_begin and snd_pcm_mmap_commit.\nWrapper around open that takes a &amp;str instead of a &amp;CStr\nOn success, returns number of <em>frames</em> read. (Multiply with …\nOnly used internally, and for debugging the alsa library. …\nReturns true if the alsa stream supports the provided …\nWrapper around snd_pcm_recover.\nOn success, returns number of <em>frames</em> written. (Multiply …\nGet a flags value with all known bits set.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nWrapper around count and fill - returns an array of pollfds\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWrapper around the libc poll call.\nBuilds a pollfd array, polls it, and returns the poll …\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nImplements <code>std::io::Read</code> and <code>std::io::Write</code> for <code>Rawmidi</code>\nsnd_rawmidi_info_t wrapper\nIterator over Rawmidi devices and subdevices\nsnd_rawmidi_t wrapper\nsnd_rawmidi_info_t wrapper\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWrapper around open that takes a &amp;str instead of a &amp;CStr\nsnd_seq_addr_t wrapper\nsnd_seq_client_info_t wrapper\nIterates over clients connected to the seq API (both …\nsnd_seq_connect_t wrapper\nsnd_seq_ev_queue_control_t wrapper\nsnd_seq_result_t wrapper\nsnd_seq_event_t wrapper\nInternal trait implemented for different event type …\nSND_SEQ_EVENT_xxx constants\nStruct for receiving input events from a sequencer. The …\nsnd_midi_event_t Wrapper\nSND_SEQ_PORT_CAP_xxx constants\nsnd_seq_port_info_t wrapper\nIterates over clients connected to the seq API (both …\nsnd_seq_port_subscribe_t wrapper\nIterates over port subscriptions for a given …\nSND_SEQ_PORT_TYPE_xxx constants\nsnd_seq_query_subs_type_t wrapper\nsnd_seq_queue_status_t wrapper\nsnd_seq_queue_tempo_t wrapper\nSND_SEQ_REMOVE_xxx constants\nsnd_seq_remove_events_t wrapper\nsnd_seq_t wrapper\nReturns an Addr containing this PortInfo’s client and …\nGet a flags value with all known bits set.\nGet a flags value with all known bits set.\nGet a flags value with all known bits set.\nReturns a slice of all possible values; useful for …\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nGet the underlying bits value.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nWhether all set bits in a source flags value are also set …\nWhether all set bits in a source flags value are also set …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nCreates a new PortInfo with all fields set to zero.\nCreates a new PortSubscribe with all fields set to zero.\nCreates a new QueueTempo with all fields set to zero.\nCreates a new QueueStatus with all fields set to zero.\nGet a flags value with all bits unset.\nGet a flags value with all bits unset.\nGet a flags value with all bits unset.\nNote: this corresponds to snd_midi_event_no_status, but on …\nIn case of success, returns a tuple of (bytes consumed …\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value exactly.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nConvert from a bits value, unsetting any unknown bits.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nGet a flags value with the bits of a flag with the given …\nGet a flags value with the bits of a flag with the given …\nExtract the event data from an event. Use <code>get_ext</code> instead …\nExtract the variable-length data carried by events of type …\nReturns true if the message is high priority.\nResets both encoder and decoder\nCall this function to obtain an instance of <code>Input</code> to …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nWhether any set bits in a source flags value are also set …\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes this event and returns an (otherwise unchanged) …\nWhether all known bits in this flags value are set.\nWhether all known bits in this flags value are set.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nWhether all bits in this flags value are unset.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained flags values.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nYield a set of contained named flags values.\nYield a set of contained named flags values.\nCreates a new event. For events that carry variable-length …\nCreates a new event carrying variable-length data. This is …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nOpens the sequencer.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.")