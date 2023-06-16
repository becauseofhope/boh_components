<template>
  <div class="container">
    <face-block-grid :faces="faces" :title-description="true"></face-block-grid>
  </div>
</template>

<script>
  import FaceBlockGrid from './components/FaceBlockGrid';
  import Faces from './data/in_loving_memory.ts';

  export default {
    name: 'in_loving_memory',
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
