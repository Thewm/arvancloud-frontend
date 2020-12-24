<template>
  <v-app-bar
    color="charcoal"
    flat
    app
    dark
    clipped-left
  >
    <div class="d-md-flex align-center">
      <span class="headline mr-6" :class="[$vuetify.breakpoint.mdAndUp ? 'headline mr-6' : 'title mr-3']">Arvan Challenge</span>
      <span :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-thin' : 'subtitle-2 font-weight-thin']">Welcome {{ currentUser.username || guest }} </span>
    </div>
    <v-spacer></v-spacer>
    <div class="mr-4">
      <v-btn color="logout" outlined :class="[$vuetify.breakpoint.smAndUp ? 'px-4 text-capitalize' : 'px-2 text-capitalize']" @click="logout">Logout</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type"

export default {
    name: "Header",
    data: () => ({
      guest: "guest"
    }),
    computed: {
      ...mapGetters(["currentUser"]),
    },
    methods: {
      logout() {
        this.$store.dispatch(LOGOUT).then(() => {
          this.$router.push({ name: "Login" });
        });
      }
    }
}
</script>