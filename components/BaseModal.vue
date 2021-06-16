<template>
  <div :class="{ 'is-active': isActive }" class="modal">
    <div class="modal-background" />
    <div class="modal-content box">
      <p class="title">Title</p>
      <slot />
    </div>
    <button class="modal-close is-large" aria-label="close" @click="close()" />
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
