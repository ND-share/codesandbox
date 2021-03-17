<template>
  <div :class="{ 'is-active': isActive }" class="modal">
    <div class="modal-background" />
    <div class="modal-content">
      内容内容内容内容内容内容内容内容内容内容内容内容
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close()"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    open() {
      this.isActive = true
    },
    close() {
      this.isActive = false
    },
  },
}
</script>
