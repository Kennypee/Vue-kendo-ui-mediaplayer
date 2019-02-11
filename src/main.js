import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { MediaPlayer, MediaPlayerInstaller } from '@progress/kendo-mediaplayer-vue-wrapper'
Vue.use(MediaPlayerInstaller)

Vue.config.productionTip = false

new Vue({
  components: {
    MediaPlayer
  },
  render: h => h(App),
}).$mount('#app')
