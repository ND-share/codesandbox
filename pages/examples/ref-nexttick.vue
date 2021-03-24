<template>
  <section class="section pt-1">
    <div class="container">
      <h1>ref属性と$nextTick</h1>
      <hr />
      <article>
        <h2>textContentの変更を確認する</h2>
        <p ref="text">{{ text }}</p>
        <div class="mt-2">
          <button class="button is-info" @click="tryReferenceChange">
            click
          </button>
        </div>
      </article>
      <article class="mt-5">
        <div class="mt-2">
          <h2>メソッドを呼び出す</h2>
          <button class="button is-info" @click="openDialog">
            ダイアログを開く
          </button>
        </div>
      </article>
      <div class="mt-5">
        <input v-model="boxValue" type="text" />
        <button class="button is-info" @click="addBox">追加</button>
        <ul id="box">
          <li v-for="(b, bIndex) in box" :key="bIndex">{{ b }}</li>
        </ul>
      </div>
    </div>
    <base-dialog ref="dialog" />
  </section>
</template>

<script>
// nuxt2.15現在 オートインポート設定で$refsでコンポーネントを呼び出すとundefinedとなる場合があるため注意
import BaseDialog from '~/components/BaseDialog'

export default {
  components: {
    BaseDialog,
  },
  data() {
    return {
      text: '変更前',
      box: [],
      boxValue: '',
    }
  },
  methods: {
    /**
     * $refsの値変更検証
     */
    async tryReferenceChange() {
      this.text = '変更後'
      // $refsはリアクティブではないため、DOM更新後出なければ値が反映されない。
      console.log('nextTick前', this.$refs.text.textContent)
      await this.$nextTick()
      console.log('nextTick後', this.$refs.text.textContent)
    },
    /**
     * $refsを利用してダイアログを開く
     */
    openDialog() {
      this.$refs.dialog.open()
    },
    async addBox() {
      this.box.push(this.boxValue)
      const target = this.box.length - 1
      let color = ''
      await this.$nextTick()
      if (this.boxValue.charAt(0) === 'A' || this.boxValue.charAt(0) === 'a') {
        color = 'has-text-danger'
      } else if (
        this.boxValue.charAt(0) === 'B' ||
        this.boxValue.charAt(0) === 'b'
      ) {
        color = 'has-text-success'
      }
      if (color !== '') {
        document
          .getElementById('box')
          .getElementsByTagName('li')
          [target].classList.add(color)
      }
      this.boxValue = ''
    },
  },
}
</script>
