import Vue from 'vue'

import appHeader from '@/components/header'
import ArrowRightBoxIcon from 'vue-material-design-icons/ArrowRightBox.vue';
import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue';

Vue.component('appHeader', appHeader)
Vue.component('ArrowRight', ArrowRightBoxIcon)
Vue.component('CloseCircle', CloseCircleIcon)