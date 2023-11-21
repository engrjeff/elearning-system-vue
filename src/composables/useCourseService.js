import { coursesCollection } from '@/config/collections'
import { useAuthStore } from '@/store/auth'
import { addDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { ref } from 'vue'
import { db } from '../config/firebase'
import { useStorage } from './useStorage'

export function useCourseService() {
  const isLoading = ref(false)
  const error = ref(null)

  const auth = useAuthStore()
  const folderName = `${auth.user.uid}/courses`
  const storage = useStorage(folderName)

  /**
   *
   * @returns {Promise<Array<{ id: String, title: String, description: String, price: Number, category: String, bannerImageUrl: String }>>} array of courses
   */
  async function getCoursesByUser() {
    try {
      isLoading.value = true

      const q = query(coursesCollection, where('userId', '==', auth.user.uid))
      const querySnapshot = await getDocs(q)

      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<null | { id: String, title: String, description: String, price: Number, category: String, bannerImageUrl: String }>} course data
   */
  async function getCourse(id) {
    try {
      isLoading.value = true

      const docRef = doc(db, 'courses', id)
      const docSnapshot = await getDoc(docRef)

      if (!docSnapshot.exists()) return null

      return { id: docSnapshot.id, ...docSnapshot.data() }
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  /**
   *
   * @param {Object} course
   * @param {string} course.title
   * @param {string} course.description
   * @param {string} course.category
   * @param {number} course.price
   * @param {File} course.bannerImage
   */
  async function createCourse({ title, description, category, price, bannerImage }) {
    try {
      isLoading.value = true

      // upload banner image first
      const bannerImageUrl = await storage.handleFileUpload(bannerImage)

      const userId = auth.user.uid

      const newCourse = await addDoc(coursesCollection, {
        title,
        description,
        category,
        price,
        bannerImageUrl,
        userId
      })

      return newCourse.id
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    getCoursesByUser,
    getCourse,
    createCourse
  }
}
