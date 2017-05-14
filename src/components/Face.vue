<template>
  <div>
    <div class="face">
      <img :src="face.imageName">
      <p class="hover">
        {{ face.description }}
      </p>
    </div>
    <p>
      {{ face.title }}
    </p>
  </div>
</template>

<script src="./face_script.ts" lang="ts"></script>

<style scoped lang="scss">
/* Reset some styling stuff from Brooklyn*/

.face {
  position: relative;
}

p.hover {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 10px;
  color: white;
  background-color: rgba(0,0,0,0.6);
  height: 100%;
  width: 100%;
  visibility: hidden;
}

.face:hover p.hover {
  visibility: visible;
}

.face > img {
  max-width: 100% !important;
  margin-left: 0 !important;
  display: block;
}
</style>
