<template>
  <input
    type="text"
    class="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-300"
    :placeholder="placeholder"
    v-model="localValue"
    @keyup.enter="triggerSearch"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  debounce?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'search', value: string): void
}>()

const localValue = ref(props.modelValue)

let timeout: number | undefined

const handleInput = () => {
  if (props.debounce) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      emit('update:modelValue', localValue.value)
      emit('search', localValue.value)
    }, 300)
  } else {
    emit('update:modelValue', localValue.value)
    emit('search', localValue.value)
  }
}

const triggerSearch = () => {
  emit('update:modelValue', localValue.value)
  emit('search', localValue.value)
}

watch(
  () => props.modelValue,
  (val) => {
    if (val !== localValue.value) {
      localValue.value = val
    }
  }
)
</script>
