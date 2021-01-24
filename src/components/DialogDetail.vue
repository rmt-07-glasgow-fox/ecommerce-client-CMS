<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          text
          class="ms-2"
          v-bind="attrs"
          v-on="on"
          v-if="params === 'Home'"
        >
          Show
        </v-btn>
        <v-btn
          color="success"
          class="ms-3"
          dark
          v-bind="attrs"
          v-on="on"
          text
          v-else
        >
         <v-icon class="me-2">mdi-details</v-icon>
          Detail
        </v-btn>
      </template>
      <v-card>
        <v-toolbar

          dark
          color="indigo accent-1"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title v-if="params === 'Home'">Product Detail</v-toolbar-title>
          <v-toolbar-title v-else>Banner Detail</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="container mt-5">
          <v-row justify="center" align="center" class="content" v-if="params === 'Home'">
            <v-col cols="9">
              <v-img :src="product.image_url" backgound-size="cover"></v-img>
            </v-col>
            <v-col cols="3">
              <v-list-item two-line>
                <v-list-item-content>
                <v-list-item-title class="mb-1">Name: </v-list-item-title>
                <v-list-subtitle class="font-weight-bold text-uppercase">{{product.name}}</v-list-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1">Image Url:  </v-list-item-title>
                  <v-list-item-subtitle><a :href="product.image_url" target="blank" class="text-decoration-none">{{product.image_url}}</a></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Stock: </v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold text-uppercase">{{product.stock}} Pcs</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Price: </v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold text-uppercase">rp {{product.price}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Category: </v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold text-uppercase">rp {{product.Category}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" class="content" v-else>
            <v-col cols="9">
              <v-img :src="banner.image_url"></v-img>
            </v-col>
            <v-col cols="3">
              <v-list-item two-line>
                <v-list-item-content>
                <v-list-item-title class="mb-1">Title: </v-list-item-title>
                <v-list-subtitle class="font-weight-bold text-uppercase">{{banner.title}}</v-list-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1">Image Url:  </v-list-item-title>
                  <v-list-item-subtitle><a :href="banner.image_url" target="blank" class="text-decoration-none">{{banner.image_url}}</a></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Status: </v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold text-uppercase">{{banner.status}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </div>
          <!-- <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogDetail',
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  props: ['banner', 'product'],
  computed: {
    params () {
      return this.$route.name
    }
  }
}
</script>

<style>
  .content {
    display: flex;
    margin-top: 50px;
  }
  .detail {
    background-color: rgb(60, 172, 209);
  }
</style>
