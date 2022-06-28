<template>
  <textarea
    type="text"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :rows="rows"
    :value="modelValue"
    @input="onInput">
  </textarea>
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
  rows: {
    type: Number,
    required: false,
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
