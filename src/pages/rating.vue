<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const ratingValue = ref(0)

const submit = () => {
  localStorage.setItem('rating', ratingValue.value)

  router.push({ name: 'ThankYou' })
}
</script>

<template>
  <div class="text-white">
    <div class="mb-6">
      <img src="../assets/icon-star.svg" alt="Star image" class="p-3 rounded-full w-9 bg-dark-blue">
    </div>

    <h1 class="mb-2 text-xl font-bold">How did we do?</h1>

    <p class="mb-5 text-xs leading-normal tracking-tight text-light-grey">
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
    </p>

    <div class="flex justify-between mb-6 text-sm text-center item-center text-medium-grey">
      <div>
        <input name="rating" type="radio" id="1" value="1" v-model="ratingValue" class="hidden peer"/>
        <label for="1" class="inline-block w-10 h-10 p-3 font-semibold transition duration-300 rounded-full cursor-pointer bg-dark-blue peer-hover:bg-light-grey peer-hover:text-white peer-checked:bg-primary peer-checked:text-white">
          1
        </label>
      </div>
      <div>
        <input name="rating" type="radio" id="2" value="2" v-model="ratingValue" class="hidden peer"/>
        <label for="2" class="inline-block w-10 h-10 p-3 font-semibold transition duration-300 rounded-full cursor-pointer bg-dark-blue peer-hover:bg-light-grey peer-hover:text-white peer-checked:bg-primary peer-checked:text-white">
          2
        </label>
      </div>
      <div>
        <input name="rating" type="radio" id="3" value="3" v-model="ratingValue" class="hidden peer"/>
        <label for="3" class="inline-block w-10 h-10 p-3 font-semibold transition duration-300 rounded-full cursor-pointer bg-dark-blue peer-hover:bg-light-grey peer-hover:text-white peer-checked:bg-primary peer-checked:text-white">
          3
        </label>
      </div>
      <div>
        <input name="rating" type="radio" id="4" value="4" v-model="ratingValue" class="hidden peer"/>
        <label for="4" class="inline-block w-10 h-10 p-3 font-semibold transition duration-300 rounded-full cursor-pointer bg-dark-blue peer-hover:bg-light-grey peer-hover:text-white peer-checked:bg-primary peer-checked:text-white">
          4
        </label>
      </div>
      <div>
        <input name="rating" type="radio" id="5" value="5" v-model="ratingValue" class="hidden peer"/>
        <label for="5" class="inline-block w-10 h-10 p-3 font-semibold transition duration-300 rounded-full cursor-pointer bg-dark-blue peer-hover:bg-light-grey peer-hover:text-white peer-checked:bg-primary peer-checked:text-white">
          5
        </label>
      </div>
    </div>

    <button @click="submit" class="w-full h-8 transition duration-300 bg-primary rounded-2xl hover:bg-white hover:text-primary">
      <span class="text-xs font-semibold tracking-widest">SUBMIT</span>
    </button>
  </div>
</template>