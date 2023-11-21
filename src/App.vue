<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppToast from './components/ui/AppToast.vue'
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
  <AppToast />
</template>

<style scoped></style>
