<template>
  <nav>
    <NavLink v-for="menu in teacherMenu" :key="menu.label" :to="menu.path">
      <template #icon>
        <component :is="menu.icon"></component>
      </template>
      <span>{{ menu.label }}</span>
    </NavLink>
    <span class="group-label">My Learning</span>
    <NavLink v-for="menu in studentMenu" :key="menu.label" :to="menu.path">
      <template #icon>
        <component :is="menu.icon"></component>
      </template>
      <span>{{ menu.label }}</span>
    </NavLink>
  </nav>
</template>

<script setup>
import CourseIcon from '@/components/icons/CourseIcon.vue'
import GridIcon from '@/components/icons/GridIcon.vue'
import MyCoursesIcon from '@/components/icons/MyCoursesIcon.vue'
import MyQuizzesIcon from '@/components/icons/MyQuizzesIcon.vue'
import QuizIcon from '@/components/icons/QuizIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

import NavLink from '@/components/ui/NavLink.vue'

const teacherMenu = [
  { path: '/', label: 'Dashboard', icon: GridIcon },
  { path: '/courses', label: 'Browse Courses', icon: SearchIcon },
  { path: '/teacher/course-manager', label: 'Course Manager', icon: CourseIcon },
  { path: '/teacher/quiz-manager', label: 'Quiz Manager', icon: QuizIcon }
]

const studentMenu = [
  { path: '/my-courses', label: 'My Courses', icon: MyCoursesIcon },
  { path: '/my-quizzes', label: 'My Quizzes', icon: MyQuizzesIcon }
]
</script>

<style scoped>
.group-label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.25rem 1rem;
  color: gray;
  display: block;
  margin: 1rem 0;
}
</style>
