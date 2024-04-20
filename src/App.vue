<template>
  <div id="background">
	<div id="pokedex">
		<Pokedex />
	</div>
</div>
</template>

<script>
	import Pokedex from './components/Pokedex.vue';

	export default {
		name: 'App',
		components: {
			Pokedex,
		},
	};
</script>

<style lang="scss" scoped>
	#pokedex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh);
		padding: 20px;

	}
  #background{
    background-image: url("https://i.pinimg.com/originals/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
  }
</style>
