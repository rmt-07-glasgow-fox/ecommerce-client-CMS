<template>
  <div class="w-100">
    <div class="d-flex justify-content-between w-100 px-3 py-2 text-white">
        <div>
          <button @click="isAdd = !isAdd" class="btn btn-success">New Product</button>
        </div>
        <div class="mx-2">
          <input class="form-control" id="search-task" type="search" placeholder="Search Product">
        </div>
    </div>
    <div class="d-flex justify-content-between h-100 p-3 bg-light rounded-start">
      <div class="w-70 rounded">
        <div v-if="isAdd" class="p-3 mb-2 bg-white rounded shadow-sm">
          <FormAdd
            @closeAdd="closeAdd"
          ></FormAdd>
        </div>
        <div :class="checkAdd">
          <ListProducts></ListProducts>
        </div>
      </div>
      <div class="w-30 p-3 bg-white rounded shadow-sm">
        <CardProducts></CardProducts>
      </div>
    </div>
  </div>
</template>

<script>
import FormAdd from './FormAdd'
import ListProducts from './ListProducts'
import CardProducts from './CardProducts'

export default {
  name: 'Products',
  components: {
    FormAdd,
    ListProducts,
    CardProducts
  },
  data () {
    return {
      isAdd: false
    }
  },
  methods: {
    closeAdd () {
      this.isAdd = false
    }
  },
  computed: {
    checkAdd () {
      if (this.isAdd) {
        return { 'table-wraper': true }
      } else {
        return { 'table-wraper2': true }
      }
    }
  }
}
</script>

<style>
.table-wraper {
  overflow-y: auto;
  max-height: 20rem;
}
.table-wraper2 {
  overflow-y: auto;
  max-height: 37rem;
}
.w-70 {
  width: 70%;
}
.w-30 {
  width: 30%;
  margin-left: .5rem;
}
</style>
