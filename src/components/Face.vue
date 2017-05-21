<template>
  <div :class="popupActive ? 'popupActive' : ''">
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
  margin-left: 0 !important;
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

@media print, screen and (max-width: 64em) {
  p.description {
    display: none;
  }

  .popupActive {
    p.description {
      display: block;
    }
  }
}


.title {
  text-align: center;
}

</style>
