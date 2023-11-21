<template>
  <div class="edit-form-grid">
    <form class="form" @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Course Details</legend>
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
          <FileInput
            name="banner-image"
            id="banner-image"
            :initial-src="course.bannerImageUrl"
            v-model="bannerImage"
          />
        </div>
        <div class="form-action">
          <button type="reset" class="btn">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </fieldset>
    </form>
    <form class="form">Lessons form</form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FileInput from '../../components/ui/FileInput.vue'

const props = defineProps(['course'])

const title = ref(props.course.title)
const description = ref(props.course.description)
const price = ref(props.course.price)
const category = ref(props.course.category)
const bannerImage = ref()
</script>

<style scoped>
legend {
  font-weight: 600;
  margin-bottom: 1rem;
}
.edit-form-grid {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.edit-form-grid .form {
  flex: 1;
  padding: 1.5rem;
  border: 1px solid silver;
}
</style>
