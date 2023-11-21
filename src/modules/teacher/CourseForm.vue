<template>
  <form class="form" @submit.prevent="handleSubmit">
    <fieldset :disabled="courseService.isLoading.value">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the course title"
          v-model="title"
          required
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter the course description"
          rows="4"
          v-model="description"
          required
        ></textarea>
      </div>
      <div class="form-control">
        <label for="category">Category</label>
        <select name="category" id="category" v-model="category">
          <option disabled value="">Select a Category</option>
          <option value="IT & Software">IT & Software</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Finance">Finance</option>
          <option value="Science">Science</option>
          <option value="Engineering">Engineering</option>
          <option value="Productivity">Productivity</option>
        </select>
      </div>
      <div class="form-control">
        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="0.00"
          min="0"
          pattern="/^[1-9][0-9]?(\.[0-9]{1,2})?$/"
          style="max-width: 240px"
          v-model.number="price"
          required
        />
      </div>
      <div class="form-control">
        <label for="banner-image">Banner Image</label>
        <FileInput name="banner-image" id="banner-image" v-model="bannerImage" />
      </div>
      <div class="form-action">
        <button type="reset" class="btn">Cancel</button>
        <button type="submit" class="btn btn-primary">
          {{ courseService.isLoading.value ? 'Saving...' : 'Save Course' }}
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import FileInput from '@/components/ui/FileInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useCourseService } from '../../composables/useCourseService'
import { useToastStore } from '../../store/toast'

const title = ref('')
const description = ref('')
const price = ref('')
const category = ref('')
const bannerImage = ref()

const courseService = useCourseService()
const router = useRouter()

const toast = useToastStore()

async function handleSubmit() {
  await courseService.createCourse({
    title: title.value,
    description: description.value,
    price: parseFloat(price.value),
    category: category.value,
    bannerImage: bannerImage.value
  })

  toast.show({ intent: 'success', message: 'Course added!' })

  router.replace('/teacher/course-manager')
}
</script>

<style scoped></style>
