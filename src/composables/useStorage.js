import { storage } from '@/config/firebase'
import { ref as firebaseRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { ref } from 'vue'

/**
 *
 * @param {string} folder
 */
export function useStorage(folder) {
  const status = ref('idle')
  const uploadError = ref(null)
  const uploadProgress = ref(0)

  const metadata = {
    contentType: 'image/jpeg'
  }

  /**
   *
   * @param {File} file
   */
  async function handleFileUpload(file) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = firebaseRef(storage, `${folder}/` + file.name)

    const snapshot = await uploadBytesResumable(storageRef, file, metadata)

    const fileUrl = await getDownloadURL(snapshot.ref)

    return fileUrl
  }

  return {
    handleFileUpload,
    status,
    uploadError,
    uploadProgress
  }
}
