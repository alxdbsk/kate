<script setup lang="ts">
import NavBarItemComponent from '~/components/NavBar/NavBarItemComponent.vue'
import type { INavBarItem } from '~/components/NavBar/navBar.model'

defineProps<{
  logoText: string
  navItems: INavBarItem[]
}>()
</script>

<template>
  <div class="hidden md:flex items-center justify-between px-40 py-6">
    <a href="/" class="text-text-primary text-p1">{{ logoText }}</a>

    <div class="flex items-center space-x-1">
      <NavBarItemComponent
        v-for="item in navItems"
        :key="item.text"
        :text="item.text"
        :link="item.link"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
