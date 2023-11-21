<template>
  <div class="form-wrapper">
    <PageHeader
      title="Create New Course"
      subtitle="Fill the details below. All fields are required."
    >
      <template #left-action>
        <BackButton to="/teacher/course-manager" aria-label="back to course manager" />
      </template>
    </PageHeader>
    <CourseForm />
  </div>
</template>

<script setup>
import BackButton from '@/components/ui/BackButton.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import CourseForm from '@/modules/teacher/CourseForm.vue'
</script>

<style scoped>
.form-wrapper {
  background-color: var(--white);
}

.form-wrapper > div {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.form-wrapper > form {
  padding: 1.5rem 2rem;
}
</style>
