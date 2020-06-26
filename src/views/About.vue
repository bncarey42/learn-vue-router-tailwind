<template>
  <section>
    <nav-bar :rootLink='rootLink' :activeLinkName='activeLinkName' :routes='routeLinks'/>
    <div class="container">
      <h1 class="text-6xl">About</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      rootLink: {link: '/', name:'Owlsight'},
      activeLinkName: 'about',
      routeLinks: [
        {name: 'about', link: '/about'},
        {name: 'blog', link: '/blog'},
        {name: 'contact', link: '/contact'}
      ]
    }
  }
}
</script>