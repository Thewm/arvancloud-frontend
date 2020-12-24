<template>
  <v-container fluid>
    <v-row justify="center" class="text-center">
        <v-col cols="12" class="mt-8 mb-4">
            <h1 class="display-3 error_alert_text--text"> <span class="red--text"> OooOps!</span> Something went wrong</h1>
        </v-col>
        <v-col>
            <h3 class="display-2"> <router-link :to="{ name: 'Login' }" class="green--text text-decoration-none">Back to safety <v-icon class="green--text display-2">mdi-arrow-collapse-right</v-icon> </router-link> </h3>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "not-found"
}
</script>