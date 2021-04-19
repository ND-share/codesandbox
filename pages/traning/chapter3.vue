<template>
  <section class="section pt-1">
    <div class="container">
      <h1>{{ title }}</h1>
      <hr />
      <article class="mb-6">
        <h2>Props</h2>
        <div class="columns is-multiline">
          <base-definition
            dt-tag="Propsを利用して用語を設定"
            dd-tag="Propsを利用して説明を設定"
          />
        </div>
      </article>
      <article class="mb-6">
        <h2>スロット</h2>
        <div class="columns is-multiline">
          <base-definition
            dt-tag="スロット利用しない"
            dd-tag="スロットを利用せずデフォルトを設定しない場合スロット部分は何も表示されません"
          />
          <base-definition
            dt-tag="スロットを利用する"
            dd-tag="HTML要素と同様に、コンポーネントにコンテンツを渡すことで表示されます"
          >
            <b>何でも追加可能です</b>
          </base-definition>
        </div>
      </article>
      <article class="mb-6">
        <h2>スコープ付きスロット</h2>
        <div class="columns is-multiline">
          <base-definition
            p-tag="バインドされたスロットプロパティを全て読込する"
          >
            <select-chapter v-model="people">
              <template #item="slotProps"> {{ slotProps.value }} 人 </template>
            </select-chapter>
            <p class="mt-2">結果：{{ people }}</p>
          </base-definition>
          <base-definition
            p-tag="バインドされたスロットプロパティを分割代入する（同じプロパティ名がすでに存在する場合などは使えないため注意してください）"
          >
            <select-chapter v-model="people">
              <template #item="{ value }"> {{ value }} 人 </template>
            </select-chapter>
            <p class="mt-2">結果：{{ people }}</p>
          </base-definition>
          <base-definition
            p-tag="スロットプロパティを利用せずデフォルトを利用する"
          >
            <select-chapter v-model="xNumber" />
            <p class="mt-2">結果：{{ xNumber }}</p>
          </base-definition>
        </div>
      </article>
      <article class="mb-6">
        <h2>emit</h2>
        <div class="columns">
          <base-definition
            dt-tag="イベントをemit"
            dd-tag="クリックイベントを親コンポーネントに渡す"
          >
            <base-button-info text="カウンター" @click="countUp()" />
            <p class="mt-2">結果：{{ count }}</p>
          </base-definition>
          <base-definition
            dt-tag="値をemit"
            dd-tag="値を親コンポーネントに渡す（*こちら構成を実際に使ったことないので一例です）"
          >
            <validation-observer v-slot="{ handleSubmit, invalid }">
              <form @submit.prevent="handleSubmit(submit)">
                <base-input-text v-model="name" name="reg_name" field="氏名" />
                <base-input-text
                  v-model="kana"
                  name="reg_kana"
                  field="氏名（カタカナ）"
                />
                <base-button-info
                  class="mt-2"
                  type="submit"
                  text="送信"
                  :disabled="invalid"
                />
              </form>
            </validation-observer>
            <p class="mt-2">送信結果：{{ submitResult }}</p>
          </base-definition>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import SelectChapter from '~/components/SelectChapter.vue'

export default {
  components: {
    'select-chapter': SelectChapter,
  },
  data() {
    return {
      count: 0,
      name: '',
      kana: '',
      submitResult: '',
      people: '',
      xNumber: '',
    }
  },
  computed: {
    title() {
      return 'コンポーネント'
    },
  },
  methods: {
    /**
     * カウントアップイベント - ボタン押下でカウント+1
     */
    countUp() {
      this.count++
    },
    submit() {
      this.submitResult = `${this.name}と${this.kana}が送信されました`
    },
  },
}
</script>
