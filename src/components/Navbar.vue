<template>
  <nav>
    <div>
       <a href="">Style By Manda</a>
    </div>
    <div>
        <a href="#" @click.prevent="toDashboard">See Products</a>
        <a href="#" @click.prevent="add">Add Product</a>
        <a href="#" @click.prevent="logout">Logout</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toDashboard () {
      this.$router.push('/products')
    },
    add () {
      this.$router.push('/products/add')
    },
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
