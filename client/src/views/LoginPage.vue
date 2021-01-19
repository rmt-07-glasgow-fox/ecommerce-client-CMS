<template>
    <div>
        <div id="login">
            <div id="login-box" class="col-4 mx-auto">
                <div id="title-form">
                    <h1 style="margin-top: 30px; margin-left: 15%;"><b>Admin Login</b></h1>
                </div>
                <form class="d-flex flex-column">
                    <div id="form-login">
                        <label for="email" id="form-label">email</label>
                        <input type="text" id="form-input" placeholder="email">
                    </div>
                    <div id="form-login">
                        <label for="password" id="form-label">password</label>
                        <input type="password" id="form-input" placeholder="password">
                    </div>
                    <button class="shadow-lg" type="submit" id="btn-login">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  #login {
    height: 600px;
  }
  #login-box {
    width: 400px;
    margin-top: 70px;
    height: 400px;
    background-color: rgb(243, 242, 242);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  #form-login {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10%;
    width: 60%;
    margin-left: 17%;
  }
  #form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }
  #form-input {
    margin-top: 10px;
    font-family: inherit;
    width: 110%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1rem;
    color:black;
    padding: 7px 7px;
    background: rgb(219, 219, 219);
    border-radius: 5px;
  }
  #btn-login {
    margin-top: 40px;
    width: 30%;
    height: 50px;
    margin-left: 35%;
    outline: none;
    border-radius: 5px;
    font-size: 1.5rem;
    border: 0;
    background-color: black;
    color: white;
  }
  #btn-login:hover {
    background-color: transparent;
    color: black;
    outline: none;
    transition: 0.5s;
  }
</style>
