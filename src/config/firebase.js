import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUOpso5vyzZRk8XBpWr_IO0ZHyfQGe4O8',
  authDomain: 'lms-app-195c2.firebaseapp.com',
  projectId: 'lms-app-195c2',
  storageBucket: 'lms-app-195c2.appspot.com',
  messagingSenderId: '763352790714',
  appId: '1:763352790714:web:b6293dc87f0afe8e397483'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
