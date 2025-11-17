<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import testimonialData from "src/data/testimonials.json"
import Testimonial from "./Testimonial.vue"

const plugin = Autoplay({
  delay: 9000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})
</script>

<template>
  <Carousel
    class="container mx-auto lg:w-5/6 max-sm:w-5/6"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];"
  >
    <CarouselContent>
      <CarouselItem v-for="(t, index) in testimonialData" :key="index">
        <div class="p-1">
          <Testimonial :testimonial="t.testimonial" :author="t.author" :major="t.major" />
        </div>
      </CarouselItem>
    </CarouselContent>
    <div class="max-md:hidden">
        <CarouselPrevious />
        <CarouselNext />
    </div>
  </Carousel>
</template>
