import Vue from 'vue'
import { NuxtApp } from '@nuxt/types/app'

Vue.config.errorHandler = (err, vm) => {
  const $nuxt = vm.$root as NuxtApp
  $nuxt.error(err)
}
