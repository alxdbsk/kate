<script setup lang="ts">
import type { IProjectCard } from '~/components/ProjectCard/projectCard.model'
defineProps<IProjectCard>()
</script>

<template>
  <div
    class="rounded-3xl bg-surface-white p-9 flex flex-col gap-3"
    :class="[
      {
        'rainbow-border': rainbow,
        'border border-stroke-secondary': !rainbow,
      },
    ]"
  >
    <div v-if="tags?.length" class="flex gap-2 justify-end items-center">
      <Tag v-for="tag in tags" :key="tag" :text="tag" />
    </div>
    <h3 class="text-h3 text-text-primary">{{ title }}</h3>
    <p class="text-p2">{{ description }}</p>
    <RegularButton v-if="link" :text="'See more'" :direction="'right'" />
    <div class="flex justify-center h-64">
      <NuxtImg
        v-if="imageUrl"
        :src="imageUrl"
        class="rounded-s object-contain"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.rainbow-border {
  position: relative;
  border: 4px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #6147ff, #3d1dff, #d451ff, #ec458d, #ffca8b)
      border-box;
}
</style>
