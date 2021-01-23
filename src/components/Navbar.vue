<template>
  <div id='nav'>
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='#'>
          <img
            src='https://cdn.discordapp.com/attachments/773419002092847138/795318284852789258/hacktiv8_1.png'
          />
        </a>
        <a
          role='button'
          class='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' class='navbar-menu'>
        <div class='navbar-start'>
          <router-link class='navbar-item' to='/login'>Login</router-link>
          <router-link class='navbar-item' to='/'>Dashboard</router-link>
          <!-- $router.push(/home) -->
          <router-link class='navbar-item' to='/add'>Add</router-link>
          <router-link class='navbar-item' to='/edit'>Edit</router-link>
        </div>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <a @click.passive='logout' class='button is-primary'>
                <strong>Log out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$toasted.show('are you sure?', {
        action: [
          {
            text: 'yes',
            onClick: (e, toastObject) => {
              localStorage.clear()
              this.$router.push('/login')
            }
          },
          {
            text: 'no',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        ]
      })
    }
  }
}
</script>
<style>
</style>
