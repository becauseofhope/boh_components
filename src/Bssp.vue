<template>
  <div class="container">
    <face-block-grid v-bind:faces="faces"></face-block-grid>
  </div>
</template>

<script>
  import FaceBlockGrid from './components/FaceBlockGrid';
  import Faces from './data/bssp.ts';

  export default {
    name: 'bssp',
    components: { FaceBlockGrid },
    data() {
      return {
        faces: Faces,
      };
    },
  };
</script>

<style scoped lang="scss">
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 62.5rem;
  }
</style>
