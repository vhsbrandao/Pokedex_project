<template>
  <div class="search">
    <label for="search" class="search__label text--white bg--black">
      <h3 class="search__label--text">Who's that Pokémon?</h3>
      <p>Ex. "Charizard" or "6"</p>
      <input id="search" v-model.trim="name" type="text" class="search__input" @keyup.enter="searchPokemon">
    </label>

    <div class="buttons">
      <button class="btn btn--clear bg--black-button text--white" @click.prevent="clear">
        Clear
      </button>
      <button class="btn btn--search bg--black-button text--white" @click.prevent="searchPokemon">
        Search
      </button>
      <!-- <button class="btn btn--lang bg--black-button text--white" @click.prevent="showRandomPokemon">
          Mudar Idioma
      </button> -->
    </div>
  </div>
</template>

<script>
import { actions, mutations } from '@/store';

export default {
  name: 'RightPanelContent',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    clear() {
      this.name = '';
      mutations.resetList();
    },
    async searchPokemon() {
      await actions.searchPokemon(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  transform: rotateX(-180deg);

  @media (min-width: $viewport-medium) {
    transform: rotateY(-180deg);
    padding-top: 50px;
  }

  &__label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    padding: 6px 12px 12px;

    @media (min-width: $viewport-medium) {
      height: 36%;
      padding: 12px 24px 24px;
    }
  }

  &__input {
    color: inherit;
    background: transparent;
    border: none;
    border-bottom: 2px solid color(white);
    padding: 4px 8px;

    @media (min-width: $viewport-medium) {
      padding: 8px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-bottom: 120px;
    .btn {
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;

      &--clear {
        width: 50%;
        padding: 15px;
        margin-right: 16px;
        border: 4px solid color(black);
      }

      &--search {
        width: 50%;
        padding: 15px;
        border: 4px solid color(black);

      }
      &--lang {
        width: 30%;
        padding: 15px;
        border: 4px solid color(black);
      }
    }
  }
}
</style>
