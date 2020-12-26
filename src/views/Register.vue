<template>
  <v-container fill-height>
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
                Register
              </h1>
            </v-col>
          </v-row>
          <v-row class="ml-2 mb-n2">
            <span class="ml-5 mb-n2">User</span>
            <v-col cols="11">
              <v-text-field
                class="rounded"
                dense
                flat
                outlined
                solo
                autocomplete
                v-model="user_name"
                :rules="[rules.required]"
              ></v-text-field>
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
                >register</v-btn
              >
            </v-col>
          </v-row>
          <v-row class="ml-4 mt-2">
            <v-col cols="11">
              <div class="d-md-flex align-center">
                <p>Already Registered?</p>
                <v-btn
                  :ripple="false"
                  text
                  class="text-capitalize font-weight-bold no-background-hover mt-n4 px-2"
                  :to="{ name: link }"
                  >{{ link }}</v-btn
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
import { REGISTER } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      link: "Login",
      user_name: null,
      email: null,
      password: null
    };
  },
  mixins: [rules],
  methods: {
    submit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          username: this.user_name
        })
        .then(() => this.$router.push({ name: "Dashboard" }));
    }
  }
};
</script>
