<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="toast.isShown" class="toast-container">
        <div class="toast-wrapper">
          <span class="toast-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <div class="toast-body">
            <div class="toast-title">Success</div>

            <div class="toast-message">
              {{ toast.message }}
            </div>
          </div>

          <button class="toast-close" aria-label="close" @click="toast.hide()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useToastStore } from '../../store/toast'

const toast = useToastStore()
</script>

<style scoped>
.toast-container {
  position: fixed;
  right: 1rem;
  top: 1rem;
}
.toast-wrapper {
  display: flex;
  gap: 1rem;
  background-color: #fff;
  border-left: 4px solid green;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  min-width: 280px;
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.toast-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: green;
}

.toast-body {
  font-size: 0.8rem;
}

.toast-title {
  font-weight: 600;
  color: var(--black-soft);
}

.toast-message {
  color: gray;
}

.toast-close {
  position: absolute;
  top: 4px;
  right: 2px;
  appearance: none;
  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;
}

.toast-close:hover {
  color: black;
}
.toast-close > svg {
  width: 1rem;
  height: 1rem;
}

.toast-enter-active {
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.25, 1.35);
}

.toast-leave-active {
  transform: translateX(calc(100% + 20px));
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateX(calc(100% + 20px));
  opacity: 0;
}
</style>
