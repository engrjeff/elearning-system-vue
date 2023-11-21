<template>
  <RouterLink v-bind="$attrs" class="back-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.back-btn {
  appearance: none;
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
}

.back-btn:hover {
  background-color: var(--white-mute);
}

.back-btn:focus-visible {
  outline: 2px solid var(--white-mute);
}

.back-btn > svg {
  width: 18px;
  height: 18px;
}
</style>
