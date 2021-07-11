<template>
  <div class="container" :class="popupActive ? 'popupActive' : ''">
    <a class="close button" @click="popupActive = false" v-if="popupActive">X</a>
    <p class="title top">
      {{ face.title }}
    </p>
    <div class="face">
      <div class="imgContainer">
        <img v-lazy="face.imageName" @click="popupActive = !popupActive">
      </div>
      <p class="description" :class="titleDescription ? 'titleDescription' : ''">
        {{ face.description }}
      </p>
    </div>
    <p class="title bottom">
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

.face img {
  max-width: 100% !important;
  margin-left: auto !important;
  margin-right: auto;
  display: block;
}

// Preload square size of faces
.imgContainer {
  background-color: #45818e;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  img {
    width: 100%;
    position: absolute;
  }
}


// Only used for popup component
.title.top {
  display: none;
}

.title.close.button {
  display: none;
}


// Only apply on "large default foundation"
@media print,
screen and (min-width: 64em) {
  p.description {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0;
    padding: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    font-size: 11px;
    visibility: hidden;
  }
  p.description.titleDescription {
    font-size: 20px;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: flex;
  } // Title option for hover
  .face:hover p.description {
    visibility: visible;
  }
}

@media print,
screen and (max-width: 63.999em) {
  // Don't bother with hover
  p.description {
    display: none;
  }
  img {
    cursor: pointer;
  } // Popup only CSS.
  .popupActive {
    .title.top {
      display: block;

    }
    .title.bottom {
      display: none;
    }
    .title.close.button {
      display: block;
    }

    .imgContainer {
      background-color: transparent;
      height: 30vh;
      width: auto;
      padding: 0;
    }

    .imgContainer img {
      height: 30vh;
      width: auto;
      position: relative;
    }
    p.description {
      display: block;
    } // Some want descriptions to be titlely
    p.description.titleDescription {
      font-size: 20px;
      vertical-align: middle;
      align-items: center;
      justify-content: center;
      display: flex;
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
      padding-top: 50px;
      overflow: auto;
    }
  }
}

.button {
  cursor: pointer;
}

.close.button {
  position: absolute;
  text-transform: uppercase;
  font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
  top: 20px;
  right: 30px;
  padding: 10px;
  color: gray;
  font-size: 30px;
}

.title {
  text-align: center;
}
</style>
