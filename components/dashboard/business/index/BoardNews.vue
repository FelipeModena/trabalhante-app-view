<template>
  <div class="my-3">
    <b-card v-if="complains.length" title="Avaliações ">
      <b-container>
        <b-row>
          <b-col>
            <PostCommon
              v-for="index in postsToRender"
              :id="complains[index].id"
              :key="complains[index].id"
              class="my-4"
              :rate="complains[index].relevance"
              :content="complains[index].description"
              :title="complains[index].title"
              :reference="complains[index].creatorReference"
              :date="complains[index].createdAt"
              :post="complains[index]"
            />
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col>
            <b-button variant="primary" @click="postsToRender += 10"
              >Mostrar mais</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </b-card>
    <NoContent v-else />
  </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import PostCommon from '~/components/common/PostCommon.vue'
import { ComplainState } from '~/store/types/complain'
import NoContent from '~/components/common/NoContent.vue'

export default Vue.extend({
  components: { PostCommon, NoContent },
  data() {
    return {
      postsToRender: 10,
    }
  },
  computed: {
    complainModuleConnection: () => getModule(CompanyModule, store),
    companyModuleConnection: () => getModule(CompanyModule, store),
    complains(): ComplainState[] {
      if (this.companyModuleConnection.selectedCompany !== undefined) {
        const pagesOfComplains = this.complainModuleConnection.complains
        return pagesOfComplains
      } else return []
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
