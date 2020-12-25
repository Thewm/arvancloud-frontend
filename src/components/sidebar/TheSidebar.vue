<template>
  <v-navigation-drawer app color="primary" clipped>
    <v-list dark>
      <p class="headline ml-4">Post</p>
      <v-list-item-group>
        <v-list-item
          v-for="item in list_items"
          :key="item.name"
          :to="item.path"
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="ml-3">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    list_items: [
      {
        name: "All Articles",
        path: "/articles"
      },
      {
        name: "Create Article",
        path: "/articles/create"
      }
    ]
  })
};
</script>
