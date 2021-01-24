<template>
  <tr v-if="product.status !== true">
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.name }}</td>
    <td>{{ kursRupiah }}</td>
    <td>{{ product.stock }}</td>
  </tr>
</template>

<script>
export default {
  name: 'StopProduct',
  props: ['product'],
  computed: {
    kursRupiah () {
      const payload = +this.product.price
      // console.log(payload, '<<< payload')
      return payload.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>

</style>
