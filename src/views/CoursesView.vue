<template>
  <div>
    <h1>Courses View</h1>
    <router-link to="/courses/new">Add Course</router-link>
    <div class="col">
      <router-link to="/courses/1">Course 1</router-link>
      <router-link to="/courses/2">Course 2</router-link>
      <router-link to="/courses/3">Course 3</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
}
</style>
