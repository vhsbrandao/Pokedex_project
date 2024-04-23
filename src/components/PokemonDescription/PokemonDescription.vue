<template>
  <div class="pokemon">
    <ListItem v-bind="mainInfo"/>
    <div class="sprites">
      <h3 class="sprites-label">Sprites</h3>
      <div class="sprite-container">
        <img v-for="(sprite, key) in mainInfo.sprites" :key="key" v-if="isValidSprite(sprite)" :src="sprite" :alt="key" class="pokemon-sprite" />
      </div>
    </div>
    <div class="abilities">
      <h4 class="abilities-label">Abilities</h4>
      <ul class="abilities-list">
        <li v-for="(ability, index) in mainInfo.abilities" :key="index" class="ability-item">
          <span class="ability-name">{{ ability | capitalize }}</span>
        </li>
      </ul>
    </div>
    <div class="games">
      <h4 class="gameLabel">Games</h4>
      <ul class="games-list">
        <li v-for="(game, index) in mainInfo.games" :key="index" class="game-item">
          <span class="game-name">{{ game | capitalize }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/List/ListItem.vue';
import { state } from '@/store';
import { parsePokemonInfo } from '@/utils';

export default {
  name: 'PokemonDescription',
  components: {
    ListItem,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      mainInfo: null,
      stats: [],
    };
  },
  created() {
    const pokemonInfo = state.list.find(pokemon => pokemon.id === this.id);

    if (pokemonInfo) {
      const infoParsed = parsePokemonInfo(pokemonInfo);

      const { stats, ...rest } = infoParsed;

      this.mainInfo = rest;
    }
  },
  methods: {
    isValidSprite(sprite) {
      return sprite && typeof sprite === 'string' && sprite.trim() !== '';
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
};
</script>

<style lang="scss" scoped>
.abilities-label {
  margin: 10px 0;
}

.abilities-list {
  columns: 2;
}

.ability-item {
  margin-bottom: 45px;
}

.ability-name {
  font-weight: bold;
}

.sprite-container{
  columns: 4;

}

.pokemon-sprite{
  columns: 4;
}

.games-list{
  columns: 2;
  margin: 20px;
}

.game-item{
  columns: 2;
  border-radius: 8px;
  padding: 10px;
  margin: 2px;
  border: 1px solid color(white);
}

</style>
