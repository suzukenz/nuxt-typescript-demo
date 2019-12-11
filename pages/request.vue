<template>
  <div>
    <p>レスポンスが下に出力されます。</p>
    <p>{{ response }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private response: any = ''

  async created() {
    this.response = await this.$axios.$get('/api/hoge')
  }
}
</script>
