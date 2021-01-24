<template>
  <div class="dashboard">
    <div class='container'>
      <NavbarDashboard />
    </div>
    <div class="container">
      <ContentCard />
    </div>
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import ContentCard from '../components/ContentCard'
export default {
  components: {
    NavbarDashboard,
    ContentCard
  }
}
</script>
