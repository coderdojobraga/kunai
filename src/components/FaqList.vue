<script setup>
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion"

defineProps({
  faqs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <Accordion type="single" collapsible class="w-full max-w-3xl mx-auto">
    <AccordionItem
      v-for="(faq, index) in faqs"
      :key="index"
      :value="`item-${index}`"
    >
      <AccordionTrigger class="text-xl font-semibold">
        {{ faq.question }}
      </AccordionTrigger>
      <AccordionContent class="text-muted-foreground leading-relaxed">
        {{ faq.answer }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
