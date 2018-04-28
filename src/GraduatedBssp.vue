<template>
  <div class="container">
    <face-block-grid :faces="faces" :title-titleDescription="false"></face-block-grid>
  </div>
</template>

<script>
  import FaceBlockGrid from './components/FaceBlockGrid';
  import Faces from './data/graduated_bssp.ts';

  export default {
    name: 'graduated_bssp',
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
