<template>
  <v-container class="home" fluid>
    <v-row class="text-center">
      <v-col xs="12" sm="12" md="6">
        <v-img :src="require('../assets/mainlogo.png')" contain height="90" />
      </v-col>

      <v-col xs="12" sm="12" md="6">
        <h2>To Get Started >>></h2>
        <p>
          Use the NEW button to build a new JSON file.<br />
          Use the IMPORT button to import a JSON file to edit.<br />
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",

  data: () => ({
    //
  }),
});
</script>

<style>
h1,
h2,
p {
  font-family: Bahnschrift, serif;
}

.home {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
