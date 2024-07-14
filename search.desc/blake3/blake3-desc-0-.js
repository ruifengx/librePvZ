searchState.loadedDescShard("blake3", 0, "The official Rust implementation of the BLAKE3 …\nAn output of the default size, 32 bytes, which provides …\nAn incremental hash state that can accept any number of …\nThe error type for <code>Hash::from_hex</code>.\nThe number of bytes in a key, 32.\nThe number of bytes in a <code>Hash</code>, 32.\nAn incremental reader for extended output, returned by …\nThe raw bytes of the <code>Hash</code>. Note that byte arrays don’t …\nReturn the total number of bytes hashed so far.\nThe key derivation function.\nFill a buffer with output bytes and advance the position …\nFinalize the hash state and return the <code>Hash</code> of the input.\nFinalize the hash state and return an <code>OutputReader</code>, which …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>Hash</code> from its raw bytes representation.\nDecode a <code>Hash</code> from hexadecimal. Both uppercase and …\nThe default hash function.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe keyed hash function.\nConstruct a new <code>Hasher</code> for the regular hash function.\nConstruct a new <code>Hasher</code> for the key derivation function. See\nConstruct a new <code>Hasher</code> for the keyed hash function. See …\nReturn the current read position in the output stream. …\nReset the <code>Hasher</code> to its initial state.\nSeek to a new read position in the output stream. This is …\nEncode a <code>Hash</code> in lowercase hexadecimal.\nAdd input bytes to the hash state. You can call this any …\nAs <code>update</code>, but reading from a <code>std::io::Read</code> implementation.\nThis is equivalent to <code>update</code>.")