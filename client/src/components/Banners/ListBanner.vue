<template>
  <div>
    <div class="mb-3 bg-white p-3 rounded shadow-sm position-relative">
      <span class="fs-5 text-success mx-2">Active Banner</span>
      <span class="fs-5">: Promo Otomotif</span>
      <img :src="image" class="img-fluid rounded shadow-sm" alt="...">
      <div class="edit position-absolute bg-light p-3 rounded">
        <button class="btn btn-outline-primary btn-lg mx-2">Edit</button>
        <button class="btn btn-outline-danger btn-lg mx-2">Delete</button>
      </div>
    </div>
    <div class="mb-3 bg-white p-3 rounded shadow-sm position-relative">
      <span class="fs-5 text-secondary mx-2">Non Active Banner</span>
      <span class="fs-5">: Promo Otomotif</span>
      <img :src="image2" class="img-fluid rounded shadow-sm" alt="...">
      <div class="edit position-absolute bg-light p-3 rounded">
        <button class="btn btn-outline-primary btn-lg mx-2">Edit</button>
        <button class="btn btn-outline-danger btn-lg mx-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBanner',
  data () {
    return {
      image: 'https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/01a3786a-0c1a-4fe3-add4-ea4a93c47b00.jpg.webp',
      image2: 'https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/c6a16239-1384-47d8-9645-5158a1e1e243.jpg.webp'
    }
  }
}
</script>

<style scoped>
.edit {
  opacity: 90%;
  bottom: 3rem;
  right: 5rem;
}
img {
  object-fit: cover;
}
</style>
