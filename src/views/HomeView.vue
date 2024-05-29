<script setup lang="ts">
import { projects } from '@/components/ProjectData';
import ProjectCarousel from '@/components/ProjectCarousel.vue';

</script>

<template>
  <main class="grow h-min-screen">
    <!-- You can open the modal using ID.showModal() method -->
    <div class="mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 max-w-screen-2xl">
      <!-- <div class="max-w-screen-2xl mx-auto flex flex-wrap"> -->
      <ProjectCarousel v-for="(project, index) in projects" :key="index" v-bind="project"
        class="max-w-96 p-4 break-inside-avoid-column">
      </ProjectCarousel>
    </div>

    <!-- </div> -->


  </main>
</template>