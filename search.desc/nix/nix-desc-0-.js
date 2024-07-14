searchState.loadedDescShard("nix", 0, "Rust friendly bindings to the various *nix system …\nContains the error value\nNix’s main error type.\nCommon trait used to represent file system paths by many …\nContains the success value\nNix Result Type\nSafe wrappers around errno functions\nfile control options\nGenerates a wrapper function for an ioctl that passes no …\nGenerates a wrapper function for a “bad” ioctl that …\nGenerates a wrapper function for an ioctl that reads data …\nGenerates a wrapper function for a “bad” ioctl that …\nGenerates a wrapper function for an ioctl that reads an …\nGenerates a wrapper function for an ioctl that reads and …\nGenerates a wrapper function for a “bad” ioctl that …\nGenerates a wrapper function for an ioctl that reads and …\nGenerates a wrapper function for an ioctl that writes an …\nGenerates a wrapper function for a ioctl that writes an …\nGenerates a wrapper function for a “bad” ioctl that …\nGenerates a wrapper function for an ioctl that writes data …\nGenerates a wrapper function for a “bad” ioctl that …\nIs the path empty?\nLength of the path in bytes\nGenerate an ioctl request code for a command that passes …\nGenerate an ioctl request code for a command that reads.\nGenerate an ioctl request code for a command that reads …\nGenerate an ioctl request code for a command that writes.\nMostly platform-specific functionality\nSafe wrappers around functions found in libc “unistd.h”…\nExecute a function with this path as a <code>CStr</code>.\nThe sentinel value indicates that a function failed and …\nSets the platform-specific errno to no-error\nReturns the platform-specific value of errno\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the current value of errno\nReturns the current raw i32 value of errno\nReturns <code>Ok(value)</code> if it does not contain the sentinel …\nSets the value of errno.\nSets the raw i32 value of errno.\nProvide helpers for making ioctl system calls.\nOperating system signals.\nA safe wrapper around <code>epoll</code>.\nPollTimeout argument for polling.\nBlocks for at most <code>i32::MAX</code> milliseconds.\nBlocks indefinitely.\nReturns immediately.\nAdd an entry to the interest list of the epoll file …\nGet a flags value with all known bits set.\nGet a flags value with all known bits set.\nReturns the timeout in milliseconds if there is some, …\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nWhether all set bits in a source flags value are also set …\nRemove (deregister) the target file descriptor <code>fd</code> from the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nReturns the timeout as a <code>Duration</code> if there is some, …\nGet a flags value with all bits unset.\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nGet a flags value with the bits of a flag with the given …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nWhether all bits in this flags value are unset.\nReturns if <code>self</code> equals <code>PollTimeout::NONE</code>.\nReturns if <code>self</code> does not equal <code>PollTimeout::NONE</code>.\nYield a set of contained flags values.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nYield a set of contained named flags values.\nChange the settings associated with <code>fd</code> in the interest …\nCreates a new epoll instance and returns a file descriptor …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nWaits for I/O events, blocking the calling thread if no …\nGet a flags value with all known bits set.\nArms <code>self</code>, a following call to <code>poll</code>, <code>select</code> or <code>epoll</code> will …\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nDefuses <code>self</code>, a following call to <code>poll</code>, <code>select</code> or <code>epoll</code> …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\n<code>EventFd::from_value_and_flags</code> with <code>init_val = 0</code> and given …\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\n<code>EventFd::from_value_and_flags</code> with given <code>init_val</code> and …\nConstructs <code>EventFd</code> with the given <code>init_val</code> and <code>flags</code>.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\n<code>EventFd::from_value_and_flags</code> with <code>init_val = 0</code> and …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nEnqueues <code>value</code> triggers.\nGenerate an ioctl request code for a command that passes …\nGenerate an ioctl request code for a command that reads.\nGenerate an ioctl request code for a command that reads …\nGenerate an ioctl request code for a command that writes.\nSystem info structure returned by <code>sysinfo</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the load average tuple.\nCurrent number of processes.\nReturns the total amount of installed RAM in Bytes.\nReturns the amount of completely unused RAM in Bytes.\nReturns the amount of unused swap memory in Bytes.\nReturns the amount of swap memory in Bytes.\nReturns system information.\nReturns the time since system boot.\nUpdate the timestamp to <code>Now</code>\nLeave the timestamp unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMakes a new <code>TimeSpec</code> with given number of microseconds.\nMakes a new <code>TimeVal</code> with given number of microseconds.\nMakes a new <code>TimeSpec</code> with given number of nanoseconds.\nMakes a new <code>TimeVal</code> with given number of nanoseconds.  …\nConstruct a new <code>TimeSpec</code> from its components\nConstruct a new <code>TimeVal</code> from its components\nClose a raw file descriptor\nCreate an interprocess channel.\nRead from a raw file descriptor.\nSuspend execution for an interval of time\nWrite to a raw file descriptor.")