(function() {var type_impls = {
"bevy_pbr":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bundle-for-MaterialMeshBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#20\">source</a><a href=\"#impl-Bundle-for-MaterialMeshBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\">Bundle</a> for <a class=\"struct\" href=\"bevy_pbr/struct.MaterialMeshBundle.html\" title=\"struct bevy_pbr::MaterialMeshBundle\">MaterialMeshBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_component_ids\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#20\">source</a><a href=\"#method.get_component_ids\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/bundle/trait.Bundle.html#tymethod.get_component_ids\" class=\"fn\">get_component_ids</a>(\n    components: &amp;<a class=\"struct\" href=\"bevy_ecs/component/struct.Components.html\" title=\"struct bevy_ecs::component::Components\">Components</a>,\n    ids: &amp;mut impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bevy_ecs/component/struct.ComponentId.html\" title=\"struct bevy_ecs::component::ComponentId\">ComponentId</a>&gt;)\n)</h4></section></summary><div class='docblock'>Gets this <a href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\"><code>Bundle</code></a>’s component ids. This will be <a href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> if the component has not been registered.</div></details></div></details>","Bundle","bevy_pbr::bundle::PbrBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MaterialMeshBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#20\">source</a><a href=\"#impl-Clone-for-MaterialMeshBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy_pbr/struct.MaterialMeshBundle.html\" title=\"struct bevy_pbr::MaterialMeshBundle\">MaterialMeshBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#20\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy_pbr/struct.MaterialMeshBundle.html\" title=\"struct bevy_pbr::MaterialMeshBundle\">MaterialMeshBundle</a>&lt;M&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy_pbr::bundle::PbrBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-MaterialMeshBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#34-46\">source</a><a href=\"#impl-Default-for-MaterialMeshBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bevy_pbr/struct.MaterialMeshBundle.html\" title=\"struct bevy_pbr::MaterialMeshBundle\">MaterialMeshBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#35-45\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.79.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bevy_pbr::bundle::PbrBundle"],["<section id=\"impl-DynamicBundle-for-MaterialMeshBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_pbr/bundle.rs.html#20\">source</a><a href=\"#impl-DynamicBundle-for-MaterialMeshBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"bevy_ecs/bundle/trait.DynamicBundle.html\" title=\"trait bevy_ecs::bundle::DynamicBundle\">DynamicBundle</a> for <a class=\"struct\" href=\"bevy_pbr/struct.MaterialMeshBundle.html\" title=\"struct bevy_pbr::MaterialMeshBundle\">MaterialMeshBundle</a>&lt;M&gt;</h3></section>","DynamicBundle","bevy_pbr::bundle::PbrBundle"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()