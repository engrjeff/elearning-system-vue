<template>
  <aside class="sidebar">
    <div class="app-block">
      <span>LearnNow</span>
    </div>
    <span class="group-label">Menu</span>
    <StudentNavLinks v-if="profile.currentRole === 'STUDENT'" />
    <TeacherNavLinks v-if="profile.currentRole === 'TEACHER'" />
  </aside>
</template>

<script setup>
import { useProfileStore } from '@/store/profile'
import StudentNavLinks from '../../modules/student/StudentNavLinks.vue'
import TeacherNavLinks from '../../modules/teacher/TeacherNavLinks.vue'

const profile = useProfileStore()
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
