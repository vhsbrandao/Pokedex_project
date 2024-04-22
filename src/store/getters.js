/* eslint-disable indent */
import state from './state';

export default {
  get pokemonsInfo() {
    return state.list.map(info => ({
      id: info.id,
      name: info.name,
      moves: info.moves.map(({ move }) => move.name),
      types: info.types.map(({ type }) => type.name),
      EvolutionChain: info.EvolutionChain.map(({ chain }) => chain.name),
      sprite: info.sprites.showdown,
    }));
  },
};
