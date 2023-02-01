<template>
  <div class="editor-wrapper">
    <EditorMenu :editor="(editor as Editor)"></EditorMenu>
    <EditorContent class="editor" :editor="editor" />
    <div v-html="html"></div>
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent, Editor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { ref } from "vue";
import EditorMenu from "./EditorMenu.vue";

const html = ref("");

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
  onUpdate({ editor }) {
    html.value = editor.getHTML();
  },
});
</script>

<style lang="scss" scoped>
.editor-wrapper {
  width: 500px;
  min-height: 50px;
  background-color: #ddd;
  border-radius: 10px;
}

.editor {
  background-color: red;
  ol,
  li,
  ul {
    list-style: initial;
  }
}
</style>
