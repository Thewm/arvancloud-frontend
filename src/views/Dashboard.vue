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
          <h1 class="display-2 font-weight-regular">All Posts</h1>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="11">
            <Posts :headers="headers" :items="items" :page="page"></Posts>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="6">
            <v-pagination
              v-if="paginate"
              v-model="page"
              :length="pageCount"
              total-visible="10"
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
import Posts from "@/components/posts/Posts";
export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
    Posts
  },
  data() {
    return {
      page: 1,
      headers: [
        {
          text: "#",
          value: "title",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Title",
          value: "name",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Authors",
          value: "name",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Tags",
          value: "name",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Excerpt",
          value: "name",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "",
          align: "right",
          value: "carbs",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        },
        {
          text: "Created",
          align: "center",
          value: "action",
          class: "table_header--text subtitle-1 font-weight-bold form_primary"
        }
      ],
      items: [
        {
          title: 1,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        },
        {
          title: 1,
          name: "Ice cream",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        }
      ]
    };
  },
  computed: {
    paginate() {
      let pages = Math.ceil(this.items.length / 10);
      if (pages <= 1) {
        return false;
      } else {
        return true;
      }
    },
    pageCount() {
      let pageCounter = Math.ceil(this.items.length / 10);
      return pageCounter;
    }
  },
  methods: {
    handlePage(value) {
      this.page = value;
      if (this.page === 1) {
        this.$router.push("/articles");
      } else {
        this.$router.push(`articles/page/${this.page}`);
      }
    }
  }
};
</script>
