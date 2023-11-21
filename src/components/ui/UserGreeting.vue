<template>
  <div v-if="auth.user">
    <span class="username">Hi, {{ auth.user.displayName }}</span>
  </div>
</template>

<script setup>
import { useAuthStore } from '../../store/auth'

const auth = useAuthStore()
</script>

<style scoped>
.username {
  font-weight: 600;
}
</style>
