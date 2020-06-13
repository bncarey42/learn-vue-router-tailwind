<template>
  <section>
    <nav-bar :rootLink='rootLink' :activeLinkName='activeLinkName' :routes='routeLinks'/>
    <div class="container">
      <div id="app" class="items-center content-center text-center text-gray-900">
        <div class="rounded bg-emerald-to-right-45 w-20 shadow-md m-auto object-center text-green-200 text-6xl">O</div>
        <hellow msg="Welcome to Ogma" subMsg="Your home for qualitative research data storage and analysis"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      rootLink: {link: '/', name:'Ogma'},
      activeLinkName: 'home',
      routeLinks: [
        {name: 'home', link: '/'},
        {name: 'projects', link: '/projects'},
        {name: 'media', link: '/media'},
        {name: 'guides', link: '/guides'}
      ]
    }
  }
}
</script>