<template>
  <max-length v-if="maxlength" :maxlength="maxlength" :value="modelValue">
    <generic-input
      class="w-full h-12 px-4 text-xl rounded shadow outline-none"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @input="onInput"
    />
  </max-length>
  <generic-input
    v-else
    class="w-full h-12 px-4 text-xl rounded shadow outline-none"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import GenericInput from '../../../components/input/index.vue';
import MaxLength from './max-length.vue';

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
  },
});
const { emit } = getCurrentInstance();

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
