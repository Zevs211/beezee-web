<template>
  <div class="w-full">
    <slot />
    <div class="self-start mt-2">
      <span>{{ value.length }}</span>
      <span class="mx-2">/</span>
      <span>{{ maxlength }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  maxlength: {
    type: Number,
    required: true,
  },
});
</script>
