import Vue from 'vue';
import Component from 'vue-class-component';
import { Face as FaceData } from '../data/face';

@Component({
  props: {
    face: Object,
  }
})
export default class Face extends Vue {
  face: FaceData;
  get imgsrc() {
    return require(`../assets/bssp/bagume.jpg`)
  }
};
