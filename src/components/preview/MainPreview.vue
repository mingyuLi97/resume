<template>
  <div class="preview">
    <div class="resume" ref="resumeEl" :style="{ height: resumeHeight }">
      <ResumeInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import ResumeInfo from "./ResumeInfo.vue";

const resumeEl = ref<HTMLDivElement>();
const resumeHeight = ref<string>("");

onMounted(() => {
  resizeResume();
});

function resizeResume() {
  // A4： 2100 * 2970
  const { width, height } = resumeEl.value!.getBoundingClientRect();
  const unitH = width * (2970 / 2100);
  resumeHeight.value = Math.ceil(height / unitH) * unitH + "px";
}
</script>

<style lang="scss" scoped>
.preview {
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  overflow: auto;
  background: #f2f5fa;

  .resume {
    box-sizing: border-box;
    width: 70%;
    background: #fff;
    margin: 50px auto;
    padding: 30px;
    color: black;
  }
}
</style>
