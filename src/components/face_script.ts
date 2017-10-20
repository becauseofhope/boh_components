import Vue from 'vue';
import Component from 'vue-class-component';
import { Face as FaceData } from '../data/face';
import * as textFit from 'textFit';

@Component({
  props: {
    face: Object,
    titleDescription: Boolean,
  }
})
export default class Face extends Vue {
  face: FaceData;
  popupActive = false;
  mounted () {
    console.log("Ready");
    textFit(this.$el.getElementsByClassName("description"));
  }
};
