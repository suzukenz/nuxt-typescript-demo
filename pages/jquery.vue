<template>
  <div>
    <button @click="buttonClick" class="continue">
      Click me
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// Ref: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jquery#authoring-type-definitions-for-jquery-plugins
declare const $: JQueryStatic

// このページだけで外部jQueryを利用する書き方
// Ref: https://ja.nuxtjs.org/faq/#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AA%E8%A8%AD%E5%AE%9A
@Component({
  head() {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ]
    }
  }
})
export default class extends Vue {
  buttonClick() {
    $('button.continue').html('Next Step...')
  }
}
</script>
