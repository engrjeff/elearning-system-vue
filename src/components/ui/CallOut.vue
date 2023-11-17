<template>
  <div class="callout">
    <p v-if="Boolean(title)" class="callout-title">{{ title }}</p>
    <p class="callout-body">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  message: String
})
</script>

<style scoped>
.callout {
  padding: 0.8rem 1rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 0, 0, 0.2);
  color: rgba(240, 0, 0, 0.6);
  margin-bottom: 1rem;
}

.callout-title {
  font-size: 0.85rem;
  font-weight: 600;
}

.callout-body {
  font-size: 0.85rem;
}
</style>
