<template>
  <RouterLink v-bind="$attrs" class="nav-link" :class="{ active: subIsActive(this.$attrs.to) }">
    <slot name="icon"></slot>
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

function subIsActive(input) {
  return input === '/' ? route.path === input : route.path.includes(input)
}
</script>

<style scoped>
.nav-link {
  padding: 0.75rem 1rem;
  border-left: 4px solid transparent;
  color: silver;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.85rem;
  line-height: 0;
}

.nav-link:hover {
  background-color: var(--black-mute);
}

.nav-link.active {
  background-color: var(--black-soft);
  border-left: 4px solid var(--primary);
  color: white;
}
</style>
