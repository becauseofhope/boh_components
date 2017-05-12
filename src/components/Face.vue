<template>
  <div>
    <img :src="imgsrc">
    <p>
      {{ face.title }}
    </p>
  </div>
</template>

<script src="./face.ts" lang="ts"></script>

<style scoped>
/* Reset some styling stuff from Brooklyn*/
img {
  max-width: 100% !important;
  margin-left: 0 !important;
}
</style>
