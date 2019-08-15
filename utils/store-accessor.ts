import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Feed from '~/store/feed'

/* eslint import/no-mutable-exports: 0 */
let feedStore: Feed

function initialiseStores(store: Store<any>): void {
  feedStore = getModule(Feed, store)
}

export { initialiseStores, feedStore }
