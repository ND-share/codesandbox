<template>
  <section class="section">
    <div class="container">
      <h1>{{ title }}</h1>
      <hr />
      <div class="mb-3">asyncData: {{ date }}</div>
      <div class="mb-3">created: {{ cratedDate }}</div>
      <div class="mb-3">mounted: {{ mountedDate }}</div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/date', {})
    // ERRORになる。
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
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return '番外編 API 呼出検証'
    },
    /**
     * computedで定義した値をasyncData, created, mountedで利用できるかの検証に使用するパラメータ
     */
    params() {
      return {
        foo: 'foo',
        bar: 'bar',
      }
    },

    env() {
      return process.env.NODE_ENV
    },
  },
  created() {
    if (this.env === 'development') {
      this.$axios.get('/api/date', this.params).then((res) => {
        this.cratedDate = res.data.date
      })
    } else {
      this.cratedDate = 'こちらははローカル環境でのみ実行可能です。'
    }
  },
  mounted() {
    if (this.env === 'development') {
      this.$axios.get('/api/date', this.params).then((res) => {
        this.mountedDate = res.data.date
      })
    } else {
      this.mountedDate = 'こちらははローカル環境でのみ実行可能です。'
    }
  },
}
</script>
