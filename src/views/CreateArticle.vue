<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <Header />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <Sidebar />
      <v-col>
        <v-row>
          <v-col lg="9" md="9" sm="9" class="ml-2">
            <v-row>
              <h1 class="display-1 ml-2">New Article</h1>
            </v-row>
            <v-row>
              <v-col>
                <p class="mb-2">Title</p>
                <v-text-field
                  class="rounded mb-n4"
                  dense
                  flat
                  outlined
                  solo
                  label="Title"
                  v-model="article.title"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="mb-2">Description</p>
                <v-text-field
                  class="rounded mb-n4"
                  dense
                  flat
                  outlined
                  solo
                  label="Description"
                  v-model="article.description"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="mb-2">Body</p>
                <v-textarea
                  class="mb-n4"
                  dense
                  flat
                  outlined
                  solo
                  auto-grow
                  v-model="article.body"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  elevation="0"
                  class="px-6 text-capitalize font-weight-regular"
                  color="primary"
                  :disabled="inProgress"
                  :loading="inProgress"
                  @click="createArticle()"
                >
                  Submit
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon dark>mdi-cached</v-icon>
                    </span>
                  </template>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="mt-10">
            <v-row>
              <v-col>
                <p class="mb-2">Tags</p>
                <v-text-field
                  class="rounded"
                  dense
                  flat
                  outlined
                  solo
                  label="New Tag"
                  v-model="tag"
                  @keypress.enter.prevent="addTag(tag)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card flat outlined>
                  <v-row
                    class="ml-4"
                    v-for="(tag, index) in sortTags"
                    :key="index + tag"
                  >
                    <v-checkbox :label="tag" color="logout"></v-checkbox>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { eventBus } from "@/main";
import Header from "@/components/header/TheHeader";
import Sidebar from "@/components/sidebar/TheSidebar";
import rules from "@/mixins/inputRules";
import { mapGetters } from "vuex";
import {
  fetchTags,
  publishArticle,
  editArticle,
  addTagToArticle,
  removeTagFromArticle
} from "@/store/types/actions";
export default {
  name: "CreateArticle",
  components: {
    Header,
    Sidebar
  },
  data: () => ({
    tag: null,
    inProgress: false,
    slug: null
  }),
  mixins: [rules],
  mounted() {
    this.$store.dispatch(fetchTags);
    // Using event bys to react to slug changes in dashboard and get this slug in create article
    eventBus.$on("editArticle", data => {
      this.slug = data;
    });
  },
  computed: {
    ...mapGetters(["tags", "article", "tagList"]),
    sortTags() {
      let tags = this.tags;
      return tags.sort();
    }
  },
  methods: {
    createArticle() {
      let typeOfAction = this.slug ? editArticle : publishArticle;
      this.inProgress = true;
      this.$store
        .dispatch(typeOfAction)
        .then(() => {
          this.inProgress = false;
          this.$router.push({
            name: "Dashboard"
          });
        })
        .catch(err => {
          this.inProgress = false;
          console.log(err);
        });
    },
    removeTag(tag) {
      this.$store.dispatch(removeTagFromArticle, tag);
    },
    addTag(tag) {
      this.$store.dispatch(addTagToArticle, tag);
      this.$store.dispatch(fetchTags, tag);
      this.tag = null;
    }
  }
};
</script>
<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
