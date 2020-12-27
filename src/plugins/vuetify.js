import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        form_primary: "#eceeef",
        form_text: "#707070",
        primary: "#1c7cd5",
        error_alert: "#efdfdf",
        error_alert_text: "#9f4f48",
        charcoal: "#373a3c",
        logout: "#5bc0de",
        table_header: "#55595c",
        success: "#4b713d"
      }
    }
  },
  breakpoint: {
    laptopBreakpoint: "md" // This is equivalent to a value of 1200
  }
});
