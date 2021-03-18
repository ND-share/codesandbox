<template>
  <section class="section pt-1">
    <div class="container">
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
              <dt>v-model（テキスト、テキストエリア）</dt>
              <dd>:value, @inputのシンタックスシュガーです。</dd>
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
              <dt>:checked, @change</dt>
              <dd>
                チェックボックス、ラジオボックスを更新する時に利用します。
              </dd>
            </dl>
            <input
              :checked="valueCheckBox"
              type="checkbox"
              @change="valueCheckBox = $event.target.checked"
            />
            <p class="mt-2">結果: {{ valueCheckBox }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>v-model（チェックボックス, ラジオボタン）</dt>
              <dd>:checked, @changeのシンタックスシュガーです。</dd>
            </dl>
            <input v-model="vModelCheckBox" type="checkbox" />
            <p class="mt-2">結果: {{ vModelCheckBox }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>v-model, @changeの複合</dt>
              <dd>更新とメソッド実行を同時に行うことも可能です。</dd>
            </dl>
            <input
              v-model="vModelChangeCheckBox"
              type="checkbox"
              @change="changeCheckBox()"
            />
            <p class="mt-2">結果: {{ vModelChangeCheckBoxMessage }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>:value, @change</dt>
              <dd>セレクトボックスを更新する時に利用します。</dd>
            </dl>
            <select
              :value="valueSelected"
              @change="valueSelected = $event.target.value"
            >
              <option value="1">hoge</option>
              <option value="2">foo</option>
              <option value="3">bar</option>
            </select>
            <p class="mt-2">結果: {{ valueSelected }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>v-model（セレクトボックス）</dt>
              <dd>:value, @changeのシンタックスシュガーです。</dd>
            </dl>
            <select v-model="vModelSlected">
              <option value="1">hoge</option>
              <option value="2">foo</option>
              <option value="3">bar</option>
            </select>
            <p class="mt-2">結果: {{ vModelSlected }}</p>
          </div>

          <div class="column is-6">
            <dl>
              <dt>@blur</dt>
              <dd>フォーカスアウトした場合などに利用します。</dd>
            </dl>
            <input
              v-model="zip"
              type="text"
              placeholder="入力（郵便番号）"
              @blur="searchAddress($event.target.value)"
            />
            <p class="mt-2">結果: {{ address }}</p>
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
      return 'Chapter1 イベントハンドリング'
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
