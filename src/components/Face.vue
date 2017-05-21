<template>
  <div class="container" :class="popupActive ? 'popupActive' : ''">
    <a class="button" @click="popupActive = false" v-if="popupActive">Close</a>
    <p class="title" v-if="popupActive">
      {{ face.title }}
    </p>
    <div class="face" >
      <img :src="face.imageName" @click="popupActive = !popupActive">
      <p class="description" :class="titleDescription ? 'titleDescription' : ''">
        {{ face.description }}
      </p>
    </div>
    <p class="title" v-if="!popupActive">
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

.face > img {
  max-width: 100% !important;
  margin-left: auto !important;
  margin-right: auto;
  display: block;
}

// Hover Text

// Only apply on "large default foundation"

@media print, screen and (min-width: 64em) {
  p.description {
    display: block;
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
    font-size: 11px;
  }

  // Title option for hover

  p.description.titleDescription {
    font-size: 20px;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .face:hover p.description {
    visibility: visible;
  }
}

@media print, screen and (max-width: 63.999em) {
  p.description {
    display: none;
  }

  .popupActive {
    p.description {
      display: block;
    }
    &.container {
      z-index: 9999;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: white;
      padding: 10px;
    }
  }
}

.button {
  cursor: pointer;
}

.title {
  text-align: center;
}

</style>
