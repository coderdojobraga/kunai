<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const plugin = Autoplay({
  delay: 9000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

import { ref } from "vue"

const emblaApi = ref<CarouselApi | null>(null)
const currentIndex = ref(0)

function onInitApi(api: CarouselApi) {
  emblaApi.value = api

  try {
    const idx = (api as any).selectedScrollSnap?.()
    currentIndex.value = typeof idx === "number" ? idx : 0
  } catch (e) {
    currentIndex.value = 0
  }

  if (api && typeof api.on === "function") {
    api.on("select", () => {
      try {
        const i = (api as any).selectedScrollSnap?.()
        currentIndex.value = typeof i === "number" ? i : currentIndex.value
      } catch (e) {}
    })
  }
}

function onTimelineClick(idx: number) {
  if (!emblaApi.value) return
  try {
    emblaApi.value.scrollTo(idx)
  } catch (e) {}

  try {
    plugin.stop()
  } catch (e) {}
}
</script>

<template>
  <div class="container mx-auto lg:w-5/6 w-full">

    <div class="w-full flex justify-center mb-6">
      <div class="flex gap-6 items-center">
        <button
          v-for="i in 3"
          :key="i"
          @click="onTimelineClick(i - 1)"
          :aria-pressed="currentIndex === i - 1"
          class="w-12 h-12 rounded-full flex items-center justify-center border transition-colors"
          :class="currentIndex === i - 1 ? 'bg-primary text-white border-transparent' : 'bg-white text-slate-700 border-slate-200'"
        >
          <span class="font-medium">{{ i }}</span>
        </button>
      </div>
    </div>

    <Carousel
      class="w-full"
      :plugins="[plugin]"
      @init-api="onInitApi"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play()]"
    >

      <CarouselContent class="p-12">
        <CarouselItem>
          <slot name="mentor" />
        </CarouselItem>

        <CarouselItem>
          <slot name="developer" />
        </CarouselItem>

        <CarouselItem>
          <slot name="social" />
        </CarouselItem>
      </CarouselContent>

    </Carousel>

  </div>
</template>
