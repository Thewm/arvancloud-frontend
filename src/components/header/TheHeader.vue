<template>
  <v-app-bar color="charcoal" flat app dark clipped-left>
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="drawer"
      @click="showExpandedSidebar"
    ></v-app-bar-nav-icon>
    <div class="d-md-flex align-center">
      <span class="headline mr-6" :class="titleNameResponsiveSetup"
        >Arvan Challenge</span
      >
      <span :class="headerNameResponsiveSetup"
        >Welcome {{ displayUsername }}
      </span>
    </div>
    <v-spacer></v-spacer>
    <div class="mr-4">
      <v-btn
        color="logout"
        outlined
        :class="logoutBtnResponsiveSetup"
        @click="logout"
        >logout</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/store/types/actions";
import { eventBus } from "@/main";
export default {
  name: "Header",
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters(["currentUser"]),
    displayUsername() {
      return this.currentUser.username || "guest";
    },
    headerNameResponsiveSetup() {
      return [
        this.$vuetify.breakpoint.mdAndUp
          ? "title font-weight-thin text-capitalize"
          : "subtitle-2 font-weight-thin text-capitalize"
      ];
    },
    titleNameResponsiveSetup() {
      return [
        this.$vuetify.breakpoint.mdAndUp ? "headline mr-6" : "title mr-3"
      ];
    },
    logoutBtnResponsiveSetup() {
      return [
        this.$vuetify.breakpoint.smAndUp
          ? "px-4 text-capitalize"
          : "px-2 text-capitalize"
      ];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(logout).then(() => {
        this.$router.push({ name: "Login" });
      });
    },
    // This was a tricky solution, we use event bus to show humburger icon and when user click, we show expanded sidebar (because they are two separated components)
    showExpandedSidebar() {
      this.drawer = !this.drawer;
      eventBus.$emit("showExpandedSidebar", this.drawer);
      this.drawer = !this.drawer;
    }
  }
};
</script>
