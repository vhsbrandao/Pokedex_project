<template>
  <div>
    <LeftPanelContent/>
  </div>
</template>

<script>
import LeftPanelButton from './LeftPanelContent.vue';

  export default{
    name: 'LeftPanel',
    components: {
    LeftPanelContent,
    },
  };
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  width: 100%;
  padding: 85px,;

  @media (min-width: $viewport-medium) {
    width: calc(50% + 20px);
  }

  .container {
    display: flex;
    padding: 10px;
    align-items: flex-start;
    height: 75px;
    clip-path: polygon(0 0, 100% 0, 100% 38px, 270px 38px, 200px 72px, 0 72px);
    box-shadow: inset -10px 0 0 0 color('red-03');
  }
}

</style>
