<template>
  <div class="auth-container">
    <div class="auth-form-wrapper">
      <div class="auth-form-header">
        <h1 class="logo">Learn<span>Now</span></h1>
        <h2 class="title">Create an Account</h2>
        <p class="subtitle">
          Already have an account?
          <RouterLink to="/login" class="text-link">Log In</RouterLink>
        </p>
      </div>
      <form class="form" @submit.prevent="handleSubmit">
        <fieldset :disabled="auth.isLoading">
          <div class="form-control">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
              v-model="firstName"
            />
          </div>
          <div class="form-control">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
              v-model="lastName"
            />
          </div>
          <div class="form-control">
            <label for="role">Role</label>
            <select name="role" id="role" required v-model="role">
              <option selected value="" disabled>Select a role</option>
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
            </select>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@domain.com"
              required
              v-model="email"
            />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              v-model="password"
            />
          </div>

          <div class="form-action">
            <button type="submit" class="btn btn-primary w-full">
              {{ auth.isLoading ? 'Loading...' : 'Register' }}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const role = ref('')
const email = ref('')
const password = ref('')

const auth = useAuthStore()

const handleSubmit = async () => {
  await auth.createUser({
    firstName: firstName.value,
    lastName: lastName.value,
    role: role.value,
    email: email.value,
    password: password.value
  })
}
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary);
  text-align: center;
}

.logo span {
  color: var(--black);
  font-weight: bold;
  font-size: 1.5rem;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}

.subtitle {
  font-size: 0.85rem;
  text-align: center;
  color: gray;
}

.text-link {
  margin-left: auto;
}
</style>
