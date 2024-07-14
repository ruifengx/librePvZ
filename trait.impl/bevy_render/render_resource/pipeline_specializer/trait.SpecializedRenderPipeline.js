(function() {var implementors = {
"bevy":[],
"bevy_core_pipeline":[["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_core_pipeline/blit/struct.BlitPipeline.html\" title=\"struct bevy_core_pipeline::blit::BlitPipeline\">BlitPipeline</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_core_pipeline/contrast_adaptive_sharpening/struct.CASPipeline.html\" title=\"struct bevy_core_pipeline::contrast_adaptive_sharpening::CASPipeline\">CASPipeline</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_core_pipeline/dof/struct.DepthOfFieldPipeline.html\" title=\"struct bevy_core_pipeline::dof::DepthOfFieldPipeline\">DepthOfFieldPipeline</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_core_pipeline/fxaa/struct.FxaaPipeline.html\" title=\"struct bevy_core_pipeline::fxaa::FxaaPipeline\">FxaaPipeline</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_core_pipeline/motion_blur/pipeline/struct.MotionBlurPipeline.html\" title=\"struct bevy_core_pipeline::motion_blur::pipeline::MotionBlurPipeline\">MotionBlurPipeline</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_core_pipeline/tonemapping/struct.TonemappingPipeline.html\" title=\"struct bevy_core_pipeline::tonemapping::TonemappingPipeline\">TonemappingPipeline</a>"]],
"bevy_egui":[["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_egui/egui_node/struct.EguiPipeline.html\" title=\"struct bevy_egui::egui_node::EguiPipeline\">EguiPipeline</a>"]],
"bevy_pbr":[["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_pbr/deferred/struct.DeferredLightingLayout.html\" title=\"struct bevy_pbr::deferred::DeferredLightingLayout\">DeferredLightingLayout</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_pbr/struct.ScreenSpaceReflectionsPipeline.html\" title=\"struct bevy_pbr::ScreenSpaceReflectionsPipeline\">ScreenSpaceReflectionsPipeline</a>"],["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_pbr/struct.VolumetricFogPipeline.html\" title=\"struct bevy_pbr::VolumetricFogPipeline\">VolumetricFogPipeline</a>"]],
"bevy_render":[],
"bevy_sprite":[["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_sprite/struct.SpritePipeline.html\" title=\"struct bevy_sprite::SpritePipeline\">SpritePipeline</a>"]],
"bevy_ui":[["impl <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_ui/struct.UiPipeline.html\" title=\"struct bevy_ui::UiPipeline\">UiPipeline</a>"],["impl&lt;M: <a class=\"trait\" href=\"bevy_ui/ui_material/trait.UiMaterial.html\" title=\"trait bevy_ui::ui_material::UiMaterial\">UiMaterial</a>&gt; <a class=\"trait\" href=\"bevy_render/render_resource/pipeline_specializer/trait.SpecializedRenderPipeline.html\" title=\"trait bevy_render::render_resource::pipeline_specializer::SpecializedRenderPipeline\">SpecializedRenderPipeline</a> for <a class=\"struct\" href=\"bevy_ui/struct.UiMaterialPipeline.html\" title=\"struct bevy_ui::UiMaterialPipeline\">UiMaterialPipeline</a>&lt;M&gt;<div class=\"where\">where\n    M::<a class=\"associatedtype\" href=\"bevy_render/render_resource/bind_group/trait.AsBindGroup.html#associatedtype.Data\" title=\"type bevy_render::render_resource::bind_group::AsBindGroup::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()