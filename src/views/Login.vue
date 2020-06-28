<template>
  <section>
    <nav-bar :rootLink="rootLink" />
    <div class="container items-center content-center text-gray-800">
      <div class="w-full max-w-2xl m-auto mt-32">
        <div
          class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-green-900 border-opacity-25"
        >
          <div class="mb-4">
            <div class="border rounded w-full py-3 px-3 bg-white flex">
              <input
                class="appearance-none text-gray-700 leading-tight focus:outline-none flex-grow"
                id="username"
                type="text"
                placeholder="Username"
              />
              <!-- <router-link to="/forgot" class="m-0 rounded-sm border border-gray-400 text-gray-400 hover:border-red-400 hover:text-red-400 px-2 py-1">I Forgot</router-link> -->
            </div>
          </div>
          <div class="mb-4">
            <div
              :class="`border ${passwordError ? 'border-red-500':'' } rounded w-full py-2 px-3 bg-white flex`"
            >
              <input
                class="appearance-none text-gray-700 leading-tight focus:outline-none flex-grow"
                id="password"
                type="password"
                placeholder="Password"
              />
              <router-link
                to="/forgot"
                class="m-0 rounded-sm border border-gray-400 text-gray-400 hover:border-red-400 hover:text-red-400 px-2 py-1"
              >I Forgot</router-link>
            </div>
            <p class="text-red-500 text-xs italic" v-if="passwordError">{{ passwordErrorMsg }}</p>
          </div>
          <div class="flex items-center justify-between">
            <router-link
              class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              @click="console.log('login')"
              to="/secure"
            >Sign In</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      rootLink: { link: "/", name: "Owlsight" },
      passwordError: false,
      passwordErrorMsg: "Please choose a password.",
      forgot: false
    };
  },
  methods: {}
};
</script>
