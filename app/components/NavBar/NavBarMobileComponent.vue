<script setup lang="ts">
import NavBarItemComponent from '~/components/NavBar/NavBarItemComponent.vue'
import CrossIcon from '~/assets/cross.svg'
import BurgerIcon from '~/assets/burger.svg'
import IconButton from '~/components/UIKit/IconButton.vue'
import type { INavBarItem } from '~/components/NavBar/navBar.model'

defineProps<{
  logoText: string
  navItems: INavBarItem[]
}>()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="md:hidden">
    <div class="flex items-center justify-between px-6 py-4">
      <a href="/" class="text-text-primary text-p1">Kate.</a>

      <IconButton
        :icon="isMobileMenuOpen ? CrossIcon : BurgerIcon"
        @click="toggleMobileMenu"
      >
        <CrossIcon v-if="isMobileMenuOpen" class="text-2xl" />
        <BurgerIcon v-else class="text-2xl" />
      </IconButton>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="fixed top-0 right-0 w-screen max-w-96 h-screen z-10 bg-surface-primary flex flex-col py-12 px-4"
    >
      <div class="flex justify-end">
        <IconButton @click="toggleMobileMenu">
          <CrossIcon class="text-2xl m-0" />
        </IconButton>
      </div>

      <div class="flex flex-col gap-4">
        <NavBarItemComponent
          v-for="item in navItems"
          :key="item.text"
          :text="item.text"
          :link="item.link"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
