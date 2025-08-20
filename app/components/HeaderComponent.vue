<script setup lang="ts">
import NavBarDesktopComponent from '~/components/NavBar/NavBarDesktopComponent.vue'
import { NAV_ITEMS } from '~/components/NavBar/navBar.model'
import NavBarMobileComponent from '~/components/NavBar/NavBarMobileComponent.vue'

const LOGO_TEXT = 'Kate.'
</script>

<template>
  <nav
    class="w-full sticky bg-radial from-white/60 to-white/20 border border-white backdrop-blur-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
  >
    <NavBarDesktopComponent :logo-text="LOGO_TEXT" :nav-items="NAV_ITEMS" />
    <NavBarMobileComponent :logo-text="LOGO_TEXT" :nav-items="NAV_ITEMS" />
  </nav>
</template>

<style scoped lang="scss"></style>
