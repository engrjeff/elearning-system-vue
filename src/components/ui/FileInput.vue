<template>
  <div>
    <input
      ref="inputFileRef"
      type="file"
      :name="name"
      :id="id"
      accept="image/*"
      hidden
      @change="handleChange"
    />
    <button type="button" class="btn btn-primary" @click="inputFileRef.click()">Browse File</button>

    <img v-if="Boolean(imageSrc)" :src="imageSrc" alt="" class="image-preview" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  id: String,
  initialSrc: {
    type: String,
    required: false
  },
  modelValue: {
    type: Object,
    required: false
  }
})

const emits = defineEmits(['update:modelValue'])

const inputFileRef = ref()
const imageSrc = ref(props.initialSrc)

function handleChange(e) {
  const file = e.target.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    imageSrc.value = reader.result
  }
  reader.readAsDataURL(file)

  emits('update:modelValue', file)
}
</script>

<style scoped>
.image-preview {
  width: 100%;
  max-width: 320px;
  display: block;
  aspect-ratio: 16/9;
  margin: 1rem 0;
}
</style>
