<template>
  <section>
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h2>Venha fazer parte da nossa comunidade!</h2>
          <h3>
            Impuslione sua carreira, valorize suas habilidades incetive tanto a
            você quanto a sua empresa a crescerem juntos. Sua opiniao vale ouro!
          </h3>
          <nuxt-link to="/login/register"
            ><b-button variant="primary">Cadastrar</b-button></nuxt-link
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RegisterBlockWithDescription',
})
</script>
