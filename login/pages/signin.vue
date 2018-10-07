<template>
  <section class="container">
    <div>
      <h1 class="title">
        Login Page
      </h1>
      <h2 class="subtitle">
        after long will redirect to: {{ callback }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    if (context.route.query.callback) { 
      // context.state.success(context.route.query.callback)
      return { callback: context.route.query.callback }
    } else {
      return { callback: 'error, callback not defined' }
    }
  }
}
</script>