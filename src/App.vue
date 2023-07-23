<template>
  <main class="page_main">
    <MainEditor />
    <MainPreview />
  </main>
</template>

<script setup lang="ts">
import MainEditor from "./components/editor/MainEditor.vue";
import MainPreview from "./components/preview/MainPreview.vue";
</script>

<style lang="scss" scoped>
.page_main {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
