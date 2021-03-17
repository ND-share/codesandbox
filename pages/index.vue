<template>
  <section class="section">
    <div class="container">
      <div class="is-flex">
        <span class="icon-text mt-2 mr-2">
          <span class="icon">
            <i class="mdi mdi-home mdi-36px"></i>
          </span>
        </span>
        <h1>{{ title }}</h1>
      </div>
      <hr />
      <article>
        <h2>研修内容</h2>
        <div class="columns mt-1">
          <div class="column is-12">
            <ul>
              <li>
                <a @click="$router.push('/chapter/chapter1')">chapter1</a>
              </li>
              <li>
                <a @click="$router.push('/chapter/chapter2')">chapter2</a>
              </li>
              <li>
                <a @click="$router.push('/examples/api')">このサイトについて</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modelMessage: '',
      omittedMessage: '',
      bindMessage: '',
      modelNumber: 0,
      count: 0,
      zip: '',
      address: '',
      valueCheckBox: false,
      vModelCheckBox: false,
      vModelChangeCheckBox: false,
      vModelChangeCheckBoxMessage: '未選択',
      valueSelected: '',
      vModelSlected: '',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return 'Home'
    },
  },
  methods: {
    /**
     * 郵便番号検索
     * @param {String} zip 郵便番号
     */
    async searchAddress(zip) {
      const response = await this.$axios.get(
        `https://api.zipaddress.net/?zipcode=${zip}`
      )
      this.address =
        response.data.code === 200
          ? `${response.data.data.pref} ${response.data.data.city}`
          : '失敗'
    },
    /**
     * チェックボックスの更新時実行イベント
     */
    changeCheckBox() {
      this.vModelChangeCheckBoxMessage = this.vModelChangeCheckBox
        ? '選択済'
        : '未選択'
    },
    /**
     * カウントアップイベント - ボタン押下でカウント+1
     */
    countUp() {
      this.count++
    },
  },
}
</script>
