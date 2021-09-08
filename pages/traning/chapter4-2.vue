<template>
  <section class="section pt-1">
    <div class="container">
      <h1>{{ title }}</h1>
      <hr />
      https://developers-jp.googleblog.com/
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title() {
      return 'Chapter4-2 Vue Router'
    },
  },
}
</script>
