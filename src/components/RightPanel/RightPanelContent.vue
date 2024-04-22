<template>
	<form class="search">
		<label for="search" class="search__label text--white  bg--black">
			<h3 class="search__label--text">Who's that Pokémon?</h3>
			<input id="search" type="text" class="search__input">
		</label>
		<button class="search__button text--white bg--black-button" @click.prevent>Search</button>
	</form>
</template>

<script>
	export default {
		name: 'RightPanelContent',
	};
</script>

<style lang="scss" scoped>
	.search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
    border-radius: 8px;
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
      border-radius: 8px;
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
    &__button {
      align-self: flex-end;
      border: 4px solid color(black);
      border-radius: 8px;
      font-size: 18px;
      box-shadow: 2px 2px rgba(20, 20, 20, 0.3);
      font-weight: bold;
      cursor: pointer;

      @media (min-width: $viewport-medium){
      width: 50%;
      height: 50px;
      position: absolute;
      margin-top: 90%;

      }
    }

  }

</style>
