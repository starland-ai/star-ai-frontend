import ElementPlus from "element-plus";
import  'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";
import { store } from "./store";
import "./assets/tailwind.css";
import { setupI18n } from '@/lang'
import './assets/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store);
app.use(router);
app.use(ElementPlus);
// app.use(head);


app.mount("#app");
app.use(setupI18n)
app.use(ElementPlus)
app.config.globalProperties.$filters = {
  shortHexAddress(s: string) {
    return `${s.substring(0, 13)}...${s.substring(37, 41)}`.toLowerCase();
  },
};
