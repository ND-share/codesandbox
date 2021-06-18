<template>
  <div class="column is-6">
    <!-- 用語と説明 -->
    <template v-if="dtTag && ddTag">
      <dl>
        <dt>{{ dtTag }}</dt>
        <dd>
          {{ ddTag }}
        </dd>
      </dl>
    </template>
    <!-- 説明のみ -->
    <template v-else-if="pTag">
      <p class="p-description">
        {{ pTag }}
      </p>
    </template>
    <!-- スロットエリア -->
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    // 用語
    dtTag: {
      type: String,
      required: false,
      default: '',
    },
    // 用語の説明
    ddTag: {
      type: String,
      required: false,
      default: '',
    },
    // 説明のみ
    pTag: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
