<template>
  <max-length v-if="maxlength" :maxlength="maxlength" :value="modelValue">
    <generic-textarea
      class="w-full px-4 py-2 text-xl rounded shadow outline-none"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :rows="rows"
      :value="modelValue"
      @input="onInput"
    />
  </max-length>
  <generic-textarea
    v-else
    class="w-full px-4 py-2 text-xl rounded shadow outline-none"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :rows="rows"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import GenericTextarea from '../../../components/textarea/index.vue';
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
  rows: {
    type: Number,
    required: false,
  },
});
const { emit } = getCurrentInstance();

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
