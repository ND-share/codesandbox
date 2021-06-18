<template>
  <button
    :type="type"
    class="button is-info"
    :disabled="disabled"
    @click="click"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    // ボタンテキスト
    text: {
      type: String,
      required: true,
      default: '',
    },
    // ボタンタイプ
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    /**
     * ボタン無効
     * true: 無効, false:有効
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    /**
     * クリックイベントを親に渡す
     * @param {Object} event
     */
    click(event) {
      this.$emit('click', event)
    },
  },
}
</script>
