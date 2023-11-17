<template>
  <aside class="sidebar">
    <div class="app-block">
      <span>LearnNow</span>
    </div>
    <span class="group-label">Menu</span>
    <nav>
      <NavLink v-for="menu in menuItems" :key="menu.label" :to="menu.path">
        <template #icon>
          <HomeIcon />
        </template>
        <span>{{ menu.label }}</span>
      </NavLink>
    </nav>
  </aside>
</template>

<script setup>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import { useProfileStore } from '@/store/profile'
import { computed } from 'vue'
import NavLink from './NavLink.vue'

const profileStore = useProfileStore()

const studentMenu = [
  { path: '/', label: 'Dashboard', icon: HomeIcon },
  { path: '/courses', label: 'Browse Courses' },
  { path: '/my-courses', label: 'My Courses' },
  { path: '/my-quizzes', label: 'My Quizzes' }
]

const teacherMenu = [
  { path: '/course-manager', label: 'Course Manager' },
  { path: '/quiz-manager', label: 'Quiz Manager' }
]

const menuItems = computed(() => {
  return profileStore.profile
    ? profileStore.profile.role === 'STUDENT'
      ? studentMenu
      : studentMenu.concat(teacherMenu)
    : []
})
</script>

<style scoped>
.sidebar {
  position: fixed;
  height: 100vh;
  inset: 0;

  width: var(--sidebar-width);
  background-color: var(--black);
  color: var(--white);
}

.app-block {
  height: var(--topbar-height);
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.app-block > span {
  font-weight: 500;
  font-size: 1.75rem;
}

.group-label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.25rem 1rem;
  color: gray;
  display: block;
  margin-bottom: 1rem;
}
</style>
