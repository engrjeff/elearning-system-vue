<template>
  <nav>
    <NavLink v-for="menu in studentMenu" :key="menu.label" :to="menu.path">
      <template #icon>
        <component :is="menu.icon"></component>
      </template>
      <span>{{ menu.label }}</span>
    </NavLink>
  </nav>
</template>

<script setup>
import GridIcon from '@/components/icons/GridIcon.vue'
import MyCoursesIcon from '@/components/icons/MyCoursesIcon.vue'
import MyQuizzesIcon from '@/components/icons/MyQuizzesIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

import NavLink from '@/components/ui/NavLink.vue'

const studentMenu = [
  { path: '/', label: 'Dashboard', icon: GridIcon },
  { path: '/courses', label: 'Browse Courses', icon: SearchIcon },
  { path: '/my-courses', label: 'My Courses', icon: MyCoursesIcon },
  { path: '/my-quizzes', label: 'My Quizzes', icon: MyQuizzesIcon }
]
</script>

<style lang="scss" scoped></style>
