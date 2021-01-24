<template>
  <div>
    <v-app-bar
      color="indigo accent-1"
      dark
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Ecommerce-CMS</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      relative
      temporary
      app
    >
      <v-list
        nav
        dense
      >
      <!-- <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list> -->
          <v-list-item class="mb-3">
          <v-list-item-avatar>
          <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgrsY1Zw5553wtz3MX7Tm6FWm-1nGG-pENw&usqp=CAU"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>

          <v-divider class="mb-3"></v-divider>

          <router-link to="/" class="text-decoration-none">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="black">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          </router-link>
          <router-link to="/banners" class="text-decoration-none text-color-black">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="black">mdi-desktop-mac</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Banner</v-list-item-title>
          </v-list-item>
          </router-link>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            @click="logout"
            block
            text
            class="font-weigth-black"
          >
            <v-icon class="me-2" color="red">mdi-logout</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    group: null

  }),
  methods: {
    logout () {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logout Successfull',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.clear()
      this.$router.push('/login', () => {})
    }
  }
}
</script>

<style>

</style>
