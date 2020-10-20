<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <!-- menu DASHBOARD -->
        <v-list-item v-for="item in itemsa" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- menu KURIR -->
        <v-list-item v-for="item in itemsc" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- menu CUSTOMER -->
        <v-list-item v-for="item in itemsd" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.link"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SendTo Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>SendTo-ID &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    itemsa: [{ title: "Dashboard", icon: "dashboard", link: "home" }],
    itemsc: [{ title: "Kurir", icon: "directions_bike" }],
    itemsd: [{ title: "Customer", icon: "supervisor_account" }],
    items: [
      {
        action: "flight_takeoff",
        title: "SendTo Personal",
        active: true,
        items: [
          { title: "New Order", link: "#" },
          { title: "Process Order", link: "#" },
          { title: "Complete Order", link: "#" }
        ]
      },
      {
        action: "fastfood",
        title: "SendTo Food",
        active: true,
        items: [
          { title: "New Order", link: "#" },
          { title: "Process Order", link: "#" },
          { title: "Complete Order", link: "#" }
        ]
      },
      {
        action: "settings",
        title: "Setting",
        items: [
          { title: "Wilayah & Tarif", link: "/setting/tarif" },
          { title: "System" }]
      }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  methods: {
    logout: function() {
      //
    }
  }
};
</script>