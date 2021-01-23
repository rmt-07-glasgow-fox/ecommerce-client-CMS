<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style="margin-left:30px; color: #c9cbff">E-Commerce</a>
        </div>
          <!--  Sign Out & Add New Task Button-->
          <button class="btn btn-primary" type="submit" id="add-task-btn" style="margin-right: 20px; width: 200px; border-radius: 10px" @click.prevent="addProduct">Add New Product</button>
          <button class="btn btn-danger" type="submit" @click.prevent="signOut" style="margin-right: 30px; width: 150px; border-radius: 10px">Sign Out</button>
    </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut () {
      localStorage.clear()
      this.$router.push('/login')
    },
    addProduct () {
      this.$router.push('/addProduct')
    }
  }
}
</script>

<style scoped>
.btn-primary{
  color:#fff;
  background-color:#a6f0c6;
  border-color: white;
}

.btn-danger{
  color: #fff;
  background-color: #ff4646;
  border-color: white;
}

.bg-custom{
  background-color: #583d72;
}
</style>
