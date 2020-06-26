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
