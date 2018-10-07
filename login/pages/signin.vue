<template>
  <section class="container">
    <div>
      <h1 class="title">
        Login Page
      </h1>
      <h2 class="subtitle">
        after long will redirect to: {{ callback.uri }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    callback() {
      this.$store.state.signin.successURI = 'hello'
      if (this.$route.query.callback) { 
        // this.store.state.success(context.route.query.callback)
        // store.dispatch('success', 'hello world')
        return { uri: this.$route.query.callback }
      } else {
        return { uri: 'error, callback not defined' }
      }
    }
  }
}
</script>