import state from './state';

export default {
	// incrementa o loading instanciado no state.js
	updateOffset() {
		state.offset += state.limit;
	},

	// Adiciona os pokemons na pokedex7

	setList(list) {
		state.list.push(...list);
		state.tmplist.push(...list);
	},
	// informa se pokedex  precisa de mais dados
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	// Se a pokedex terminou de buscar os dados
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	// informa se a pokedex teve algum erro
	setListHasError(flag) {
		state.listHasError = flag;
	},

	// reseta pokedex
	resetList() {
		state.list = [...state.tmplist];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},

	// informa que o search acontecendo
	setIsSerching(flag) {
		state.isSearching = flag;
	},

	// conclui search
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},

	// Informa se o search teve algum erro
	setSearchHasError(flag) {
		state.searchHasError = flag;
	},

};
