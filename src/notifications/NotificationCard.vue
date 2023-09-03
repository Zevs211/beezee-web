<template>
  <div class="flex flex-col justify-center w-full h-20 px-10 mt-2 rounded-xl text-white text-xl opacity-90"
  :class="{'bg-red-300': dangerous === true, 'bg-emerald-300': dangerous === false}">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  dangerous: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
});
</script>
