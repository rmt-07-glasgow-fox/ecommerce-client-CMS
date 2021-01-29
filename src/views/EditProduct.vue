<template>
  <div id="editProduct">
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <Sidebar/>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <Topbar/>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary float-left">Products Table</h6>
                            <a href="#" class="btn btn-primary btn-icon-split btn-sm float-right" data-toggle="modal" data-target="#addModal">
                                <span class="icon text-white-50">
                                    <i class="fas fa-plus"></i>
                                </span>
                                <span class="text">back</span>
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <form>
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Stock</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="text" class="form-control" v-model="productById.name">
                                            </td>
                                            <td>
                                              <input type="text" class="form-control" v-model="productById.image_url">
                                            </td>
                                            <td>
                                                <input type="number" class="form-control" v-model="productById.price">
                                            </td>
                                            <td>
                                                <input type="number" class="form-control" v-model="productById.stock">
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-primary" @click="updateProduct()">Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <Footer/>
            <!-- End of Footer -->
        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <ScrollTopBtn/>

    <!-- Modal-->
    <LogoutModal/>
  </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'
import Sidebar from '../components/Sidebar.vue'
import LogoutModal from '../components/LogoutModal.vue'
import ScrollTopBtn from '../components/ScrollTopBtn.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'EditProduct',
  components: {
    Topbar,
    Sidebar,
    LogoutModal,
    ScrollTopBtn,
    Footer
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.$route.params.id)
    },
    updateProduct () {
      const payload = {
        id: +this.$route.params.id,
        name: this.productById.name,
        image_url: this.productById.image_url,
        price: +this.productById.price,
        stock: +this.productById.stock
      }

      this.$store.dispatch('updateProduct', payload)
        .then(() => {
          this.$router.push('/product')
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    currentRouteId () {
      return +this.$route.params.id
    },
    productById () {
      return this.$store.state.productById
    }
  },
  created () {
    this.editProduct()
  }
}
</script>

<style>

</style>
