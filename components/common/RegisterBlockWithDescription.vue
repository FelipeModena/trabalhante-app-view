<template>
  <section>
    <b-container >
      <b-row class="text-center">
        <b-col>
          <h2>Venha fazer parte da nossa comunidade!</h2>
          <p>
            Se você é uma empresa que busca novos talentos, cadastre-se e comece
            a divulgar suas vagas.
          </p>
          <nuxt-link to="/login/register"><b-button variant="primary" >Cadastrar</b-button></nuxt-link>
          
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
