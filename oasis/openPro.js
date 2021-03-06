/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './openPro.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(iView, {
    locale
});

// 开启debug模式
Vue.config.debug = true;

 

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
