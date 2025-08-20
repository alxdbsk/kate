<template>
  <div class="flex flex-col gap-16">
    <section class="flex flex-col gap-3">
      <h1 class="text-h1 text-text-primary">Hey! I’m Kate</h1>
      <p class="text-text-secondary text-p2 md:w-4/5">
        UX / UI Designer, Product Designer helping products get better results
        with their apps and websites. I enjoy creating user-centric, delightful,
        and human experiences.
      </p>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCardComponent
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { IProjectCard } from '~/components/ProjectCard/projectCard.model'

useSeoMeta({
  title: 'Kate - Portfolio',
  description: "Welcome to Katsiaryna Chmunevich's portfolio",
})

const projects = ref<IProjectCard[]>([
  {
    title: 'Design System for LMS',
    description:
      'As a Product Designer, I worked on the establishing a scalable Design System that improved consistency, enhanced accessibility and elevated the overall user experience.',
    imageUrl: '/lms.png',
    link: '#',
  },
  {
    title: 'AI Search',
    description:
      'The AI Search feature to enhance a traditional search experience by enabling finding relevant courses and content tailored to their unique profiles, goals, and learning objectives.',
    imageUrl: '/ai-search.png',
    rainbow: true,
    link: '#',
  },
  {
    title: 'Legal CRM Platform',
    description:
      'A CRM platform for a legal firm, specializing in landlord-tenant law, with a focus on eviction services and property management legal support.',
    imageUrl: '/crm.png',
    tags: ['Cooming Soon'],
  },
  {
    title: 'Preventive Platform for Alzheimer’s Disease',
    description:
      'A preventive digital platform designed to support early detection and lifestyle interventions for individuals at risk of Alzheimer’s disease.',
    imageUrl: '/alz-platform.png',
    tags: ['Cooming Soon'],
  },
  {
    title: 'CLM System',
    description:
      'A streamlined Contract Lifecycle Management (CLM) system designed to simplify contract creation, approval, and tracking.',
    tags: ['Cooming Soon'],
  },
])
</script>
