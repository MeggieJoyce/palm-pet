// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Tabbar, TabbarItem,NavBar, Swipe, SwipeItem,
  Grid, GridItem,NoticeBar,Empty} from 'vant';


Vue.use(NavBar);Vue.use(Button);Vue.use(Tabbar);
Vue.use(TabbarItem);Vue.use(Swipe);
Vue.use(SwipeItem);Vue.use(Grid);Vue.use(GridItem);
Vue.use(NoticeBar);Vue.use(Empty);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
