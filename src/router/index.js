import * as VueRouter from 'vue-router'

import AppView from '@/views/AppView.vue'
import CoursesView from '@/views/CoursesView.vue'

// student
import MyCoursesView from '@/views/student/MyCoursesView.vue'
import MyQuizzesView from '@/views/student/MyQuizzesView.vue'
import StudentDashboardView from '@/views/student/StudentDashboardView.vue'

// teacher
import CourseManagerView from '@/views/teacher/CourseManagerView.vue'
import QuizManagerView from '@/views/teacher/QuizManagerView.vue'
import TeacherView from '@/views/teacher/TeacherView.vue'

// auth-related
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

import { auth } from '@/config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    component: AppView,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: StudentDashboardView
      },
      {
        path: 'courses',
        component: CoursesView
      },
      {
        path: 'my-courses',
        component: MyCoursesView
      },
      {
        path: 'my-quizzes',
        component: MyQuizzesView
      },
      {
        path: 'teacher',
        component: TeacherView,
        meta: { role: 'TEACHER' },
        children: [
          {
            path: 'course-manager',
            component: CourseManagerView
          },
          {
            path: 'quiz-manager',
            component: QuizManagerView
          }
        ]
      }
    ]
  },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/forgot-password', component: ForgotPasswordView }
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

const notAllowedWhenSignedIn = ['/login', '/register', '/forgot-password']

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  const currentUser = await getCurrentUser()

  if (notAllowedWhenSignedIn.includes(to.path) && currentUser) {
    return next('/')
  }

  if (requiresAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})
