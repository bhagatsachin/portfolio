<script setup lang="ts">
import { computed, ref } from 'vue'
const carouselModal = ref();
defineProps<{
    projectName: string;
    images: string[];
}>()

</script>

<template>
    <div class="break-inside-avoid mx-auto">

        <div :onclick="`${projectName}.showModal()`" class="cursor-pointer mx-auto card max-w-96 bg-base-100 shadow-xl">
            <figure><img :src="images[0]" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    {{ projectName }}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
        <dialog :id="projectName" class="modal">
            <div class="modal-box w-11/12 !max-w-screen-xl">
                <div class="flex justify-between mb-6">
                    <h3 class="font-bold text-lg uppercase">{{ projectName }}</h3>
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </form>
                </div>
                <div class="carousel w-full">
                    <div v-for="(image, index) in images" :key="index" id="item1" class="carousel-item w-full">
                        <img :src="image" class="object-scale-down  max-h-full mx-auto" />
                    </div>
                </div>
            </div>
        </dialog>
    </div>
</template>