<template>
  <div class="relative rounded shadow flex">
    <div class="flex items-center pl-4 pointer-events-none bg-white rounded-l">
      <svg
        class="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    <input
      datepicker
      datepicker-buttons
      type="text"
      class="
        text-gray-900
        w-full
        px-4
        py-2
        outline-none
        rounded-r
      "
      placeholder="Выберите дату"
    >
  </div>
</template>

<script setup>
import { ref, onMounted, toRefs, defineProps, getCurrentInstance } from 'vue'

const props = defineProps({
  value: {
    type: Date,
    default: null
  }
})

onMounted(() => {
})

const { value } = toRefs(props)
const { emit } = getCurrentInstance()
</script>
