<template>
  <section>
    <nav-bar :rootLink='rootLink' :activeLinkName='activeLinkName' :routes='routeLinks'/>
    <div class="container">
      <h1 class="text-6xl">Contact</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {
      rootLink: {link: '/', name:'Owlsight'},
      activeLinkName: 'contact',
      routeLinks: [
        {name: 'about', link: '/about'},
        {name: 'blog', link: '/blog'},
        {name: 'contact', link: '/contact'}
      ]
    }
  }
}
</script>