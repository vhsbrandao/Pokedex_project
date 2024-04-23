import PokeAPI from '@/services/pokeapi';
import axios from 'axios';
import state from './state';
import mutations from './mutations';

export default {

  async getPokemonDetails(name) {
    try {
      // Obter os detalhes básicos do Pokémon
      const pokemonDetails = await PokeAPI.getPokemonByName(name);

      // Verificar se a propriedade 'evolution_chain' está presente nos detalhes do Pokémon
      if (pokemonDetails.evolution_chain) {
        // Fazer uma nova requisição para obter os detalhes completos da cadeia de evolução
        const evolutionChainResponse = await axios.get(pokemonDetails.evolution_chain.url);
        const evolutionChainDetails = evolutionChainResponse.data;

        // Adicionar os detalhes da cadeia de evolução aos detalhes do Pokémon
        pokemonDetails.evolutionChain = evolutionChainDetails;
      }

      return pokemonDetails;
    } catch (error) {
      console.error('Erro ao obter detalhes do Pokémon:', error);
      throw error;
    }
  },

	async getPokemons() {
		const {
			setList,
			setIsPokemonSearch,
			setListHasError,
			setListHasNext,
			setListHasCompleted,
			updateOffset,
		} = mutations;

		try {
			setIsPokemonSearch(false);
			setListHasError(false);

			const pokemonsList = await PokeAPI.getPokemons({ limit: state.limit, offset: state.offset });

			if (pokemonsList?.results?.length) {
				const prepareInfo = pokemonsList.results.map(item => PokeAPI.getPokemonByName(item.name));
				const pokemonsInfo = await Promise.all(prepareInfo);

				setList(pokemonsInfo);
			}

			if (pokemonsList?.next) {
				setListHasNext(true);
				updateOffset();
			} else {
				setListHasNext(false);
				setListHasCompleted(true);
			}
		} catch (error) {
			setListHasError(true);
		}
	},
	async getPokemonByName(name) {
		const { setPokemonSearched } = mutations;

		const pokemon = await PokeAPI.getPokemonByName(name);

		if (pokemon) {
			setPokemonSearched(pokemon);
		}
	},
	async searchPokemon(name) {
		const {
			setIsPokemonSearch,
			setIsSearching,
			setPokemonSearched,
			setSearchHasError,
			resetList,
		} = mutations;

		if (!name) {
			resetList();
			return;
		}

		try {
			setSearchHasError(false);
			setIsSearching(true);
			setIsPokemonSearch(true);

			const pokemon = state.tmpList.find(info => info.name.toLowerCase() === name.toLowerCase());

			if (pokemon) {
				setPokemonSearched(pokemon);
				return;
			}

			await this.getPokemonByName(name);
		} catch (error) {
			setSearchHasError(true);
		} finally {
			setIsSearching(false);
		}
	},
};
