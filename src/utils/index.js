// eslint-disable-next-line import/prefer-default-export
export const parsePokemonInfo = info => ({
  id: info.id,
  name: info.name,
  types: info.types.map(({ type }) => type.name),
  sprite: info.sprites.versions['generation-v']['black-white'].animated.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  stats: info.stats,
  sprites: info.sprites,
  games: info.game_indices.map(game => game.version.name),
  evolutionChain: info.evolution_chain,
  abilities: info.abilities.map(({ ability }) => ability.name),
});
