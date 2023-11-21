<template>
  <div>
    <div v-if="courseService.isLoading.value" class="course-loading-container">
      <LoadingSpinner />
    </div>
    <ul v-else class="course-list">
      <li class="course-list-item" v-for="course in courses" :key="course.id">
        <div class="course-card">
          <div class="course-banner">
            <img :src="course.bannerImageUrl" :alt="course.title" />
          </div>
          <div class="course-details">
            <h3 class="course-title">
              <RouterLink :to="`/teacher/course-manager/${course.id}`">{{
                course.title
              }}</RouterLink>
            </h3>
            <div class="course-footer">
              <span class="course-category">{{ course.category }}</span>
              <span class="course-price">Php {{ course.price }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import LoadingSpinner from '../../components/ui/LoadingSpinner.vue'
import { useCourseService } from '../../composables/useCourseService'

const courses = ref([])
const courseService = useCourseService()

onMounted(async () => {
  courses.value = await courseService.getCoursesByUser()
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
.course-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.course-card {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.course-banner img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.course-details {
  padding: 0.5rem 1rem;
}

.course-title {
  font-size: 1rem;
  font-weight: 600;
}

.course-title:hover {
  text-decoration: underline;
}

.course-footer {
  display: flex;
  justify-content: center;
}

.course-category {
  font-size: 0.75rem;
}

.course-price {
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: auto;
}
</style>
