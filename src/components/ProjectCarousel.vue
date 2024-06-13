<script setup lang="ts">
import _ from 'lodash'
//const props = 
defineProps<{
    projectName: string;
    images: string[];
    videos?: string[];
}>()

</script>
<template>
    <div class="mx-auto">

        <div :onclick="`${projectName}.showModal()`"
            class="cursor-pointer mx-auto card max-w-96 bg-accent shadow-xl">
            <figure><img :src="images[0]" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-black">
                    {{ _.startCase(projectName) }}
                </h2>
                <!-- <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div> -->
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
                <div class="carousel">
                    <div :id="`${projectName}_${index}`" v-for="(image, index) in images" :key="index"
                        class="carousel-item max-h-full w-full">
                        <img :src="image" class="object-scale-down max-h-[75dvh] mx-auto" />
                    </div>
                    <div :id="`${projectName}_${index}`" v-for="(image, index) in videos ?? []" :key="index"
                        class="carousel-item max-h-full w-full">
                        <video controls muted autoplay class="object-scale-down max-h-[75dvh] mx-auto">
                            <source :src="image" type="video/mp4">
                        </video>
                    </div>

                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a :href="`#${projectName}_${index}`" v-for="index in (images.length + (videos?.length ?? 0))"
                        :key="index" class="btn btn-xs visited:text-purple-600">{{
                            index }}</a>
                    <!-- <a :href="`#${projectName}_${index}`" v-for="index in videos?.length" :key="index"
                        class="btn btn-xs visited:text-purple-600">{{
                            index + 1 }}</a> -->
                </div>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
</template>