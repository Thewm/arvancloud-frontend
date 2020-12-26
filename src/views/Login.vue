<template>
  <v-container fill-height fluid>
    <v-row v-if="Object.keys(errors).length !== 0">
      <v-col md="6" sm="9" offset-md="6" offset-sm="3">
        <v-alert
          color="error_alert"
          class="charcoal--text"
          transition="scale-transition"
          dismissible
          close-icon="mdi-close"
        >
          <strong class="error_alert_text--text mr-1">Login Failed!</strong>
          <span class="error_alert_text--text font-weight-regular"
            >User name and/or Password is is invalid</span
          >
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6" sm="9">
        <v-card
          ref="form"
          color="form_primary"
          class="mx-auto rounded-sm"
          flat
          width="450"
        >
          <v-row>
            <v-col>
              <h1
                class="text-center form_text--text display-2 font-weight-regular my-4"
              >
                LOGIN
              </h1>
            </v-col>
          </v-row>
          <v-row class="ml-2 mb-n2">
            <span class="ml-5 mb-n2">Email</span>
            <v-col cols="11">
              <v-text-field
                class="rounded"
                dense
                flat
                outlined
                solo
                autocomplete
                v-model="email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="ml-2 mb-n2">
            <span class="ml-5 mb-n2">Password</span>
            <v-col cols="11">
              <v-text-field
                class="rounded"
                dense
                flat
                outlined
                solo
                autocomplete
                type="password"
                v-model="password"
                :rules="[rules.required, rules.min]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="ml-2 mb-n2">
            <v-col cols="11">
              <v-btn
                block
                dark
                color="primary"
                elevation="0"
                class="text-capitalize font-weight-regular subtitle-1"
                @click="submit"
                >login</v-btn
              >
            </v-col>
          </v-row>
          <v-row class="ml-4 mt-2">
            <v-col cols="11">
              <div class="d-md-flex d-sm-flex d-flex align-center">
                <p>Don't have an account?</p>
                <v-btn
                  :ripple="false"
                  text
                  class="text-capitalize font-weight-bold no-background-hover mt-n4 px-2"
                  :to="{ name: link }"
                  >{{ link }} Now</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from "@/mixins/inputRules";
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";
export default {
  name: "Login",
  data() {
    return {
      link: "Register",
      email: null,
      password: null,
      error: false
    };
  },
  mixins: [rules],
  methods: {
    submit(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.push({ name: "Dashboard" }));
    }
  },
  computed: {
    ...mapState({ errors: state => state.auth.errors })
  }
};
</script>
