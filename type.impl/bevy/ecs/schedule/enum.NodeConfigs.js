(function() {var type_impls = {
"bevy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoSystemConfigs%3C()%3E-for-NodeConfigs%3CBox%3Cdyn+System%3CIn+=+(),+Out+=+()%3E%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#449\">source</a><a href=\"#impl-IntoSystemConfigs%3C()%3E-for-NodeConfigs%3CBox%3Cdyn+System%3CIn+=+(),+Out+=+()%3E%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html\" title=\"trait bevy::ecs::prelude::IntoSystemConfigs\">IntoSystemConfigs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt; for <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_configs\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#450\">source</a><a href=\"#method.into_configs\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#tymethod.into_configs\" class=\"fn\">into_configs</a>(self) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Convert into a <a href=\"bevy/ecs/schedule/type.SystemConfigs.html\" title=\"type bevy::ecs::schedule::SystemConfigs\"><code>SystemConfigs</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_set\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#455\">source</a><a href=\"#method.in_set\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.in_set\" class=\"fn\">in_set</a>(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Add these systems to the provided <code>set</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.before\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#466\">source</a><a href=\"#method.before\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.before\" class=\"fn\">before</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Runs before all systems in <code>set</code>. If <code>self</code> has any systems that produce <a href=\"bevy/ecs/prelude/struct.Commands.html\" title=\"struct bevy::ecs::prelude::Commands\"><code>Commands</code></a>\nor other <a href=\"bevy/ecs/prelude/struct.Deferred.html\" title=\"struct bevy::ecs::prelude::Deferred\"><code>Deferred</code></a> operations, all systems in <code>set</code> will see their effect. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.before\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.after\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#472\">source</a><a href=\"#method.after\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.after\" class=\"fn\">after</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Run after all systems in <code>set</code>. If <code>set</code> has any systems that produce <a href=\"bevy/ecs/prelude/struct.Commands.html\" title=\"struct bevy::ecs::prelude::Commands\"><code>Commands</code></a>\nor other <a href=\"bevy/ecs/prelude/struct.Deferred.html\" title=\"struct bevy::ecs::prelude::Deferred\"><code>Deferred</code></a> operations, all systems in <code>self</code> will see their effect. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.after\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.before_ignore_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#478\">source</a><a href=\"#method.before_ignore_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.before_ignore_deferred\" class=\"fn\">before_ignore_deferred</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Run before all systems in <code>set</code>. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.before_ignore_deferred\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.after_ignore_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#484\">source</a><a href=\"#method.after_ignore_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.after_ignore_deferred\" class=\"fn\">after_ignore_deferred</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Run after all systems in <code>set</code>. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.after_ignore_deferred\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.distributive_run_if\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#490\">source</a><a href=\"#method.distributive_run_if\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.distributive_run_if\" class=\"fn\">distributive_run_if</a>&lt;M&gt;(\n    self,\n    condition: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Condition.html\" title=\"trait bevy::ecs::prelude::Condition\">Condition</a>&lt;M&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Add a run condition to each contained system. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.distributive_run_if\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_if\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#495\">source</a><a href=\"#method.run_if\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.run_if\" class=\"fn\">run_if</a>&lt;M&gt;(\n    self,\n    condition: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Condition.html\" title=\"trait bevy::ecs::prelude::Condition\">Condition</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Run the systems only if the <a href=\"bevy/ecs/prelude/trait.Condition.html\" title=\"trait bevy::ecs::prelude::Condition\"><code>Condition</code></a> is <code>true</code>. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.run_if\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ambiguous_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#500\">source</a><a href=\"#method.ambiguous_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.ambiguous_with\" class=\"fn\">ambiguous_with</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Suppress warnings and errors that would result from these systems having ambiguities\n(conflicting access but indeterminate order) with systems in <code>set</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ambiguous_with_all\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#506\">source</a><a href=\"#method.ambiguous_with_all\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.ambiguous_with_all\" class=\"fn\">ambiguous_with_all</a>(self) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Suppress warnings and errors that would result from these systems having ambiguities\n(conflicting access but indeterminate order) with any other system.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.chain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#511\">source</a><a href=\"#method.chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.chain\" class=\"fn\">chain</a>(self) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Treat this collection as a sequence of systems. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.chain\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.chain_ignore_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#515\">source</a><a href=\"#method.chain_ignore_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.chain_ignore_deferred\" class=\"fn\">chain_ignore_deferred</a>(\n    self\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Treat this collection as a sequence of systems. <a href=\"bevy/ecs/prelude/trait.IntoSystemConfigs.html#method.chain_ignore_deferred\">Read more</a></div></details></div></details>","IntoSystemConfigs<()>","bevy::ecs::schedule::SystemConfigs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoSystemSetConfigs-for-NodeConfigs%3CInterned%3Cdyn+SystemSet%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#658\">source</a><a href=\"#impl-IntoSystemSetConfigs-for-NodeConfigs%3CInterned%3Cdyn+SystemSet%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html\" title=\"trait bevy::ecs::prelude::IntoSystemSetConfigs\">IntoSystemSetConfigs</a> for <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_set\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#664\">source</a><a href=\"#method.in_set\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.in_set\" class=\"fn\">in_set</a>(self, set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Add these system sets to the provided <code>set</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.before\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#674\">source</a><a href=\"#method.before\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.before\" class=\"fn\">before</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Runs before all systems in <code>set</code>. If <code>self</code> has any systems that produce <a href=\"bevy/ecs/prelude/struct.Commands.html\" title=\"struct bevy::ecs::prelude::Commands\"><code>Commands</code></a>\nor other <a href=\"bevy/ecs/prelude/struct.Deferred.html\" title=\"struct bevy::ecs::prelude::Deferred\"><code>Deferred</code></a> operations, all systems in <code>set</code> will see their effect. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.before\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.after\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#681\">source</a><a href=\"#method.after\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.after\" class=\"fn\">after</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Runs before all systems in <code>set</code>. If <code>set</code> has any systems that produce <a href=\"bevy/ecs/prelude/struct.Commands.html\" title=\"struct bevy::ecs::prelude::Commands\"><code>Commands</code></a>\nor other <a href=\"bevy/ecs/prelude/struct.Deferred.html\" title=\"struct bevy::ecs::prelude::Deferred\"><code>Deferred</code></a> operations, all systems in <code>self</code> will see their effect. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.after\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.before_ignore_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#688\">source</a><a href=\"#method.before_ignore_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.before_ignore_deferred\" class=\"fn\">before_ignore_deferred</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Run before all systems in <code>set</code>. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.before_ignore_deferred\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.after_ignore_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#695\">source</a><a href=\"#method.after_ignore_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.after_ignore_deferred\" class=\"fn\">after_ignore_deferred</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Run after all systems in <code>set</code>. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.after_ignore_deferred\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_if\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#702\">source</a><a href=\"#method.run_if\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.run_if\" class=\"fn\">run_if</a>&lt;M&gt;(\n    self,\n    condition: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Condition.html\" title=\"trait bevy::ecs::prelude::Condition\">Condition</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Run the systems in this set(s) only if the <a href=\"bevy/ecs/prelude/trait.Condition.html\" title=\"trait bevy::ecs::prelude::Condition\"><code>Condition</code></a> is <code>true</code>. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.run_if\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ambiguous_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#708\">source</a><a href=\"#method.ambiguous_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.ambiguous_with\" class=\"fn\">ambiguous_with</a>&lt;M&gt;(\n    self,\n    set: impl <a class=\"trait\" href=\"bevy/ecs/prelude/trait.IntoSystemSet.html\" title=\"trait bevy::ecs::prelude::IntoSystemSet\">IntoSystemSet</a>&lt;M&gt;\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Suppress warnings and errors that would result from systems in these sets having ambiguities\n(conflicting access but indeterminate order) with systems in <code>set</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ambiguous_with_all\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#715\">source</a><a href=\"#method.ambiguous_with_all\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.ambiguous_with_all\" class=\"fn\">ambiguous_with_all</a>(self) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Suppress warnings and errors that would result from systems in these sets having ambiguities\n(conflicting access but indeterminate order) with any other system.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.chain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#721\">source</a><a href=\"#method.chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.chain\" class=\"fn\">chain</a>(self) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Treat this collection as a sequence of system sets. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.chain\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.chain_ignore_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#653\">source</a><a href=\"#method.chain_ignore_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.chain_ignore_deferred\" class=\"fn\">chain_ignore_deferred</a>(\n    self\n) -&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Treat this collection as a sequence of systems. <a href=\"bevy/ecs/prelude/trait.IntoSystemSetConfigs.html#method.chain_ignore_deferred\">Read more</a></div></details></div></details>","IntoSystemSetConfigs","bevy::ecs::schedule::SystemSetConfigs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NodeConfigs%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#100\">source</a><a href=\"#impl-NodeConfigs%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"enum\" href=\"bevy/ecs/schedule/enum.NodeConfigs.html\" title=\"enum bevy::ecs::schedule::NodeConfigs\">NodeConfigs</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_set_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#102\">source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/schedule/enum.NodeConfigs.html#tymethod.in_set_inner\" class=\"fn\">in_set_inner</a>(&amp;mut self, set: <a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Adds a new boxed system set to the systems.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_if_dyn\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/schedule/config.rs.html#222\">source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/schedule/enum.NodeConfigs.html#tymethod.run_if_dyn\" class=\"fn\">run_if_dyn</a>(\n    &amp;mut self,\n    condition: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.ReadOnlySystem.html\" title=\"trait bevy::ecs::prelude::ReadOnlySystem\">ReadOnlySystem</a>&lt;Out = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a>, In = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Adds a new boxed run condition to the systems.</p>\n<p>This is useful if you have a run condition whose concrete type is unknown.\nPrefer <code>run_if</code> for run conditions whose type is known at compile time.</p>\n</div></details></div></details>",0,"bevy::ecs::schedule::SystemConfigs","bevy::ecs::schedule::SystemSetConfigs"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()