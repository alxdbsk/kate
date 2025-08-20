<script setup lang="ts">
import LinkedInIcon from '~/assets/linkedin.svg'
import NavBarItemComponent from '~/components/NavBar/NavBarItemComponent.vue'

const navItems = [
  { text: 'About me', link: '/about' },
  { text: 'Projects', link: '/projects' },
  { text: 'CV', link: '/cv' },
]
</script>

<template>
  <footer class="w-full bg-surface-white">
    <div class="hidden md:flex items-center justify-between px-40 py-6">
      <div class="text-text-primary">
        Crafted by Katsiaryna Chmunevich © 2025
      </div>

      <div class="flex items-center gap-8">
        <div class="flex items-center gap-4">
          <NavBarItemComponent
            v-for="item in navItems"
            :key="item.text"
            :text="item.text"
            :link="item.link"
          />
        </div>

        <a
          href="https://www.linkedin.com/in/katsiaryna-chmunevich"
          target="_blank"
          class="rounded-2xl transition-colors"
        >
          <LinkedInIcon class="text-3xl" />
        </a>
      </div>
    </div>

    <div
      class="md:hidden flex flex-col items-center justify-between px-6 py-8 gap-6"
    >
      <div class="flex gap-4 items-center justify-center">
        <NavBarItemComponent
          v-for="item in navItems"
          :key="item.text"
          :text="item.text"
          :link="item.link"
        />
      </div>

      <div class="flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/katsiaryna-chmunevich"
          target="_blank"
          class="rounded-2xl transition-colors"
        >
          <LinkedInIcon class="text-3xl" />
        </a>
      </div>

      <div class="text-text-primary flex justify-center items-center">
        Crafted by Katsiaryna Chmunevich © 2025
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
