<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from './config/firebase'
import { useProfileStore } from './store/profile'

const router = useRouter()
const profileStore = useProfileStore()

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      router.replace('/login')
      return
    }

    await profileStore.getCurrentUserProfile(user.uid)
  })
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
