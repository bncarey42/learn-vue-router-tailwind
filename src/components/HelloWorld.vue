<template>
  <div class="hello">
    <section class="mb-5">
    <h1 class="text-6xl font-sans">{{ msg }}</h1>
    <h3 class="text-3xl font-sans">{{ subMsg }}</h3>
    <p>
      For a guides and recipes on how to configure / customize this project,<br>
      check out the
      <a class="text-green-600 hover:text-green-600 hover:underline" href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    </section>
    <!-- <h3 class="mt-10 mx-0 mb-0 text-3xl font-sans">Installed CLI Plugins</h3>
    <ul class="list-none p-0">
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3 class="mt-10 mx-0 mb-0 text-3xl font-sans">Essential Links</h3>
    <ul class="list-none p-0">
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3 class="mt-10 mx-0 mb-0 text-3xl font-sans">Ecosystem</h3>
    <ul class="list-none p-0">
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li class="inline-block p-1"><a class="text-green-600 hover:text-green-600 hover:underline" href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    subMsg: String
  }
}
</script>
