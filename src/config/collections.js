import { collection } from 'firebase/firestore'
import { db } from './firebase'

export const profileCollection = collection(db, 'profiles')
