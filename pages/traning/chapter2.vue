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
              <li>v-if</li>
              <li>v-for</li>
              <li>computed</li>
              <li>$refs</li>
              <li>$nextTick</li>
            </ul>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>v-if</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <div v-if="isIf">
              <button class="button is-danger" @click="chagngeIf()">
                ログアウト
              </button>
              <p class="mt-2">結果:ログインしています</p>
              <p class="mt-2">名前:田中太郎</p>
              <p class="mt-2">年齢:18歳</p>
              <p class="mt-2">身長:180cm</p>
              <p class="mt-2">出身:北海道</p>
              <p class="mt-2">性別:男性</p>
            </div>
            <div v-else>
              <button class="button is-info" @click="chagngeIf()">
                ログイン
              </button>
              <p class="mt-2">結果:ログアウトしています</p>
            </div>
          </div>
          <div class="column is-6">
            <dl>
              <dt>v-for</dt>
              <dd>ダミーダミーダミーダミーダミーダミーダミーダミー</dd>
            </dl>
            <ul>
              <p class="mt-2">結果:</p>
              <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
          </div>
          <div class="column is-6">
            <dl>
              <dt>computed</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <input v-model="modelMessage" type="text" placeholder="入力" />
            <p class="mt-2">結果: {{ reversedMessage }}</p>
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
      isIf: false,
      bindMessage: 'bindMessage',
      users: [
        { id: 1, name: '田中' },
        { id: 2, name: '鈴木' },
        { id: 3, name: '佐藤' },
        { id: 4, name: '伊藤' },
        { id: 5, name: '高橋' },
        { id: 6, name: '山本' },
        { id: 7, name: '中村' },
      ],
      modelMessage: '',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    reversedMessage() {
      return this.modelMessage.split('').reverse().join('')
    },
    title() {
      return 'Chpater2'
    },
  },
  methods: {
    chagngeIf() {
      this.isIf = !this.isIf
    },
  },
}
</script>
