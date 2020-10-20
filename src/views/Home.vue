<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12" sm="3">
        <v-card class="elevation-2">
          <v-card-title>
            <v-flex xs6>
              <v-icon class="green--text" size="72">how_to_reg</v-icon>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <h3 class="display-2 grey--text">72K</h3>
              <h6 class="caption grey--text text--lighten-1">Customers</h6>
            </v-flex>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="body-1 grey--text text--lighten-1">THIS YEAR</div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="elevation-2">
          <v-card-title>
            <v-flex xs6>
              <v-icon class="amber--text" size="72">shopping_cart</v-icon>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <h3 class="display-2 grey--text">31K</h3>
              <h6 class="caption grey--text text--lighten-1">SALES</h6>
            </v-flex>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="body-1 grey--text text--lighten-1">THIS MONTH</div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="elevation-2">
          <v-card-title>
            <v-flex xs6>
              <v-icon class="deep-orange--text" size="72">attach_money</v-icon>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <h3 class="display-2 grey--text">95K</h3>
              <h6 class="caption grey--text text--lighten-1">Revenue</h6>
            </v-flex>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="body-1 grey--text text--lighten-1">THIS MONTH</div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="elevation-2">
          <v-card-title>
            <v-flex xs6>
              <v-icon class="pink--text" size="72">work_outline</v-icon>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <h3 class="display-2 grey--text">4K</h3>
              <h6 class="caption grey--text text--lighten-1">Bookings</h6>
            </v-flex>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="body-1 grey--text text--lighten-1">THIS WEEK</div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          title: "me, Scrott, Jennifer",
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          title: "Trevor Hansen",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          title: "Britta Holt",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        }
      ],
      items2: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Videos",
          subtitle: "Feb 14, 2014"
        }
      ],
      items3: [
        {
          icon: "assignment",
          iconClass: "blue white--text",
          title: "Vacation itinerary",
          subtitle: "Jan 20, 2014"
        },
        {
          icon: "call_to_action",
          iconClass: "amber white--text",
          title: "Kitchen remodel",
          subtitle: "Jan 10, 2014"
        }
      ],
      e6: 1,
      search: "",
      selected: [],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          value: false,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          value: false,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          value: false,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          value: false,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          value: false,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          value: false,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          value: false,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          value: false,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          value: false,
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  created: function() {
    this.$root.breadcrumbs = [];
  }
};
</script>

<style scoped>
.div.row.no-gutters {
  margin-right: 1em;
  margin-left: 1em;
}
</style>