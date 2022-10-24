import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'complainModule' })
export default class ComplainModule extends VuexModule {}
