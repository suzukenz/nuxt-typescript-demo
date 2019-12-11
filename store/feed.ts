import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Post from '~/models/Post'

export interface IFeedState {
  posts: Post[]
}

@Module({ stateFactory: true, namespaced: true, name: 'feed' })
export default class Feed extends VuexModule implements IFeedState {
  posts: Post[] = []

  @Mutation
  addPost(post: Post) {
    this.posts = [...this.posts, post]
  }

  @Action
  async loadPosts() {
    const posts = await fetchPosts()
    posts.forEach((post) => {
      this.addPost(post)
    })
  }
}

const fetchPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    const dummyPosts: Post[] = [
      {
        id: 1,
        title: 'Hello World',
        description: 'This is my first post.'
      },
      {
        id: 2,
        title: 'My Second Post',
        description: 'This is fake post !'
      },
      {
        id: 3,
        title: 'Try Nuxt.js',
        description: 'I am a beginner in Nuxt.js.'
      }
    ]
    resolve(dummyPosts)
  })
}
