import { getDocs, limit, query, where } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { profileCollection } from '../config/collections'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(null)

  /**
   *
   * @param {string} userId
   */
  const getCurrentUserProfile = async (userId) => {
    const q = query(profileCollection, where('userId', '==', userId), limit(1))
    const querySnapshot = await getDocs(q)

    profile.value = querySnapshot.docs[0]?.data()
  }

  const clearProfile = () => (profile.value = null)

  const currentRole = computed(() => {
    return profile.value?.role
  })

  return { getCurrentUserProfile, clearProfile, profile, currentRole }
})
