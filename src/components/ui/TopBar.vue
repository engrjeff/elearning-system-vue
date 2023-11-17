<template>
  <header class="topbar">
    <button class="icon-btn">
      <MenuIcon />
    </button>
    <UserGreeting />
    <div>
      <SignoutButton />
    </div>
  </header>
</template>

<script setup>
import MenuIcon from '@/components/icons/MenuIcon.vue'
import SignoutButton from './SignoutButton.vue'
import UserGreeting from './UserGreeting.vue'
</script>

<style scoped>
.topbar {
  height: var(--topbar-height);
  background-color: var(--white);
  border-bottom: 1px solid var(--border);
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon-btn {
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

.icon-btn:hover {
  background-color: var(--white-mute);
}

.icon-btn:focus-visible {
  outline: 2px solid var(--white-mute);
}
</style>
