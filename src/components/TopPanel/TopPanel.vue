<template>
	<div class="panel bg--red-04">
		<div class="container bg--red-01">
			<TopPanelButton v-for="(button, index) in buttons" :key="index" v-bind="button" />
		</div>
	</div>
</template>

<script>
	import { mutations } from '@/store';
	import TopPanelButton from './TopPanelButton.vue';

	export default {
		name: 'TopPanel',
		components: {
			TopPanelButton,
		},
		props: ['button'],
		data() {
			return {
				buttons: [
					{ style: { width: '50px', height: '50px' }, class: 'bg--blue-00' },
					{ style: { width: '20px', height: '20px' }, class: 'bg--red-02' },
					{ style: { width: '20px', height: '20px' }, class: 'bg--yellow' },
					{ style: { width: '20px', height: '20px' }, class: 'bg--green' },
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.panel {
		position: absolute;
		width: 100%;
		clip-path: polygon(0 0, 100% 0, 100% 41px, 270px 41px, 200px 100%, 0 100%);
		z-index: 1;
    border-radius: 8px;
		@media (min-width: $viewport-medium) {
			width: calc(50% + 20px);
		}

		.container {
			display: flex;
      border-radius: 8px;
			padding: 10px;
			align-items: flex-start;
			height: 75px;
			clip-path: polygon(0 0, 100% 0, 100% 38px, 270px 38px, 200px 72px, 0 72px);
			box-shadow: inset -10px 0 0 0 color('red-03');
		}
	}
</style>
