<template>
  <v-navigation-drawer
    expand-on-hover
    v-model="$store.state.drawer" dark app mini-variant class="accent">
    <v-list flat>
      <!-- Logo -->
      <v-list-item class="px-2" :to="{ name: 'Dashboard' }">
        <v-list-item-avatar>
          <v-img src="@/assets/logo-hacktiv.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>E-Commerce Admin</v-list-item-title>
      </v-list-item>
      <!-- List Menu -->
      <v-list-item-group v-model="model" color="indigo">
        <v-list-item
          v-for="(item, i) in items" :key="i"
          router :to="item.router">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- Logout Button -->
    <template v-slot:append>
      <div class="p-2">
        <v-list-item class="px-2" link @click="logout" color="red">
          <v-list-item-avatar>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
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
        { title: 'Products', icon: 'mdi-shopping', router: '/products' },
        { title: 'Banners', icon: 'mdi-image-area', router: '/banners' }
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
