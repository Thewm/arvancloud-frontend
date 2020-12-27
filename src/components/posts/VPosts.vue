/* eslint-disable */
<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    :loading="isLoading"
    loader-height="4"
    loading-text="Loading blogs . . . Wait a moment please"
    hide-default-footer
    @page-count="pageCount = $event"
    disable-filtering
    disable-sort
    mobile-breakpoint="850"
    no-data-text="Something went wrong, please refresh page or check your network connection"
    class="elevation-0"
  >
    <template v-slot:item.body="{ item }">
      {{ item.body.slice(0, 20) }}
    </template>
    <template v-slot:item.hash>
      <v-icon color="primary">mdi-numeric</v-icon>
    </template>

    <template v-slot:item.createdAt="{ item }">
      {{ dateFormatter(item.createdAt) }}
    </template>
    <template v-slot:item.action>
      <v-menu bottom left offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="logout"
            class="white--text"
            v-on="on"
            v-bind="attrs"
            elevation="0"
          >
            ...
            <v-icon class="white--text ml-2" small>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list color="white" outlined style="width: 11rem">
          <v-list-item>
            <v-list-item-action>
              <v-list-item-action-text
                class="font-weight-regular subtitle-1 black--text"
                >Edit</v-list-item-action-text
              >
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-action>
              <v-dialog max-width="500" close-delay="1000" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-action-text
                    v-bind="attrs"
                    v-on="on"
                    class="font-weight-regular subtitle-1 black--text"
                    >Delete</v-list-item-action-text
                  >
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="white" flat>
                      <v-toolbar-title
                        class="font-weight-bold headline charcoal--text"
                        >Delete Article</v-toolbar-title
                      >
                      <v-spacer></v-spacer>
                      <v-icon
                        @click="dialog.value = false"
                        class="display-1 font-weight-bold"
                        >mdi-close</v-icon
                      >
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-card-text>
                      <p class="pt-4 title">Are you sure to delete article?</p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-end">
                      <v-btn
                        text
                        outlined
                        class="px-6 py-5 mr-3 my-2 text-capitalize"
                        @click="dialog.value = false"
                        >No</v-btn
                      >
                      <v-btn
                        color="red darken-2"
                        dark
                        elevation="0"
                        class="px-6 py-5 my-2 text-capitalize"
                        @click="deleteArticle"
                        >Yes</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";
import { deleteArticle } from "@/store/types/actions";
export default {
  name: "VPosts",
  data: () => ({
    itemsPerPage: 10,
  }),
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    async deleteArticle() {
      try {
        console.log(this.article);
        await this.$store.dispatch(deleteArticle, this.article.slug);
        this.$vuetify.dialog.value = false;
        this.$router.push({ name: "Dashboard" });
      } catch (err) {
        console.error(err);
      }
    },
    dateFormatter(date) {
      return moment(date).format("ll");
    }
  }
};
</script>
