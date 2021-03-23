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
    }
  },
  methods: {
    /**
     * $refsの値変更検証
     */
    async tryReferenceChange() {
      this.text = '変更後'
      // $refsはリアクティブではないため、DOM更新後出なければ値が反映されない。
      console.log(this.$refs.text.textContent)
      await this.$nextTick()
      console.log(this.$refs.text.textContent)
    },
    /**
     * $refsを利用してダイアログを開く
     */
    openDialog() {
      this.$refs.dialog.open()
    },
  },
}
</script>
