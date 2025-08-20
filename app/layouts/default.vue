<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <div class="w-screen relative h-screen flex justify-between flex-col">
    <HeaderComponent />
    <div class="w-full flex-1 bg-surface-primary pt-24 pb-80 px-4 md:px-40">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>
