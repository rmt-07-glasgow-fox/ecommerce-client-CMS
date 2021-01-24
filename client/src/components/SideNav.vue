<template>
  <div class="w-100">
    <ul class="list-unstyled components d-flex align-items-top justify-content-start flex-column">
      <h3>Content Control</h3>
      <li class="active mt-2">
          <div href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle set-items">
            Product
          </div>
          <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                  <div class="set-item drop-item" @click.prevent="listProductPage">
                    <a class="active">List product</a>
                  </div>
              </li>
              <li>
                  <div class="set-item drop-item" @click="addProductPage">
                    <a class="active">Add product</a>
                  </div>
              </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    addProductPage () {
      this.$router.push('/addproduct')
    },
    listProductPage () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

.set-items, .set-item{
  width: 100% i !important;
  height: 40px;
  padding-left: 20px;
  text-align: start;
  font-size: 20px;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #303030;
}

.set-items:hover, .set-item:hover{
  cursor: pointer;
  background: grey;
}

.set-item{
  background-color: #351f39;
}

.set-item a{
  font-size: 15px;
  text-decoration: none;
  color: white;
}

.set-item a:hover{
  text-decoration: none;
  color: white;
}

li {
  height: 40px;
}
</style>
