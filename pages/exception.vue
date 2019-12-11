<template>
  <div>
    ５秒後にエラーが起きます。
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  async mounted() {
    await throwErrorLater(5000)
  }
}

function throwErrorLater(interval: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      reject(new Error('５秒たったのでエラー！'))
    }, interval)
  })
}
</script>
