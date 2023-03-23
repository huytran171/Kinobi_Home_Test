import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

const vuetify = new Vuetify({
  icons: {
    iconfont: "mdi",
  },
});

Vue.use(Vuetify);

export default vuetify;
