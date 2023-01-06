<template>
  <div class="my-3">
    <b-card title="Avaliações">
      <PostCommon
        v-for="complain in complains"
        :id="complain.id"
        :key="complain.id"
        class="my-4"
        :rate="complain.relevance"
        :content="complain.description"
        :title="complain.title"
        :reference="complain.creatorReference"
      />
    </b-card>
  </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import PostCommon from '~/components/common/PostCommon.vue'
import { ComplainState } from '~/store/types/complain'
export default Vue.extend({
  components: { PostCommon },

  computed: {
    complainModuleConnection: () => getModule(CompanyModule, store),
    complains(): ComplainState[] {
      const pagesOfComplains = this.complainModuleConnection.complains
      return pagesOfComplains
    },
  },
  created() {
    this.$nuxt.$on('voteEvent', (vote: any) => {
      if (vote) {
        vote++
      }
    })
  },
})
</script>
