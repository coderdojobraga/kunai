<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { GitPullRequestCreateArrow, UserPlus, Highlighter } from "lucide-vue-next"

const plugin = Autoplay({
  delay: 9000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

import { ref } from "vue"

const emblaApi = ref<CarouselApi | null>(null)
const currentIndex = ref(0)
const icons = [
  { title: "Mentor", comp: UserPlus },
  { title: "Developer", comp: GitPullRequestCreateArrow },
  { title: "Design & Marketing", comp: Highlighter },
]

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

  try {
    const slideNodes = (api as any).slideNodes || []
    const snapList = (api as any).scrollSnapList || []
    console.debug("Embla slides:", slideNodes.length, "snapList:", snapList)
  } catch (e) {
    console.debug("Embla debug read failed", e)
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
      <div class="relative w-5/6 max-w-md flex items-center justify-center">
      <div class="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200"></div>

        <div class="relative z-10 flex w-full justify-between items-center">
          <button
            v-for="(icon, idx) in icons"
            :key="idx"
            @click="onTimelineClick(idx)"
            :aria-pressed="currentIndex === idx"
            class="flex items-center justify-center w-14 h-14 rounded-full transition-transform"
            :class="currentIndex === idx ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-white text-slate-700 border border-slate-200'"
            :aria-label="`Go to ${icon.title}`"
            :title="icon.title"
          >
            <component :is="icon.comp" class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <Carousel
      class="w-full"
      :plugins="[plugin]"
      @init-api="onInitApi"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play()]"
    >

      <CarouselContent class="p-3">
        <CarouselItem>
          <slot name="mentor" />
        </CarouselItem>

        <CarouselItem>
          <slot name="developer" />
        </CarouselItem>

        <CarouselItem>
          <slot name="communication" />
        </CarouselItem>
      </CarouselContent>

    </Carousel>

  </div>
</template>
