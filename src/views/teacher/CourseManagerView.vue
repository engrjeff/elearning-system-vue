<template>
  <PageHeader title="Course Manager" subtitle="Create, View, Update, Delete your courses here">
    <template #right-action>
      <RouterLink class="btn btn-primary" to="/teacher/course-manager/new">Add Course</RouterLink>
    </template>
  </PageHeader>
  <CourseList />
</template>

<script setup>
import PageHeader from '@/components/ui/PageHeader.vue'
import CourseList from '@/modules/teacher/CourseList.vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
