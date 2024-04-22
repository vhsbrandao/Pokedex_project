/* eslint-disable indent */
import state from './state';

export default {
  get pokemonsInfo() {
    return state.list.map(info => ({
      id: info.id,
      name: info.name,
      types: info.types.map(({ type }) => type.name),
      sprite: info.sprites.versions['generation-v']['black-white'].animated.front_default,
    }));
  },
};
