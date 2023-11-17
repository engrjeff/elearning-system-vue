<template>
  <button @click="handleSignOut">Log Out</button>
</template>

<script setup>
import { useAuthStore } from '../../store/auth'

const auth = useAuthStore()

function handleSignOut() {
  auth.logout()
}
</script>

<style scoped></style>
