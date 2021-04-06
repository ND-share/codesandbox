<template>
  <base-dialog ref="dialog" />
</template>

<script>
// nuxt2.15現在 オートインポート設定でmountedから$refsでコンポーネントを呼び出すとundefinedとなるため注意
import BaseDialog from '~/components/BaseDialog'

export default {
  components: {
    BaseDialog,
  },
  mounted() {
    this.$refs.dialog.open()
  },
}
</script>
