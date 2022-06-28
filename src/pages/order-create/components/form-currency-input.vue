<template>
  <div class="flex items-center text-xl">
    <span
      class="flex items-center h-full px-4 border border-gray-400 rounded-l shadow bg-slate-200"
    >
      {{ currency.name }}
    </span>
    <input
      type="number"
      class="w-full h-12 px-4 shadow outline-none"
      :value="modelValue"
      @input="onInput"
    >
    <span
      class="flex items-center h-full px-4 border border-gray-400 rounded-r shadow bg-slate-200"
    >
      {{ currency.symbol }}
    </span>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  currency: {
    type: Object,
    reqiuired: false,
    default: () => ({
      name: 'USD', symbol: '$',
    }),
  },
});
const { emit } = getCurrentInstance();

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
