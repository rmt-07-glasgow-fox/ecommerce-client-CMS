<template>
    <div>
        <div id="add">
            <div id="add-box" class="col-4 mx-auto">
                <div id="title-form">
                    <h1 style="margin-top: 30px; margin-left: 15%;"><b>Add Product</b></h1>
                </div>
                <form class="d-flex flex-column">
                    <div id="form-add">
                        <label for="email" id="form-label">name</label>
                        <input type="text" id="form-input" placeholder="example:  sepatu">
                    </div>
                    <div id="form-add">
                        <label for="email" id="form-label">price</label>
                        <input type="text" id="form-input" placeholder="example:  10000">
                    </div>
                    <div id="form-add">
                        <label for="email" id="form-label">stock</label>
                        <input type="text" id="form-input" placeholder="example:  50">
                    </div>
                    <div id="form-add">
                        <label for="email" id="form-label">image url</label>
                        <input type="text" id="form-input" placeholder="example:  http://image.jpg">
                    </div>
                    <button class="shadow-lg" type="submit" id="btn-add">add</button>
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
  #add {
    height: 600px;
  }
  #add-box {
    width: 400px;
    margin-top: 70px;
    height: 580px;
    background-color: rgb(243, 242, 242);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 30px;
  }
  #form-add {
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
  #btn-add {
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
  #btn-add:hover {
    background-color: transparent;
    color: black;
    outline: none;
    transition: 0.5s;
  }
</style>
