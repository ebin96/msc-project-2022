/* eslint-disable */
<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/mainlogo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1>Welcome to JSONit</h1>
        <br />
        <br />
        <h2>Instructions</h2>
        <p>
          Use the NEW button to start a new project.<br />
          Use the IMPORT button to import a JSON file to edit.<br />
          Use the SAVE button to save the content.<br />
          Use the RESTORE button to restore the saved content.<br />
          Use the EXPORT button to export the content to a JSON file.
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
