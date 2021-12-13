import ApiService from "@/common/api.service";

import { POKEMON_FETCH_LIST, POKEMON_GET_DETAILS } from "../actions.type";
import {
  SET_POKEMON_LIST,
  SET_LOADING,
  SET_POKEMON_TOGGLE_FAVORITE
} from "../mutations.type";

const state = {
  pokemonList: [],
  loading: false
};

const getters = {
  pokemonList(state) {
    return state.pokemonList;
  },
  loading(state) {
    return state.loading;
  }
};

const mutations = {
  [SET_POKEMON_LIST](state, pokemonList) {
    state.pokemonList = pokemonList.map(pokemon => ({
      ...pokemon,
      _isFavorite: false
    }));
  },
  [SET_POKEMON_TOGGLE_FAVORITE](state, namePokemon) {
    let index = state.pokemonList.findIndex(pokemon => {
      return pokemon.name === namePokemon;
    });
    let clone = state.pokemonList.slice(0);
    clone[index]._isFavorite = !clone[index]._isFavorite;
    state.pokemonList = clone;
  },
  [SET_LOADING](state, loading) {
    state.loading = loading;
  }
};

const actions = {
  [POKEMON_FETCH_LIST](context) {
    context.commit(SET_LOADING, true);
    return ApiService.get("pokemon")
      .then(result => {
        context.commit(SET_POKEMON_LIST, result.results);
        return Promise.resolve(result);
      })
      .finally(() => {
        context.commit(SET_LOADING, false);
      });
  },
  [POKEMON_GET_DETAILS](context, data) {
    context.commit(SET_LOADING, true);
    return ApiService.get(`pokemon/${data}`).finally(() => {
      context.commit(SET_LOADING, false);
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
