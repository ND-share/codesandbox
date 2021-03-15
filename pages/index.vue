<template>
  <section class="section">
    <div class="container">
      <a @click="$router.push('/chapter/chapter1')">chapter1</a>
      <a @click="$router.push('/chapter/chapter2')">chapter2</a>
      <a @click="$router.push('/examples/api')">このサイトについて</a>
      <h1>{{ title }}</h1>
      <hr />
      <article>
        <h2>フォーム入力</h2>
        <div class="columns">
          <div class="column is-12">
            <ul>
              <li>v-bind:value, v-on:input</li>
              <li>:value, @input</li>
              <li>v-model（テキスト）</li>
              <li>v-model.number</li>
              <li>:checked, @change</li>
              <li>v-model（チェックボックス, ラジオボタン）</li>
              <li>v-model, @changeの複合</li>
              <li>:value, @change</li>
              <li>v-model（セレクトボックス）</li>
              <li>@blur</li>
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
