<template>
<div class="container-fluid">
  <section id="login">
      <div class="container-fluid">
        <div class="form">
          <h2>Admin Login</h2>
          <form action="" @submit.prevent="login">
            <div class="inputBox">
              <input type="text" placeholder="Username" v-model="username">
            </div>
            <div class="inputBox">
              <input type="password" placeholder="Password" v-model="password">
            </div>
            <div class="inputBox">
              <input type="submit" value="Login">
            </div>
          </form>
        </div>
      </div>
  </section>
</div>
</template>

<style lang="css" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

html {
  background: gray;
}

#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(29, 27, 27);
}

#login .color {
  position: absolute;
  filter: blur(150px);
}

#login {
  position: fixed;
  width: 400px;
  min-height: 400px;
  background: rgba(68, 66, 66, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(22, 21, 21, 0.5);
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

</style>
