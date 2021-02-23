<template>
  <section class="section">
    <div class="container">
      <h1 class="mb-5">Capter1</h1>

      <article>
        <h2>データ入力系</h2>
        <div class="columns">
          <div class="column is-12">
            <ul>
              <li>input value(v-on,v-bind)</li>
              <li>input value(v-on,v-bind 省略系)</li>
              <li>v-model</li>
              <li>v-model.number</li>
              <li>blur</li>
            </ul>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>v-bind:value, v-on:input</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                aaaa
              </dd>
            </dl>
            <input
              type="text"
              v-bind:value="bindMessage"
              placeholder="入力"
              v-on:input="bindMessage = $event.target.value"
            />
            <p>結果: {{ bindMessage }}</p>
          </div>

          <div class="column is-6">
            <h3>:value, @input（v-bind:value, v-on:inputの省略系）</h3>
            <input
              type="text"
              :value="omittedMessage"
              placeholder="入力"
              @input="omittedMessage = $event.target.value"
            />
            <p>結果: {{ omittedMessage }}</p>
          </div>

          <div class="column is-6">
            <h3>v-model</h3>
            <input v-model="modelMessage" type="text" placeholder="入力" />
            <p>結果: {{ modelMessage }}</p>
            <p>typeof {{ typeof modelMessage }}</p>
          </div>

          <div class="column is-6">
            <h3>v-model.number</h3>
            <input
              v-model.number="modelNumber"
              type="text"
              placeholder="入力"
            />
            <p>結果: {{ modelNumber }}</p>
            <p>typeof {{ typeof modelNumber }}</p>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>@blur</dt>
              <dd>フォーカスアウトした場合などに利用します。</dd>
            </dl>
            <input
              v-model="zip"
              type="text"
              placeholder="入力"
              @blur="searchYubin($event.target.value)"
            />
            <p>結果: {{ yubin }}</p>
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
      zip: '',
      yubin: '',
    }
  },
  methods: {
    /**
     * 郵便番号検索
     * @param {String} address 郵便番号
     */
    async searchYubin(zip) {
      const response = await this.$axios.get(
        `https://api.zipaddress.net/?zipcode=${zip}`
      )
      this.yubin =
        response.data.code === 200
          ? `${response.data.data.pref} ${response.data.data.city}`
          : '失敗'
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.6em;
}
h2 {
  font-size: 1.4em;
}
ul {
  list-style-position: inside;
  list-style-type: disc;
}

dl {
  margin: 0 0 6px;
  dt {
    font-weight: bold;
  }
  dd {
    color: gray;
    font-size: 0.8em;
  }
}
</style>
