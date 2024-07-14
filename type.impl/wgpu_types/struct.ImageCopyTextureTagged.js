(function() {var type_impls = {
"wgpu_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ImageCopyTextureTagged%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6675\">source</a><a href=\"#impl-Clone-for-ImageCopyTextureTagged%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTextureTagged.html\" title=\"struct wgpu_types::ImageCopyTextureTagged\">ImageCopyTextureTagged</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6675\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTextureTagged.html\" title=\"struct wgpu_types::ImageCopyTextureTagged\">ImageCopyTextureTagged</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu_core::command::transfer::ImageCopyTextureTagged"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ImageCopyTextureTagged%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6675\">source</a><a href=\"#impl-Debug-for-ImageCopyTextureTagged%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTextureTagged.html\" title=\"struct wgpu_types::ImageCopyTextureTagged\">ImageCopyTextureTagged</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6675\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu_core::command::transfer::ImageCopyTextureTagged"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ImageCopyTextureTagged%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6692\">source</a><a href=\"#impl-ImageCopyTextureTagged%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTextureTagged.html\" title=\"struct wgpu_types::ImageCopyTextureTagged\">ImageCopyTextureTagged</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_untagged\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6694\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu_types/struct.ImageCopyTextureTagged.html#tymethod.to_untagged\" class=\"fn\">to_untagged</a>(self) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTexture.html\" title=\"struct wgpu_types::ImageCopyTexture\">ImageCopyTexture</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Removes the colorspace information from the type.</p>\n</div></details></div></details>",0,"wgpu_core::command::transfer::ImageCopyTextureTagged"],["<section id=\"impl-Copy-for-ImageCopyTextureTagged%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#6675\">source</a><a href=\"#impl-Copy-for-ImageCopyTextureTagged%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTextureTagged.html\" title=\"struct wgpu_types::ImageCopyTextureTagged\">ImageCopyTextureTagged</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","wgpu_core::command::transfer::ImageCopyTextureTagged"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()