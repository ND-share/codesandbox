<template>
  <section class="section pt-1">
    <div class="container">
      <h1>{{ title }}</h1>
      <hr />
      <article class="mb-6">
        <div class="columns is-multiline">
          <base-description
            dt-tag="beforeCreate"
            dd-tag="設定前のため、オプション-データへアクセスできません。"
          >
            <p>実行された時間：{{ times.beforeCreate }}</p>
          </base-description>
          <base-description
            dt-tag="created"
            dd-tag="オプション-データへアクセスできるようになります。データの初期化、API呼出しに適しています。"
            title-color-class="has-text-danger"
          >
            <p>実行された時間：{{ times.created }}</p>
          </base-description>
          <base-description
            dt-tag="beforeMount"
            dd-tag="DOM要素（$el、$refsなど）にアクセスできません。（SSRの場合初回のみ$elにアクセス可能そうです。画面遷移などの場合はアクセスできないためbeforeMountで$elにアクセスしないと覚えても良いと思います。）"
          >
            <p>実行された時間：{{ times.beforeMount }}</p>
          </base-description>
          <base-description
            dt-tag="mounted"
            dd-tag="DOM要素（$el、$refsなど）にアクセス出来るようになります。"
            title-color-class="has-text-danger"
          >
            <p>実行された時間：{{ times.mounted }}</p>
          </base-description>
          <base-description
            dt-tag="beforeUpdate"
            dd-tag="変更前のDOMに対して操作する必要がある場合に適しています。"
          >
            <p ref="before-update" />
            <base-button-info
              class="mt-2"
              text="要素 切り替え"
              @click="switchElement()"
            />
            <p v-if="isShowElement" class="p-description mt-4">
              beforeUpdate, updateのフックテスト用要素
            </p>
          </base-description>
          <base-description
            dt-tag="updated"
            dd-tag="変更後のDOMに対して操作を行う場合に適しています。無限ループする可能性があるため状態の変更は避けてください。"
          >
            <p ref="updated" />
          </base-description>
          <base-description
            dt-tag="beforeDestroy"
            dd-tag="イベントリスナーの削除などに適しています。"
            title-color-class="has-text-danger"
          >
            <base-button-info
              class="mt-4"
              :text="text"
              :disabled="!isDeleteEventLisnner"
              @click="notDeleteEventListener()"
            />
            <p class="p-description mt-2">
              コピーイベントでアラート表示するメソッドを登録しています
            </p>
          </base-description>
          <base-description
            dt-tag="destroyed"
            dd-tag="第三者のアプリケーションにVueインスタンスが破棄されたことを通知したい場合の利用に適しています。"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
// beforeCreateが呼び出された時間
let timeBeforeCreate = null

export default {
  data() {
    return {
      isShowElement: true,
      isDeleteEventLisnner: true,
      times: {
        beforeCreate: null,
        created: null,
        beforeMount: null,
        mounted: null,
        beforeUpdate: null,
        updated: null,
        beforeDestroy: null,
        destroyed: null,
      },
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    ...mapGetters('storage', {
      fn: 'fn',
    }),
    title() {
      return 'Chapter4-1 ライフサイクル'
    },
    text() {
      if (this.isDeleteEventLisnner) {
        return 'イベントリスナーを削除しない'
      } else {
        return 'イベントリスナー削除しないモード'
      }
    },
  },
  beforeCreate() {
    timeBeforeCreate = Date.now()
  },
  created() {
    // SSRの話してないからクライアントサイドのみ実行させる
    if (process.client) {
      this.times.beforeCreate =
        this.$moment(timeBeforeCreate).format('H:mm:ss:SSS')
      this.times.created = this.$moment().format('H:mm:ss:SSS')
    }
  },
  beforeMount() {
    this.times.beforeMount = this.$moment().format('H:mm:ss:SSS')
  },
  mounted() {
    this.times.mounted = this.$moment().format('H:mm:ss:SSS')
    // ストアにファンクションが存在しない場合は新しくファンクションをストアへ登録
    if (this.fn === null) {
      this.$store.dispatch('storage/setFunction', this.showAleat)
    }
    window.addEventListener('copy', this.fn)
  },
  beforeUpdate() {
    this.$refs[
      'before-update'
    ].textContent = `実行された時間：${this.$moment().format('H:mm:ss:SSS')}`
  },
  updated() {
    this.$refs.updated.textContent = `実行された時間：${this.$moment().format(
      'H:mm:ss:SSS'
    )}`
  },
  beforeDestroy() {
    if (this.isDeleteEventLisnner) {
      // イベントリスナーの削除
      window.removeEventListener('copy', this.fn)
      // ストアのファンクションを削除
      this.$store.dispatch('storage/setFunction', null)
    }
    this.times.beforeDestroy = this.$moment().format('H:mm:ss:SSS')
  },
  destroyed() {
    this.times.destroyed = this.$moment().format('H:mm:ss:SSS')
    alert(
      `beforeDestroyd実行時間：${this.times.beforeDestroy}\ndestroyed実行時間：${this.times.destroyed}`
    )
  },
  methods: {
    // 要素 切り替えボタンの状態
    switchElement() {
      this.isShowElement = !this.isShowElement
    },
    // イベントリスナー削除しないモード
    notDeleteEventListener() {
      this.isDeleteEventLisnner = !this.isDeleteEventLisnner
    },
    // コピーアラート表示
    showAleat() {
      alert('コピーイベントが実行されました。')
    },
  },
}
</script>
