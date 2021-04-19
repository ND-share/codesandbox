<template>
  <div class="select">
    <select :value="changeValue" @change="change">
      <template v-for="item in items">
        <option :key="item.value" :value="item.value">
          <slot name="item" :value="item.value">
            {{ item.value }}
          </slot>
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'changeValue',
    event: 'changeEvent',
  },
  props: {
    // 入力値
    changeValue: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      items: [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
      ],
    }
  },
  methods: {
    /**
     * 親に値を渡す
     * @param {Object} event
     */
    change(event) {
      this.$emit('changeEvent', event.target.value)
    },
  },
}
</script>
