<template>
  <div class="login" id="sign-in">
    <nuxt-link to="signin">login</nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
      login: function() {
        router.push({ name: "signin"})
      }
    }
}
</script>

<style>
.login button {
  background:    #ffffff;
  border:        1px solid #444444;
  border-radius: 4px;
  padding:       8px 20px;
  color:         #444444;
  display:       inline-block;
  font:          normal 400 18px/1 "Ubuntu", sans-serif;
  text-align:    center;
  text-shadow:   none;
}
</style>