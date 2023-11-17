import { profileCollection } from '@/config/collections'
import { auth } from '@/config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { addDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(auth.currentUser)
  const isLoading = ref(false)
  const error = ref(null)

  const router = useRouter()

  let errorTimeoutId

  /**
   *
   * @param {Object} userData
   * @param {string} userData.firstName
   * @param {string} userData.lastName
   * @param {('STUDENT' | 'TEACHER')} userData.role
   * @param {string} userData.email
   * @param {string} userData.password
   */
  const createUser = async (userData) => {
    try {
      isLoading.value = true

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      )

      if (userCredential.user) {
        user.value = userCredential.user

        // update profile of user here
        await updateProfile(userCredential.user, {
          displayName: `${userData.firstName} ${userData.lastName}`
        })

        // create profile document for user
        await addDoc(profileCollection, {
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: userData.role,
          email: userData.email,
          userId: userCredential.user.uid
        })

        console.log('User profile created!')

        router.replace('/')
      }
    } catch (error) {
      console.log(error)
      // handleError(error)
    } finally {
      isLoading.value = false
    }
  }

  /**
   *
   * @param {string} email
   * @param {string} password
   */
  const login = async (email, password) => {
    try {
      isLoading.value = true
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {
        user.value = userCredential.user
        router.replace('/')
      }
    } catch (error) {
      handleError('Invalid credentials')
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    isLoading.value = true
    signOut(auth)
      .catch(handleError)
      .finally(() => (isLoading.value = false))
  }

  /**
   *
   * @param {string} err
   */
  const handleError = (err) => {
    error.value = err

    errorTimeoutId = setTimeout(clearError, 3000)
  }

  const clearError = () => {
    if (errorTimeoutId) clearTimeout(errorTimeoutId)

    error.value = null
  }
  return {
    user,
    error,
    isLoading,
    login,
    createUser,
    logout,
    clearError
  }
})
