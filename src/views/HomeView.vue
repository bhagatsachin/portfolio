<script setup lang="ts">
import { computed, ref } from 'vue'
const myRef = ref<HTMLElement>();
console.log(myRef.value?.clientWidth);
const myVal = computed(() => myRef.value?.style?.width)
</script>

<template>
  <main class="grow h-min-screen">
    <!-- You can open the modal using ID.showModal() method -->
    <button class="btn" onclick="my_modal_4.showModal()">open modal</button>
    <dialog id="my_modal_4" class="modal">
      <div class="modal-box w-11/12 !max-w-screen">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Click the button below to close</p>
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
          </div>
          <div id="item4" class="carousel-item w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
          </div>
        </div>
      </div>
    </dialog>

    <div class="carousel w-full">
      <div id="item1" class="carousel-item w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
      </div>
      <div id="item2" class="carousel-item w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
      </div>
      <div id="item3" class="carousel-item w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
      </div>
      <div id="item4" class="carousel-item w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
    </div>
  </main>
</template>