<template>
  <div v-if="courseService.isLoading.value" class="course-loading-container">
    <LoadingSpinner />
  </div>
  <div v-if="Boolean(course)">
    <PageHeader :title="course.title">
      <template #left-action>
        <BackButton to="/teacher/course-manager" />
      </template>
    </PageHeader>
    <EditCourseForms :course="course" />
  </div>
</template>

<script setup>
import BackButton from '@/components/ui/BackButton.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import PageHeader from '@/components/ui/PageHeader.vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useCourseService } from '@/composables/useCourseService'
import EditCourseForms from '../../modules/teacher/EditCourseForms.vue'

const course = ref()
const courseService = useCourseService()
const route = useRoute()

onMounted(async () => {
  course.value = await courseService.getCourse(route.params.id)
})
</script>

<style scoped>
.course-loading-container {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
