import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import store from "./store";
window.router = router;

createApp(App)
  .use(ElementPlus)
//   .provide("socket", socket) // 传递 socket 对象
  .use(router)
  .use(store)
  .mount("#app");
