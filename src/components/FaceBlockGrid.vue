<template>
  <div>
    <div class="row small-up-2 medium-up-3 large-up-3 grid">
      <div v-for="face in faces" class="column column-block">
        <face :face="face" :title-description="titleDescription"/>
      </div>
    </div>

  </div>
</template>

<script src="./faceBlockGrid_script.ts" lang="ts"></script>

<style src="./_face-block-grid.scss" lang="scss" scoped></style>
