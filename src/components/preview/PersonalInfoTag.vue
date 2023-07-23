<!--
 * @Description: preview info tag
 * @Author: 李明宇
 * @Date: 2023-07-22 14:03:03
-->
<template>
  <span class="flex flex-row info_tag">
    <template v-if="tag.type === 'phone'">
      <el-icon class="flex w-4 text-gray-400">
        <PhoneFilled />
      </el-icon>
      {{ content }}
    </template>

    <template v-else-if="tag.type === 'email'">
      <el-icon class="flex w-4 text-gray-400 mr-0.5">
        <Promotion />
      </el-icon>
      {{ content }}
    </template>

    <template v-else-if="tag.type === 'link'">
      个人博客:
      <a class="text-blue-600 underline ml-1" :href="tag.link" target="_blank">
        {{ content }}
      </a>
    </template>

    <template v-else>
      {{ content }}
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElIcon } from "element-plus";
import { PhoneFilled, Promotion } from "@element-plus/icons-vue";

import { PersonalInfoTagType } from "@/types";

const props = defineProps<{ tag: PersonalInfoTagType }>();

const content = computed(() => props.tag.content);
</script>

<style lang="scss" scoped>
.info_tag {
  &:not(:last-of-type)::after {
    content: "|";
    padding: 0 6px;
  }
}
</style>
