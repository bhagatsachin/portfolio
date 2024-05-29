<script setup lang="ts">
import { projects } from '@/components/ProjectData';
import ProjectCarousel from '@/components/ProjectCarousel.vue';

</script>

<template>
  <main class="grow h-min-screen">
    <!-- You can open the modal using ID.showModal() method -->
    <div class="h-screen grid-flow-col md:columns-2 lg:columns-3 xl:columns-4">
      <ProjectCarousel v-for="(project, index) in projects" :key="index" :project-name="project.projectName"
        :images="project.images" class='p-4'>
      </ProjectCarousel>

    </div>


  </main>
</template>