<template>
  <div class="container-fluid">
    <navbar></navbar>

    <div class="editPage container-fluid d-flex flex-wrap">
      <EditForm/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import EditForm from '@/components/EditForm.vue'

export default {
  name: 'EditPage',
  components: {
    Navbar,
    EditForm
  }
}
</script>

<style scoped>
.editPage{
  margin-top: 80px;
  width: 50%;
}
</style>
