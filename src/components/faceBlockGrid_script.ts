
import Vue from 'vue';
import Component from 'vue-class-component';
import Face from './Face.vue';
import { Face as FaceData } from '../data/face';

@Component({
  props: {
    faces: Array,
    titleDescription: Boolean,
  },
  components: {Face}
})
export default class FaceBlockGrid extends Vue {
  faces: FaceData[];
  search = "";

  get facesSearch() {
    if (this.search.length > 0) {
      return this.faces.filter(
        (face) => {
          return face.description.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
        }
      );
    } else {
      return this.faces;
    }
  }
};
