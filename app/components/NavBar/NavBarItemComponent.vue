<script setup lang="ts">
defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <a
    :href="link"
    class="py-4 px-2 rounded-2xl text-p3 text-text-primary cursor-pointer hover:bg-surface-primary"
  >
    {{ text }}
  </a>
</template>

<style scoped lang="scss"></style>
