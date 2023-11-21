<template>
  <div class="toolbar">
    <slot name="left-action"></slot>
    <div>
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <div class="right-action">
      <slot name="right-action"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
}
.title {
  font-size: 1.5rem;
  font-weight: 600;
}

.subtitle {
  font-size: 0.85rem;
  color: gray;
}

.right-action {
  margin-left: auto;
}
</style>
