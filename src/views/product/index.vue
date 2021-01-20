<template>
<div class="container">
        <section class="content-header">
            <h1>
                Manage Products
            </h1>
        </section>

        <section class="content">
            <div class="row">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>

export default {
  name: 'ProductIndex'
}
</script>
