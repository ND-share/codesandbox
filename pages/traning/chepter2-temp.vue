<template>
  <section class="section pt-1">
    <div class="container">
      <h1>{{ title }}</h1>
      <hr />
      <article class="mb-6">
        <h2>ダミーダミー</h2>
        <div class="columns">
          <div class="column is-12">
            <ul>
              <li>v-if</li>
              <li>v-for</li>
              <li>computed</li>
              <li>ref属性</li>
              <li>$nextTick</li>
            </ul>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>v-if</dt>
              <dd>ダミーダミーダミーダミーダミーダミーダミーダミー</dd>
            </dl>
            <template v-if="isLogin">
              <button class="button is-danger">
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
              <button class="button is-info">
                {{ loginButton }}
              </button>
            </template>
          </div>
          <div class="column is-6">
            <dl>
              <dt>v-for</dt>
              <dd>ダミーダミーダミーダミーダミーダミーダミーダミー</dd>
            </dl>
            <ul>
              <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
          </div>
          <div class="column is-6">
            <dl>
              <dt>computed</dt>
              <dd>ダミーダミーダミーダミーダミーダミーダミーダミー</dd>
            </dl>
            <input v-model="text" type="text" placeholder="入力" />
            <p class="mt-2">結果: {{ reverseText }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
// nuxt2.15現在 オートインポート設定で$refsでコンポーネントを呼び出すとundefinedとなる場合があるため注意
// import BaseDialog from '~/components/BaseDialog'

export default {
  // components: {
  //   BaseDialog,
  // },
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
      box: [],
      boxValue: '',
      beforeNextTick: 'いいえ',
      afterNextTick: 'いいえ',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  // computed: {
  //   reverseText() {
  //     return this.text.split('').reverse().join('')
  //   },
  //   title() {
  //     return 'Chpater2'
  //   },
  //   loginButton() {
  //     if (this.isLogin) {
  //       return 'ログアウト'
  //     } else {
  //       return 'ログイン'
  //     }
  //   },
  // },
  // methods: {
  //   login() {
  //     this.isLogin = true
  //   },
  //   logout() {
  //     this.isLogin = false
  //   },
  //   /**
  //    * $refsの値変更検証
  //    */
  //   async tryReferenceChange() {
  //     this.refText = '変更後'
  //     this.beforeNextTick =
  //       this.$refs.text.textContent === '変更後' ? 'はい' : 'いいえ'
  //     // $refsはリアクティブではないため、DOM更新後出なければ値が反映されない。
  //     await this.$nextTick()
  //     this.afterNextTick =
  //       this.$refs.text.textContent === '変更後' ? 'はい' : 'いいえ'
  //   },
  //   /**
  //    * $refsを利用してダイアログを開く
  //    */
  //   openDialog() {
  //     this.$refs.dialog.open()
  //   },
  //   async addBox() {
  //     this.box.push(this.boxValue)
  //     const target = this.box.length - 1
  //     let color = ''
  //     await this.$nextTick()
  //     if (this.boxValue.charAt(0) === 'A' || this.boxValue.charAt(0) === 'a') {
  //       color = 'has-text-danger'
  //     } else if (
  //       this.boxValue.charAt(0) === 'B' ||
  //       this.boxValue.charAt(0) === 'b'
  //     ) {
  //       color = 'has-text-success'
  //     }
  //     if (color !== '') {
  //       document
  //         .getElementById('box')
  //         .getElementsByTagName('li')
  //         [target].classList.add(color)
  //     }
  //     this.boxValue = ''
  //   },
  // },
}
</script>
