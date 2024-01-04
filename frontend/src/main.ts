import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

import { createApp } from "vue";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { saveChanges, load } from "./utils/dataRetentionUtils";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
    },
});

import App from "./App.vue";
import router from "./router";

const app = createApp({
    ...App,
    beforeCreate() {
        // save changes to the local storage before closing tab/window
        // Look into a better vuejs implementation
        window.addEventListener("beforeunload", () => saveChanges());
    },
    created() {
        load();
    },
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
