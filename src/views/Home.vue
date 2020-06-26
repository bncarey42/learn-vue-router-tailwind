<template>
  <section>
    <nav-bar :rootLink='rootLink' :activeLinkName='activeLinkName' :routes='routeLinks'/>
    <div class="container">
      <div id="app" class="items-center content-center text-center text-gray-900">
        <div class="rounded bg-gray-900 w-20 shadow-2xl m-auto object-center text-gray-500 text-6xl">O</div>
        <hellow msg="Welcome to Owlsight" subMsg="Your home for qualitative research data storage and analysis"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      rootLink: {link: '/', name:'Owlsight'},
      activeLinkName: 'home',
      routeLinks: [
        {name: 'about', link: '/about'},
        {name: 'blog', link: '/blog'},
        {name: 'contact', link: '/contact'}
      ]
    }
  }
}
</script>