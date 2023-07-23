<!--
 * @Description: 预览 - 人物信息
 * @Author: 李明宇
 * @Date: 2023-07-22 13:58:30
-->
<template>
  <div class="flex flex-col items-center">
    <span class="block font-bold text-3xl mb-2">李明宇</span>
    <div
      class="flex flex-row justify-center"
      v-for="(tags, index) in tagList"
      :key="index"
    >
      <ResumeInfoTag v-for="tag in tags" :key="tag.content" :tag="tag" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { ResumeInfoTag as TagType } from "@/types";
import ResumeInfoTag from "./ResumeInfoTag.vue";

const tagList = reactive<TagType[][]>([
  [
    {
      type: "text",
      content: "25岁",
      name: "年龄"
    },
    {
      type: "phone",
      content: "13704683965"
    },
    {
      type: "email",
      content: "mingyuli1997@gmail.com"
    }
  ],
  [
    {
      type: "text",
      content: "4年工作经验"
    },
    {
      type: "text",
      name: "求职意向",
      content: "前端开发工程师"
    }
  ],
  [
    {
      type: "link",
      name: "个人博客",
      content: "https://mingyuli97.github.io/blog/",
      link: "https://mingyuli97.github.io/blog/"
    }
  ]
]);
</script>

<style lang="scss" scoped></style>
