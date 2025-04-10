import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import i18n from "@/plugins/i18n";
import "@/assets/tailwind.css";




import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
library.add(fas);
library.add(fab);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
