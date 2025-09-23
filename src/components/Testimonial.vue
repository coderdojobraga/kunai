<script setup lang="ts">
defineProps<{
  testimonial: string
  author: string
  major: string
}>()
</script>

<template>
  <div>
    <div class="justify-center px-12">
      <div>
        <h2 class="text-7xl font-semibold text-purple max-sm:text-3xl">&quot;</h2>
        <p class="mt-4 mb-4 text-2xl max-sm:text-base leading-relaxed">{{ testimonial }}</p>
        <h2 class="text-right text-7xl font-semibold text-purple max-sm:text-3xl">&quot;</h2>
        <p class="mb-4 text-2xl leading-relaxed italic max-sm:text-xl">- {{ author }}, {{ major }}</p>
      </div>
    </div>
  </div>
</template>
