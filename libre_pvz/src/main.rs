/*
 * librePvZ: game logic implementation.
 * Copyright (c) 2022  Ruifeng Xie
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

use bevy::prelude::*;
use libre_pvz::resources::bevy::{Animation, AnimationLoader};
use libre_pvz::animation::AnimationPlugin;
use libre_pvz::almanac::AlmanacPlugin;

fn main() {
    let anim_name = std::env::args().into_iter().nth(1)
        .unwrap_or_else(|| "Peashooter.anim".to_string());

    App::new()
        .insert_resource(AlmanacPlugin::window_descriptor())
        .add_plugins(DefaultPlugins)
        .add_plugin(AnimationPlugin)
        .add_asset::<Animation>()
        .init_asset_loader::<AnimationLoader>()
        .add_startup_system(setup_camera)
        .add_plugin(AlmanacPlugin::new(anim_name))
        .run();
}

fn setup_camera(mut commands: Commands) {
    commands.spawn_bundle(OrthographicCameraBundle::new_2d());
}
