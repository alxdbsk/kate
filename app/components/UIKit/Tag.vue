<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div
    class="bg-surface-white border border-stroke-secondary text-caption rounded-[90px] px-4 py-2"
  >
    {{ text }}
  </div>
</template>
