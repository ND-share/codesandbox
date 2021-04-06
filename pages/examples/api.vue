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
  async asyncData({ $axios, $moment }) {
    let date = null
    // 画面更新や直接更新などの場合にサーバーサイドで呼び出される
    if (process.server) {
      const res = await $axios.get('/api/date', {})
      date = $moment(res.data.date).format('h:mm:ss:SS').toString()
      // nuxt-link router.pushなどはクライアントサイドで呼び出される
    } else {
      date = 'クライアントサイドで呼び出されました。'
    }
    /**
     * asyncData内ではthisが利用できない
     *
     * thisが使えないためERRORとなる例
     * const res = await $axios.get('/api/test', this.params)
     * const date = this.$moment(res.data.date).format('h:mm:ss:SS')
     */
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
        this.cratedDate = this.$moment(res.data.date).format('h:mm:ss:SS')
      })
    } else {
      this.cratedDate = 'こちらはローカル環境でのみ実行可能です。'
    }
  },
  mounted() {
    if (this.env === 'development') {
      this.$axios.get('/api/date', this.params).then((res) => {
        this.mountedDate = this.$moment(res.data.date).format('h:mm:ss:SS')
      })
    } else {
      this.mountedDate = 'こちらはローカル環境でのみ実行可能です。'
    }
  },
}
</script>
