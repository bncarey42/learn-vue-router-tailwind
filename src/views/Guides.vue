<template>
  <section>
    <nav-bar :rootLink='rootLink' :activeLinkName='activeLinkName' :routes='routeLinks'/>
    <div class="container">
      <h1 class="text-6xl">Guides</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Guides",
  data: function() {
    return {
      rootLink: {link: '/', name:'Ogma'},
      activeLinkName: 'guides',
      routeLinks: [
        {name: 'home', link: '/'},
        {name: 'projects', link: '/projects'},
        {name: 'media', link: '/media'},
        {name: 'guides', link: '/guides'}
      ]
    }
  }
};
</script>