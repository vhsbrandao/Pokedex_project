<template>
  <li class="list__item" @click="selectPokemon">
    <img :src="sprite" :alt="name" class="sprite">
    <div class="informations">
      <h3 class="identification">
        <span class="id">#{{ id }}</span>
        <span class="name">{{ name }}</span>
      </h3>
       <div class="pokemon-item">
    <!-- Exibir cada sprite -->
    <img v-for="(sprite, key) in sprites" :key="key" :src="sprite" :alt="key" class="pokemon-sprite" />
  </div>
      <div class="types">
        <span v-for="type in types" :key="type" :class="`bg--${type}`" class="type text--black">
          {{ type }}
        </span>
      </div>
    </div>
  </li>
</template>

<script>
import { mutations } from '@/store';

export default {
  name: 'ListItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    sprite: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
      required: true,
      validator(values) {
        return Array.isArray(values) && values.every(value => typeof value === 'string');
      },
    },
  },
  methods: {
    selectPokemon() {
      mutations.setPokemonId(this.id);
    },

  },
};
</script>

<style lang="scss" scoped>
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  margin: 24px;

  .informations {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 14px;
    padding: 0 8px;

    .identification {
      align-self: flex-start;
      font-size: 14px;

      @media (min-width: $viewport-medium) {
        font-size: 16px;
      }

      .id {
        letter-spacing: 2px;
        margin-right: 8px;
      }

      .name {
        display: inline-block;
        text-transform: capitalize;
      }
    }

    .types {
      display: flex;
      font-size: 12px;

      @media (min-width: $viewport-medium) {
        font-size: 14px;
      }

      .type {
        padding: 0 8px;
        font-weight: bold;
        border-radius: 8px;
        &:first-child {
          margin-right: 8px;
        }
      }
    }
  }

  .sprite {
    width: 60px;
    height: 60px;
    margin-right: 4px;
  }
}
</style>
