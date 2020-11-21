import Vue from 'vue'

import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import cookies from '@/components/cookies'
import appBooking from '@/components/booking'

import ArrowRightBoxIcon from 'vue-material-design-icons/ArrowRightBox.vue';
import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue';
import SendIcon from 'vue-material-design-icons/Send.vue';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import RefreshIcon from 'vue-material-design-icons/Refresh.vue';

Vue.component('appHeader', appHeader)
Vue.component('appFooter', appFooter)
Vue.component('cookies', cookies)
Vue.component('appBooking', appBooking)

Vue.component('ArrowRight', ArrowRightBoxIcon)
Vue.component('CloseCircle', CloseCircleIcon)
Vue.component('Send', SendIcon)
Vue.component('Delete', DeleteIcon)
Vue.component('Refresh', RefreshIcon)