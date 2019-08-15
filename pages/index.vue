<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostPreview from '~/components/PostPreview.vue'
import { feedStore } from '~/store'

@Component({
  components: {
    PostPreview
  }
})
export default class FeedPage extends Vue {
  get posts() {
    return feedStore.posts
  }

  async created() {
    await feedStore.loadPosts()
  }
}
</script>
