/*global Ext*/
import { createApp } from "vue";
import router from './router';
import App from './App.vue'
// import '@sencha/ext-web-components-modern/lib/ext-panel.component';
import '../node_modules/@sencha/ext-modern-runtime/modern.engine.enterprise.js'
import '../node_modules/@sencha/ext-web-components-modern/ext-web-components-modern.js'

Ext.onReady(function () {
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
});