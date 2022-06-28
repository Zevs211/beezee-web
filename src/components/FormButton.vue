<template>
  <button
    class="px-4 py-2 text-white transition rounded shadow hover:shadow-xl hover:scale-110"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
