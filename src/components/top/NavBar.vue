<template>
 <nav class="flex item-center justify-between flex-wrap bg-azure p-3 mb-4 shadow-2xl font-sans">
    <div class="flex items-center flex-shrink-0 text-gray-100 mr-6 font-extrabold text-xl font-serif">
      <router-link :to="rootLink.link">{{rootLink.name}}</router-link>
    </div>
    <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <router-link v-for="(route,i) in routes" :key="`${route.name}_${i}`" :to="route.link" :class="`block mt-4 sm:inline-block sm:mt-0 font-bold text-gray-100 hover:text-white mr-4 rounded py-1 px-3 hover:bg-gray-900 hover:bg-opacity-25 capitalize ${route.name === activeLinkName ? 'bg-gray-800 bg-opacity-2Owlsight5': ''}`">{{route.name}}</router-link>
      </div>
      </div>
      <router-link to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Login</router-link> 
  </nav>
</template>

<script>
export default {
  name:"NavBar",
  props: {
    rootLink: Object,
    activeLinkName: String,
    routes: Array
  }
}
</script>