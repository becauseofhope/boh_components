<template>
  <div>
    <h1>test</h1>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import Face from './components/Face';

export default {
  name: 'bssp',
  components: { Face },
  data() {
    return {
      items: [
        'a',
        'b',
      ],
    };
  },
};
</script>

<style>
</style>
