<template>
  <section>
    <nav-bar :rootLink='rootLink' />
    <div class="container items-center content-center text-gray-800">
        <div class="w-full max-w-3xl m-auto mt-25">
          <div class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-green-900 border-opacity-25">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-sans text-xl font-bold mb-2" 
                     for="username">
                Username
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                     id="username" 
                     type="text" 
                     placeholder="Username">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-sans text-xl font-bold mb-2" 
                     for="password">
                Password
              </label>
              <input :class="`appearance-none border ${passwordError ? 'border-red-500':'' } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none`" 
                     id="password" 
                     type="password" 
                     placeholder="Password">
              <p class="text-red-500 text-xs italic" v-if="passwordError">{{ passwordErrorMsg }}</p>
            </div>
            <div class="flex items-center justify-between">
              <router-link class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                      @click="console.log('login')"
                      to="/secure">
                Sign In
              </router-link>
              <a class="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600" href="#" @click.stop.prevent="forgot = true">
               Forgot Something?
              </a>
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
      rootLink: {link: '/', 
      name:'Owlsight'},
      passwordError: false,
      passwordErrorMsg: 'Please choose a password.',
      forgot: false
    }
  },
  methods: {
    
  }
}
</script>