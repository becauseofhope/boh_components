
import Vue from 'vue';
import Component from 'vue-class-component';
import Face from './Face';
import { Face as FaceData } from '../data/face';

@Component({
  props: {
    faces: Array,
  },
  components: {Face}
})
export default class FaceBlockGrid extends Vue {
  faces: FaceData[];
};
