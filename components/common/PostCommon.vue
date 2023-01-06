<template>
  <b-card>
    <p>
      <strong v-if="reference === 1">Funcionário atual</strong>

      <strong v-else-if="reference === 2">Ex-funcionário</strong>
      <strong v-else>Não é mais funcionário</strong>
    </p>
    <p>
      Relevância:
      <span v-if="rate >= 70">Alta</span>
      <span v-else-if="rate >= 40 && rate < 70">Média</span>
      <span v-else-if="rate <= 40">Baixa</span>
    </p>
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
    <template #footer>
      <b-container>
        <b-row>
          <b-col lg="2" md="12">
            <b-btn :id="'popover-post-common' + id" variant="success"
              ><b-icon-hand-thumbs-up /> Útil</b-btn
            >

            <b-popover
              :target="'popover-post-common' + id"
              triggers="hover"
              placement="top"
            >
              <b-container>
                <b-row>
                  <b-col>
                    <post-common-surprise-reaction :id="id" />
                  </b-col>
                  <b-col>
                    <post-common-relevant-reaction :id="id" />
                  </b-col>
                  <b-col>
                    <post-common-dislike-reaction :id="id" />
                  </b-col>
                </b-row>
              </b-container>
            </b-popover>
          </b-col>
          <b-col sm="3">
            <b-btn>Compartilhar</b-btn>
          </b-col>
          <b-col md="3">
            <b-btn>Recorrer</b-btn>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
import PostCommonDislikeReaction from './PostCommonFolder/PostCommonDislikeReaction.vue'
import PostCommonRelevantReaction from './PostCommonFolder/PostCommonRelevantReaction.vue'
import PostCommonSurpriseReaction from './PostCommonFolder/PostCommonSurpriseReaction.vue'
export default Vue.extend({
  components: {
    PostCommonSurpriseReaction,
    PostCommonRelevantReaction,
    PostCommonDislikeReaction,
  },
  props: {
    id: {
      type: String,
      default: Math.random(),
      required: true,
    },
    title: {
      type: String,
      default: 'Generic Title',
    },
    content: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: 'Date',
    },
    rate: {
      type: Number,
      default: 4.3,
    },

    reference: {
      type: Number,
      default: 1,
    },
  },
})
</script>

<style lang="scss" scoped></style>
