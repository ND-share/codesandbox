<template>
  <section class="section">
    <div class="container">
      <h1>番外編 API 呼出検証</h1>
      <hr />
      asyncData {{ date }}
      <hr />
      created {{ cratedDate }}
      <hr />
      mounted {{ mountedDate }}
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/date', {})
    // SSR: trueはERRORになる。SSR: falseにすれば動く面白い。
    // const res = await $axios.get('/api/test', this.params)
    const date = res.data.date
    return { date }
  },
  data() {
    return {
      cratedDate: '',
      mountedDate: '',
    }
  },
  computed: {
    params() {
      return {
        foo: 'foo',
        bar: 'bar',
      }
    },
  },
  created() {
    this.$axios.get('/api/date', this.params).then((res) => {
      this.cratedDate = res.data.date
    })
  },
  mounted() {
    this.$axios.get('/api/date', this.params).then((res) => {
      this.mountedDate = res.data.date
    })
  },
}
</script>
