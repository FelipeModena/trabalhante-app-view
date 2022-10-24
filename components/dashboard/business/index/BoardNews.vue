<template>
  <div class="my-3">
    <PostCommon
      v-for="(complain, index) in complains"
      :key="index"
      class="my-4"
      :content="complain.description"
      :title="complain.title"
      :user-status="complain.userStatus"
    />
  </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import store from '~/store/main'
import PostCommon from '~/components/common/PostCommon.vue'
import { ComplainState } from '~/store/types/complain'
export default Vue.extend({
  components: { PostCommon },
  computed: {
    complainModuleConnection: () => getModule(CompanyModule, store),
    complains(): ComplainState[] {
      return this.complainModuleConnection.complains
    },
  },
})
</script>
