<template>
  <div id="product">
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
                                <span class="text">Add Product</span>
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
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
                                        <tr v-for="product in products" :key="product.id">
                                            <td>{{ product.name }}</td>
                                            <td>
                                              <img :src="product.image_url" alt="products.name" width="100" height="100">
                                            </td>
                                            <td>{{ product.price }}</td>
                                            <td>{{ product.stock }}</td>
                                            <td>
                                                <router-link class="btn btn-info btn-sm mr-1" :to="`product/edit/${product.id}`"><i class="fa fa-edit"></i></router-link>
                                                <a href="#" class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                                <!-- <a href="#" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">
                                                    <i class="fas fa-trash"></i>
                                                </a> -->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
    <AddModal/>
  </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'
import Sidebar from '../components/Sidebar.vue'
import LogoutModal from '../components/LogoutModal.vue'
import AddModal from '../components/AddModal.vue'
import ScrollTopBtn from '../components/ScrollTopBtn.vue'
import Footer from '../components/Footer.vue'

import { mapState } from 'vuex'

export default {
  name: 'Product',
  components: {
    Topbar,
    Sidebar,
    AddModal,
    LogoutModal,
    ScrollTopBtn,
    Footer
  },
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err, 'gabisa delete gan!')
        })
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>
