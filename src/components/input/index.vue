<template>
  <input
    type="text"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :value="modelValue"
    @input="onInput">
</template>

<script setup>
import { getCurrentInstance } from 'vue';

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  maxlength: {
    type: Number,
    required: false,
    default: Infinity,
  },
  mask: {
    type: String,
    required: false,
    default: '',
  },
});
const { emit } = getCurrentInstance();

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<script>
export default { name: 'GenericInput' };
</script>
