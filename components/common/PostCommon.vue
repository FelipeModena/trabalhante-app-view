<template>
  <b-card v-if="id != undefined">
    <b-row>
      <b-col>
        <p>
          <strong v-if="reference === 1">Funcionário atual</strong>

          <strong v-else-if="reference === 2">Ex-funcionário</strong>
          <strong v-else>Não é mais funcionário</strong>
          <b-icon-bar-chart-fill
            :id="'popover-post-rate-target-' + id"
            class="ml-2"
            :variant="
              rate >= 70
                ? 'success'
                : rate < 70 && rate >= 40
                ? 'warning'
                : 'danger'
            "
          />
          <b-popover
            :target="'popover-post-rate-target-' + id"
            triggers="hover"
            placement="top"
          >
            <template #title>Confiabilidade da informação</template>
            <p>
              <b-icon-bar-chart-fill variant="success" /> Avaliador confiável
            </p>
            <p>
              <b-icon-bar-chart-fill variant="warning" /> Avaliador duvidoso
            </p>
            <p>
              <b-icon-bar-chart-fill variant="danger" /> Avaliador não confiável
            </p>
          </b-popover>
        </p>
      </b-col>
      <b-col>{{ date }}</b-col>
    </b-row>

    <h4>{{ title }}</h4>
    <h5>
      <b-badge href="#" variant="secondary">Feeback</b-badge>
      <b-badge href="#" variant="success">Elogio</b-badge>
      <b-badge
        href="#"
        v-if="title == 'Estou preocupado com a falta de progresso de você.'"
        variant="warning"
        >Aviso</b-badge
      >
    </h5>

    <p>{{ content }}</p>
    <template #footer>
      <b-container>
        <b-row>
          <b-col lg="3" md="12">
            <b-input-group>
              <b-input-group-append>
                <b-button variant="success">
                  <b-icon-arrow-bar-up></b-icon-arrow-bar-up>
                </b-button>
                <b-button :id="'popover-post-common' + id" variant="info">
                  {{ (Math.random() * 100).toString().split('.')[0] }}
                </b-button>
                <b-button variant="danger">
                  <b-icon-arrow-bar-down></b-icon-arrow-bar-down>
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <!-- <b-btn
              :id="'popover-post-common' + id"
              size="lg"
              variant="success"
              class="d-flex"
            >
              <b-icon-hand-thumbs-up class="mr-2" /> Útil</b-btn
            > -->
            <b-popover
              :target="'popover-post-common' + id"
              triggers="hover"
              placement="bottom"
            >
              <b-container>
                <b-row>
                  <b-col>
                    Numero de votantes no total
                  </b-col>
                  <!-- <b-col>
                    <post-common-surprise-reaction :id="id" />
                  </b-col>
                  <b-col>
                    <post-common-relevant-reaction :id="id" />
                  </b-col>
                  <b-col>
                    <post-common-dislike-reaction :id="id" />
                  </b-col> -->
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
    post: {
      type: Object,
      default: () => ({}),
    },
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
