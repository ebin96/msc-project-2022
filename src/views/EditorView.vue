<template>
  <editor-page />
</template>

<script lang="ts">
import Vue from "vue";
import EditorPage from "../components/EditorPage.vue";

export default Vue.extend({
  name: "EditorView",

  components: {
    EditorPage,
  },
});
</script>
