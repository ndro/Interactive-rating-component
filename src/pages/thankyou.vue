<script setup>
import { computed } from 'vue'

const ratingValue = computed(() => {
  return localStorage.getItem('rating')
})
</script>

<template>
  <div class="text-white">
    <div class="flex flex-col items-center justify-center px-1 py-2">
      <img src="../assets/illustration-thank-you.svg" alt="Star image" class="w-32 mb-6">

      <div class="px-3 py-1 mb-6 text-xs rounded-full text-primary bg-dark-blue">
        You selected {{ ratingValue }} out of 5
      </div>

      <h1 class="mb-2 text-xl font-bold">Thank you!</h1>

      <p class="text-xs leading-normal tracking-tight text-center text-light-grey">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  </div>
</template>