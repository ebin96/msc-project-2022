<template>
  <v-container
    class="home"
    fluid
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <v-row class="text-center">
      <v-col xs="12" sm="12" md="6">
        <v-img :src="require('../assets/logo.png')" contain height="90" />
      </v-col>

      <v-col xs="12" sm="12" md="6">
        <h2 :style="{ color: $vuetify.theme.themes[theme].info }">
          To Get Started >>>
        </h2>
        <p :style="{ color: $vuetify.theme.themes[theme].info }">
          Use the NEW button to start building a new JSON file.<br />
          Use the IMPORT button to import an existing JSON file to edit.<br />
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
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
});
</script>

<style>
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
