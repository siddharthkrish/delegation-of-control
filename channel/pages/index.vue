<template>
  <section class="container">
    <div>
      <h1 class="title">
        channel
      </h1>
      <h2 class="subtitle">
        a simple channel application
      </h2>
      <signin/>
    </div>
  </section>
</template>

<script>
import Signin from '~/components/Signin.vue'

export default {
  components: {
    Signin
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
