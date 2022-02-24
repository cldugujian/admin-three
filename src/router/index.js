import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home';
import legacy from '@/pages/legacy';
import test from '@/pages/test';
import first3D from '@/pages/first3D';

Vue.use(Router);

export default new Router({
  routes: [

    {path: '/', name: 'home', component: home,
      children:[
        {path: 'legacy', name: 'legacy', component: legacy},
        {path: 'test', name: 'test', component: test},
        {path: 'first3D', name: 'first3D', component: first3D},
      ]
    },

  ]
})
