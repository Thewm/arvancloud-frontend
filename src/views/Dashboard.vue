<template>
  <v-container>
    <v-row>
      <v-col>
        <Header />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <Sidebar />
      <v-col>
        <v-row class="ml-3 mb-8">
          <v-col cols="8">
            <h1 class="display-2 font-weight-regular">All Posts</h1>
          </v-col>
          <v-col v-if="false">
            <v-alert text tile color="success" transition="scale-transition">
              <div>
                <strong class="mr-2">Well done!</strong>
                <span>Article created succeccfully</span>
              </div>
              <div>
                <strong class="mr-2">Well done!</strong>
                <span>Article updated succeccfully</span>
              </div>
              <div><span>Article updated succeccfully</span></div>
            </v-alert>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="11">
            <Posts
              :headers="tableHeader"
              :items="articles"
              :page="page"
              :isLoading="isLoading"
            />
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="6">
            <v-pagination
              v-if="showPagination"
              v-model="page"
              :length="pageCount"
              total-visible="articles.length"
              @input="handlePage"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/header/TheHeader";
import Sidebar from "@/components/sidebar/TheSidebar";
import Posts from "@/components/posts/VPosts";
import { mapGetters } from "vuex";
import { fetchArticles } from "@/store/types/actions";
export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
    Posts
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    tableHeader() {
      return [
        {
          text: "#",
          value: "hash",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Title",
          value: "title",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Authors",
          value: "author.username",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Tags",
          value: "tagList",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Excerpt",
          value: "body",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "",
          align: "right",
          value: "createdAt",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Created",
          align: "left",
          value: "action",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        }
      ];
    },
    listConfig() {
      const filters = {};
      filters.offset = this.page - 1;
      filters.limit = 10;
      return filters;
    },
    showPagination() {
      let pages = Math.ceil(this.articles.length / 10);
      return pages > 1;
    },
    pageCount() {
      return Math.ceil(this.articles.length / 10);
    },
    ...mapGetters(["articles", "isLoading"])
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch(fetchArticles, this.listConfig);
    },
    // work with @input vuetify built in event on pagination to change the route
    handlePage(value) {
      this.page = value;
      if (this.page === 1) {
        this.$router.push({ name: "Dashboard" });
      } else {
        // ASSUMPTION - when user click on two, we are going to /page/2, or if we wanna goes to /page/1 instead of 2; we should make ${this.page - 1} down below
        this.$router.push(`/articles/page/${this.page}`);
      }
    }
  }
};
</script>
