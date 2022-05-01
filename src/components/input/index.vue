<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput">
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  mask: {
    type: String,
    required: false,
    default: ''
  }
})
const { emit } = getCurrentInstance()

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<script>
export default { name: 'CInput' }
</script>