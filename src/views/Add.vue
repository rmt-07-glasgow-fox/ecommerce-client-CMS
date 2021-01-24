<template>
<div class="d-flex justify-content-center">
  <video src="https://assets.mixkit.co/videos/preview/mixkit-coffee-beans-falling-into-a-coffee-pot-4985-large.mp4" muted loop autoplay></video>
  <div class="overlay"></div>
  <section id="login">
      <div class="container-fluid ">
        <div class="form">
          <h2>Add Product</h2>
          <form action="" @submit.prevent="addProduct">
            <div class="inputBox">
              <input type="text" placeholder="Product Name" v-model="addedProduct.name">
            </div>
            <div class="inputBox">
              <input type="text" placeholder="Url Product" v-model="addedProduct.url">
            </div>
            <div class="inputBox">
              <input type="text" placeholder="Product Price" v-model="addedProduct.price">
            </div>
            <div class="inputBox">
              <input type="text" placeholder="Stock" v-model="addedProduct.stock">
            </div>
            <div class="inputBox">
              <input type="submit" value="add">
            </div>
          </form>
        </div>
      </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      addedProduct: {
        name: '',
        url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.addedProduct)
    }
  }
}
</script>

<style lang="css" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

html {
  background: dimgray;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.overlay
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262727;
  mix-blend-mode: overlay;
}

.d-flex  {
  padding-top: 60px;
}

#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(250, 242, 242);
}

#login .color {
  position: absolute;
  filter: blur(150px);
}

#login {
  position: fixed;
  width: 400px;
  min-height: 400px;
  background: rgba(243, 241, 241, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(248, 246, 246, 0.5);
  border-right: 1px solid rgba(27, 26, 26, 0.2);
  border-bottom: 1px solid rgba(15, 15, 15, 0.2);
}

.form {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
}

.form .inputBox {
  width: 100%;
  margin-top: 20px;
}

.form .inputBox input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(27, 26, 26, 0.2);
  border-bottom: 1px solid rgba(2, 2, 2, 0.2);
  font-size: 16px;
  Letter-spacing: 1px;
  color: rgb(48, 46, 46);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form .inputBox input::placeholder {
  color: rgb(71, 67, 67);
}

.form .inputBox input[type="submit"] {
  height: 36px;
  background: #fff;
  color: rgb(63, 62, 62);
  width: 80px;
  max-width: 100px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
  padding: 4px 5px;
}

h2 {
  color: #fff
}

</style>
