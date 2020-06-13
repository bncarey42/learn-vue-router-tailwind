<template>
  <section>
    <nav-bar :rootLink='rootLink' activeLinkName='' :routes='routeLinks'/>
    <div class="container">
      <h1 class="text-6xl">Login</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      rootLink: {link: '/', name:'Ogma'},
      routeLinks: []
    }
  }
}
</script>