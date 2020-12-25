<template>
  <v-container fill-height>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="font-weight-thin display-4">Arvan Front-End Challenge</h1>
      </v-col>
      <v-col>
        <v-btn x-large outlined class="px-16" :to="{ name: 'Login' }"
          >Login</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
