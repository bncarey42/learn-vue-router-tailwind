<template>
  <section>
    <nav-bar :rootLink='rootLink' :activeLinkName='activeLinkName' :routes='routeLinks'/>
    <div class="container">
      <h1 class="text-6xl">Media</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Media",
  data: function() {
    return {
      rootLink: {link: '/', name:'Owlsight'},
      activeLinkName: 'media',
      routeLinks: [
        {name: 'projects', link: '/secure/projects'},
        {name: 'media', link: '/secure/media'},
        {name: 'guides', link: '/secure/guides'}
      ]
    }
  }
}
</script>