/*
 * librePvZ: game logic implementation.
 * Copyright (c) 2023  Ruifeng Xie
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

//! Seed bank and seed packets.

use std::ops::Deref;
use bevy::prelude::*;
use bevy::asset::Handle;
use bevy::sprite::TextureAtlas;
use bevy_asset_loader::prelude::*;
use crate::scene::loading::AssetState;

/// Assets for the seed bank and seed packets.
#[derive(Debug, AssetCollection, Resource)]
pub struct SeedBankAssets {
    /// Background of various seed packets.
    #[asset(texture_atlas(tile_size_x = 50., tile_size_y = 70., columns = 9, rows = 1))]
    #[asset(path = "seeds.png")]
    pub seed_packet_background: Handle<TextureAtlas>,
    /// Larger packet background, used in "card bonus" at the end of levels.
    ///
    /// Currently used in the seed bank, because we cannot yet use a [`TextureAtlas`] in
    /// [`ImageBundle`]s. Waiting for [bevyengine/bevy#5103] & [bevyengine/bevy#5070]
    /// (expected in 0.10.0).
    ///
    /// [bevyengine/bevy#5103]: https://github.com/bevyengine/bevy/pull/5103
    /// [bevyengine/bevy#5070]: https://github.com/bevyengine/bevy/pull/5070
    #[asset(path = "SeedPacket_Larger.png")]
    pub seed_packet_large: Handle<Image>,
    /// Silhouette of seed packets.
    #[asset(path = "SeedPacketSilhouette.png")]
    pub seed_packet_silhouette: Handle<Image>,
    /// Background of the seed bank.
    #[asset(path = "SeedBank.png")]
    pub seed_bank_background: Handle<Image>,
}

/// Plugin for the seed bank.
#[derive(Default, Debug, Copy, Clone)]
pub struct SeedBankPlugin;

impl Plugin for SeedBankPlugin {
    fn build(&self, app: &mut App) {
        app.insert_resource(GridInfo::default())
            .add_loading_state(LoadingState::new(AssetState::AssetLoading)
                .with_collection::<SeedBankAssets>()
                .continue_to_state(AssetState::AssetReady)
                .on_failure_continue_to_state(AssetState::LoadFailure))
            .add_system_set(SystemSet::on_enter(AssetState::AssetReady).with_system(spawn_seed_bank))
            .add_system_set(SystemSet::on_update(AssetState::AssetReady).with_system(update_seed_bank));
    }
}

/// Description of a seed bank.
#[derive(Debug, Copy, Clone, Component)]
pub struct SeedBank {
    packet_number: usize,
}

/// Marker of the rectangular area for seed packets in a seed bank.
#[derive(Debug, Copy, Clone, Component)]
pub struct SeedPacketArea;

/// Index of a seed packet.
#[derive(Debug, Copy, Clone, Component)]
pub struct SeedPacketIndex(usize);

#[derive(Copy, Clone, PartialEq, Resource)]
struct GridInfo {
    position: Vec2,
    bank_size: Vec2,
    packet_size: Vec2,
    packet_separator: f32,
    seed_area_top_left: Vec2,
    natural_packet_count: usize,
    extension_packet_count: usize,
    extension_left_padding: f32,
}

impl Default for GridInfo {
    fn default() -> Self {
        GridInfo {
            position: Vec2::new(230.0, 0.0),
            bank_size: Vec2::new(446.0, 87.0),
            packet_size: Vec2::new(50.0, 70.0),
            packet_separator: 1.0,
            seed_area_top_left: Vec2::new(79.0, 7.0),
            natural_packet_count: 7,
            extension_packet_count: 6,
            extension_left_padding: 4.0,
        }
    }
}

impl GridInfo {
    fn packet_area_width(&self, packet_count: usize) -> f32 {
        packet_count as f32 * (self.packet_size.x + self.packet_separator)
    }

    fn extension_offset(&self, packet_count: usize) -> f32 {
        assert!(packet_count <= self.extension_packet_count);
        let left_cut = self.natural_packet_count - packet_count;
        let left_cut_width = left_cut as f32 * (self.packet_size.x + self.packet_separator);
        self.seed_area_top_left.x + left_cut_width - self.extension_left_padding
    }

    fn extension_width(&self, packet_count: usize) -> f32 {
        self.bank_size.x - self.extension_offset(packet_count)
    }

    fn background_at(&self, index: usize) -> f32 {
        assert_ne!(index, 0);
        self.seed_area_top_left.x + self.packet_area_width(self.natural_packet_count)
            + (index - 1) as f32 * self.packet_area_width(self.extension_packet_count)
            - self.extension_left_padding
    }
}

/// Seed packet content.
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
pub enum SeedPacket {
    /// Gray packet (generated by imitator).
    Gray,
    /// Purple packet (planted on other plants).
    Purple,
    /// Green packet (normal plants).
    Green,
    /// Crater recovery.
    Crater,
    /// Refresh game.
    Refresh,
    /// Sun packet.
    Sun,
    /// Diamond packet.
    Diamond,
    /// Snorkel zombie (in aquarium level).
    Snorkel,
    /// Trophy (goal in mini games).
    Trophy,
}

fn spawn_seed_bank(
    seed_bank_assets: Res<SeedBankAssets>,
    grid_info: Res<GridInfo>,
    mut commands: Commands,
) {
    let bank = commands.spawn((
        SeedBank { packet_number: 10 },
        NodeBundle {
            style: Style {
                position: UiRect {
                    left: Val::Px(grid_info.position.x),
                    top: Val::Px(grid_info.position.y),
                    ..default()
                },
                ..default()
            },
            ..default()
        },
    )).id();
    let container = commands.spawn(NodeBundle {
        background_color: Color::NONE.into(),
        // `BackgroundIndex` uses `u8` internally, 129 guarantees foreground
        z_index: ZIndex::Local(129),
        style: Style {
            flex_direction: FlexDirection::Row,
            position_type: PositionType::Absolute,
            position: UiRect {
                left: Val::Px(grid_info.seed_area_top_left.x),
                top: Val::Px(grid_info.seed_area_top_left.y),
                ..default()
            },
            ..default()
        },
        ..default()
    }).id();
    commands.entity(bank).add_child(container);
    commands.entity(container).with_children(|parent| for i in 0..10 {
        parent.spawn((
            ImageBundle {
                image: UiImage(seed_bank_assets.seed_packet_large.clone()),
                style: Style {
                    margin: UiRect {
                        right: Val::Px(grid_info.packet_separator),
                        ..default()
                    },
                    size: Size {
                        width: Val::Px(grid_info.packet_size.x),
                        height: Val::Px(grid_info.packet_size.y),
                    },
                    ..default()
                },
                ..default()
            },
            SeedPacketIndex(i),
        ));
    });
}

#[derive(Copy, Clone, Component)]
struct Clipped;

#[derive(Copy, Clone, Component)]
struct BackgroundIndex(u8);

fn update_seed_bank(
    seed_bank_assets: Res<SeedBankAssets>,
    grid_info: Res<GridInfo>,
    seed_bank: Query<(Entity, &SeedBank, &Children), Changed<SeedBank>>,
    mut background: Query<(Entity, &Children, &mut Style, &mut ZIndex, &BackgroundIndex), Without<Clipped>>,
    mut extension: Query<&mut Style, With<Clipped>>,
    mut commands: Commands,
) {
    for (bank_entity, seed_bank, children) in &seed_bank {
        let remaining = seed_bank.packet_number.saturating_sub(grid_info.natural_packet_count);
        let complete_extensions = remaining / grid_info.extension_packet_count;
        let remaining_packets = remaining % grid_info.extension_packet_count;
        let background_expected = complete_extensions + 1 + if remaining_packets != 0 { 1 } else { 0 };

        let mut background_count = 0;
        for child in children {
            let Ok(child) = background.get_mut(*child) else { continue; };
            let (this, children, mut style, mut z_index, &BackgroundIndex(index)) = child;
            if index as usize >= background_expected {
                commands.entity(this).despawn_recursive();
                continue;
            }
            background_count += 1;
            *z_index = ZIndex::Local(index as i32);
            if index == 0 { continue; }
            style.position.left = Val::Px(grid_info.background_at(index as usize));
            let complete = index as usize <= complete_extensions;
            let packet_count = if complete {
                grid_info.extension_packet_count
            } else {
                remaining_packets
            };
            style.size.width = Val::Px(grid_info.extension_width(packet_count));
            let &[clipped] = children.deref() else { unreachable!() };
            let mut clipped = extension.get_mut(clipped).unwrap();
            clipped.position.left = Val::Px(-grid_info.extension_offset(packet_count));
        }

        let bank_size = Size {
            width: Val::Px(grid_info.bank_size.x),
            height: Val::Px(grid_info.bank_size.y),
        };
        if background_count == 0 {
            let background = commands.spawn((
                BackgroundIndex(0),
                ImageBundle {
                    image: UiImage(seed_bank_assets.seed_bank_background.clone()),
                    z_index: ZIndex::Local(0),
                    style: Style {
                        position_type: PositionType::Absolute,
                        position: UiRect {
                            left: Val::Px(0.0),
                            top: Val::Px(0.0),
                            ..default()
                        },
                        size: bank_size,
                        min_size: bank_size,
                        max_size: bank_size,
                        ..default()
                    },
                    ..default()
                },
            )).id();
            commands.entity(bank_entity).add_child(background);
            background_count += 1;
        }
        for index in background_count..background_expected {
            let complete = index as usize <= complete_extensions;
            let packet_count = if complete {
                grid_info.extension_packet_count
            } else {
                remaining_packets
            };
            let container = commands.spawn((
                BackgroundIndex(index.try_into().unwrap()),
                NodeBundle {
                    z_index: ZIndex::Local(index as i32),
                    style: Style {
                        overflow: Overflow::Hidden,
                        position_type: PositionType::Absolute,
                        position: UiRect {
                            left: Val::Px(grid_info.background_at(index as usize)),
                            ..default()
                        },
                        size: Size {
                            width: Val::Px(grid_info.extension_width(packet_count)),
                            height: Val::Px(grid_info.bank_size.y),
                        },
                        ..default()
                    },
                    ..default()
                },
            )).id();
            let image = commands.spawn((
                Clipped,
                ImageBundle {
                    image: UiImage(seed_bank_assets.seed_bank_background.clone()),
                    style: Style {
                        position: UiRect {
                            left: Val::Px(-grid_info.extension_offset(packet_count)),
                            ..default()
                        },
                        size: bank_size,
                        min_size: bank_size,
                        max_size: bank_size,
                        ..default()
                    },
                    ..default()
                },
            )).id();
            commands.entity(bank_entity).add_child(container);
            commands.entity(container).add_child(image);
        }
    }
}
