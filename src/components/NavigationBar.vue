<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="height: 80px">
    <div
      class="container"
      style="display: flex; justify-content: space-between"
    >
      <button class="btn btn-sm btn-primary">add New Products</button>
      <button @click="logout" class="btn btn-sm btn-success shadow">
        logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>