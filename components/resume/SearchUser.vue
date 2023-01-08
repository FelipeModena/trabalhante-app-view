<template>
  <b-form inline>
    <b-container>
      <b-row>
        <b-col>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Buscar usuário"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'Empresa...', value: null },
              'Empresa',
              'Colaborador',
            ]"
            :value="null"
          ></b-form-select>
        </b-col>
        <b-col>
          <b-button variant="primary"> Buscar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SearchUserComponent',
})
</script>
