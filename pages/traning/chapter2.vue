<template>
  <section class="section pt-1">
    <div class="container">
      <h1>{{ title }}</h1>
      <hr />
      <article class="mb-6">
        <div class="columns">
          <div class="column is-12">
            <ul>
              <li>v-for ディレクティブ</li>
              <li>v-if ディレクティブ</li>
              <li>computed オプション - 算出プロパティ</li>
              <li>ref 属性</li>
              <li>$nextTick メソッド</li>
            </ul>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>v-for ディレクティブ</dt>
              <dd>
                同じテンプレートを繰り返し表示したい場合はv-for
                ディレクティブを利用することができます。
              </dd>
            </dl>
            <ul>
              <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
          </div>
          <div class="column is-6">
            <dl>
              <dt>v-if ディレクティブ</dt>
              <dd>
                v-if
                ディレクティブは、条件に応じてレンダリングするかどうかを決定します。
              </dd>
            </dl>
            <template v-if="isLogin">
              <button class="button is-danger" @click="logout()">
                {{ loginButton }}
              </button>
              <div class="mt-4 is-flex is-mobile">
                <div class="mr-2">
                  <figure class="image is-64x64">
                    <img class="is-rounded" src="https://picsum.photos/100" />
                  </figure>
                </div>
                <div>
                  <dl>
                    <dt>田中 太朗</dt>
                    <dd>自己紹介</dd>
                  </dl>
                </div>
              </div>
            </template>
            <template v-else>
              <button class="button is-info" @click="login()">
                {{ loginButton }}
              </button>
            </template>
          </div>
          <div class="column is-6">
            <dl>
              <dt>computed オプション - 算出プロパティ</dt>
              <dd>参照しているプロパティが更新された際に値が更新されます。</dd>
            </dl>
            <input v-model="text" type="text" placeholder="入力" />
            <p class="mt-2">結果: {{ reverseText }}</p>
          </div>
        </div>
        <div>
          <div class="columns is-multiline">
            <div class="column is-6">
              <dl>
                <dt>ref属性</dt>
                <dd>
                  DOM要素にref属性を付与しておくと、コードから参照できるようになります。
                  ref属性を付与したDOM要素には、<code>refs</code>を使ってアクセスすることができます。
                </dd>
              </dl>
              <p>ref属性を指定したコンポーネントのメソッドを呼び出す。</p>
              <div class="mt-2">
                <button class="button is-info" @click="openDialog">
                  モーダルを表示
                </button>
              </div>
            </div>
            <div class="column is-6">
              <dl>
                <dt>$nextTick メソッド</dt>
                <dd>
                  $nextTick
                  メソッドはFunctionをパラメータに受け取り、DOM更新後に実行します。プロパティを更新しても、即時にDOMに反映されるわけではないため、このようなこのような$nextTickを利用した考慮が必要となります。
                </dd>
              </dl>
              <p>
                Aまたはaから始まる文字の場合赤,Bまたはbから始まる文字の場合緑を付与する。
              </p>
              <input
                v-model="value"
                type="text"
                placeholder="リストに追加する"
              />
              <button class="button is-info is-small" @click="pushList">
                追加
              </button>
              <ul id="texts">
                <li
                  v-for="(textInList, textIndex) in listOfTexts"
                  :key="textIndex"
                >
                  {{ textInList }}
                </li>
              </ul>
            </div>
            <div class="column is-6">
              <dl>
                <dt>ref 属性と$nextTick メソッドのサンプル</dt>
                <dd>
                  以下はref
                  属性を指定した要素から値を取得する場合を想定して作成しています。以下の様に期待していた値が取得できないことがあります。
                </dd>
              </dl>
              <p>
                $nextTick前：textContentの内容は【変更後】である。
                {{ beforeNextTick }}
              </p>
              <p>
                $nextTick後：textContentの内容は【変更後】である。
                {{ afterNextTick }}
              </p>
              <p>
                結果：<span ref="text">{{ refText }}</span>
              </p>
              <div class="mt-2">
                <button class="button is-info" @click="tryReferenceChange">
                  textContentの変更を確認する
                </button>
              </div>
            </div>
          </div>
          <base-modal ref="dialog" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
// nuxt2.15現在 オートインポート設定で$refsでコンポーネントを呼び出すとundefinedとなる場合があるため注意
import BaseModal from '~/components/BaseModal'

export default {
  components: {
    BaseModal,
  },
  data() {
    return {
      isLogin: false,
      users: [
        { id: 1, name: '田中' },
        { id: 2, name: '鈴木' },
        { id: 3, name: '佐藤' },
        { id: 4, name: '伊藤' },
      ],
      text: '反転します',
      refText: '変更前',
      listOfTexts: [],
      value: '',
      beforeNextTick: 'いいえ',
      afterNextTick: 'いいえ',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    reverseText() {
      return this.text.split('').reverse().join('')
    },
    title() {
      return 'Chpater2'
    },
    loginButton() {
      if (this.isLogin) {
        return 'Logout'
      } else {
        return 'Login'
      }
    },
  },
  methods: {
    login() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
    },
    /**
     * $refsの値変更検証
     */
    async tryReferenceChange() {
      this.refText = '変更後'
      this.beforeNextTick =
        this.$refs.text.textContent === '変更後' ? 'はい' : 'いいえ'
      // $refsはリアクティブではないため、DOM更新後出なければ値が反映されない。
      await this.$nextTick()
      this.afterNextTick =
        this.$refs.text.textContent === '変更後' ? 'はい' : 'いいえ'
    },
    /**
     * $refsを利用してダイアログを開く
     */
    openDialog() {
      this.$refs.dialog.open()
    },
    async pushList() {
      this.listOfTexts.push(this.value)
      const target = this.listOfTexts.length - 1
      let color = ''
      await this.$nextTick()
      if (this.value.charAt(0) === 'A' || this.value.charAt(0) === 'a') {
        color = 'has-text-danger'
      } else if (this.value.charAt(0) === 'B' || this.value.charAt(0) === 'b') {
        color = 'has-text-success'
      }
      if (color !== '') {
        document
          .getElementById('texts')
          .getElementsByTagName('li')
          [target].classList.add(color)
      }
      this.value = ''
    },
  },
}
</script>
