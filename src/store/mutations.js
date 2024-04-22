import state from './state';

export default {
	// Atualiza o deslocamento de carregamento da Pokédex
	updateOffset() {
		state.offset += state.limit;
	},
	// Adiciona Pokémon à Pokédex para o carregamento infinito
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	// Informa se a Pokédex precisa de mais dados
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	// Informa se a Pokédex terminou de buscar dados
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	// Informa se a Pokédex encontrou um erro
	setListHasError(flag) {
		state.listHasError = flag;
	},
	// Reseta a Pokédex para o último cache e remove as informações de busca
	resetList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
		state.pokemonId = null;
	},

	// Adiciona à Pokédex apenas o Pokémon pesquisado
	setPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	// Informa que a pesquisa está acontecendo
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	// Informa que a pesquisa foi concluída
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},
	// Informa que a pesquisa encontrou um erro
	setSearchHasError(flag) {
		state.searchHasError = flag;
	},

	// Seleciona Pokémon
	setPokemonId(id = null) {
		state.isPokemonSearch = false;
		state.pokemonId = id;
	},
};
