<template>
  <v-navigation-drawer v-model="$store.state.drawer" dark app mini-variant class="accent">
    <v-list flat>
      <!-- Logo -->
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>E-Commerce Admin</v-list-item-title>
      </v-list-item>
      <!-- List Menu -->
      <v-list-item-group v-model="model" color="indigo">
        <v-tooltip right v-for="(item, i) in items" :key="i">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item router :to="item.router" v-bind="attrs" v-on="on">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-list-item-group>
    </v-list>
    <!-- Logout Button -->
    <template v-slot:append>
      <div class="p-2">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item class="px-2" link @click="logout" color="indigo" v-bind="attrs" v-on="on">
              <v-list-item-avatar>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </template>
          <span>Logout</span>
        </v-tooltip>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>

export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-home-city', router: '/' },
        { title: 'Products', icon: 'mdi-shopping', router: '/products' }
      ],
      model: 1
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
