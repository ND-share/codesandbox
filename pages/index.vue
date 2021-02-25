<template>
  <section class="section">
    <div class="container">
      <h1>Capter1 イベントハンドリング</h1>
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
              <li>v-model（チェックボックス）</li>
              <li>@change</li>
              <li>@blur</li>
            </ul>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>v-bind:value, v-on:input</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <input
              type="text"
              v-bind:value="bindMessage"
              placeholder="入力"
              v-on:input="bindMessage = $event.target.value"
            />
            <p class="mt-2">結果: {{ bindMessage }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>:value, @input</dt>
              <dd>
                v-bind:value,
                v-on:inputの短縮記法です。v-modelを利用して簡単に書く事も可能です。
              </dd>
            </dl>
            <input
              type="text"
              :value="omittedMessage"
              placeholder="入力"
              @input="omittedMessage = $event.target.value"
            />
            <p class="mt-2">結果: {{ omittedMessage }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>v-model（テキスト）</dt>
              <dd>v-bind, v-onのシンタックスシュガーです。</dd>
            </dl>
            <input v-model="modelMessage" type="text" placeholder="入力" />
            <p class="mt-2">結果: {{ modelMessage }}</p>
            <p>typeof {{ typeof modelMessage }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>v-model.number</dt>
              <dd>
                v-modelの修飾子でnumberを返却します。未入力時、number以外入力されている場合はstringを返却する為バリデーションなどで制御が必要です。
              </dd>
            </dl>
            <input
              v-model.number="modelNumber"
              type="text"
              placeholder="入力"
            />
            <p class="mt-2">結果: {{ modelNumber }}</p>
            <p>typeof {{ typeof modelNumber }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>v-model（チェックボックス）</dt>
            </dl>
            <input v-model="vModelCheckBox" type="checkbox" />
            <p class="mt-2">結果: {{ vModelCheckBox }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>@change</dt>
              <dd>
                チェックボックスやラジオボックスなどの状態が変更された時などに関連する何かを処理したい際に利用します。
              </dd>
            </dl>
            <input
              v-model="valueCheckBox"
              type="checkbox"
              @change="changeCheckBox()"
            />
            <p class="mt-2">結果: {{ valueCheckBoxMessage }}</p>
          </div>

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
            <p class="mt-2">結果: {{ yubin }}</p>
          </div>
        </div>
      </article>
      <hr />
      <article class="mb-6">
        <h2>ボタン</h2>
        <div class="columns">
          <div class="column is-12">
            <ul>
              <li>@click</li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-6">
            <dl>
              <dt>@click</dt>
              <dd>v-on:clickの短縮記法です。</dd>
            </dl>
            <button class="button is-info" @click="countUp()">
              カウンター
            </button>
            <p>結果: {{ count }}</p>
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
      yubin: '',
      valueCheckBox: false,
      vModelCheckBox: false,
      valueCheckBoxMessage: '未選択',
    }
  },
  methods: {
    /**
     * 郵便番号検索
     * @param {String} zip 郵便番号
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
    /**
     * チェックボックスの更新時実行イベント
     */
    changeCheckBox() {
      this.valueCheckBoxMessage = this.valueCheckBox ? '選択済' : '未選択'
    },
    /**
     * カウントアップイベント - ボタン押下でカウント+1
     */
    countUp() {
      return this.count++
    },
  },
}
</script>
