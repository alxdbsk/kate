<script setup lang="ts">
import RightArrow from '~/assets/right-arrow.svg'
import LeftArrow from '~/assets/left-arrow.svg'

defineProps<{
  text: string
  direction: 'left' | 'right'
}>()
</script>

<template>
  <button
    class="py-4 px-2 rounded-2xl text-p2 text-text-primary cursor-pointer gap-2 inline-flex items-center"
  >
    <LeftArrow v-if="direction === 'left'" class="icon" />
    <span>{{ text }}</span>
    <RightArrow v-if="direction === 'right'" class="icon" />
  </button>
</template>

<style scoped lang="scss">
.icon {
  @apply text-icon text-xl;
}

button:hover {
  & > span {
    @apply underline;
  }
}
</style>
