<template>
  <div class="mt-6 text-xs">
    <h2 class="font-bold text-sm">{{ title }}</h2>
    <hr class="my-1.5" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style lang="scss" scoped></style>
