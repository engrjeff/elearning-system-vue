<template>
  <AuthLayout>
    <div class="auth-form-header">
      <h1 class="logo">Learn<span>Now</span></h1>
      <h2 class="title">Login to your Account</h2>
      <p class="subtitle">
        Don't have an account yet?
        <RouterLink to="/register" class="text-link">Sign Up</RouterLink>
      </p>
    </div>
    <CallOut v-if="auth.error" title="Login Error" :message="auth.error" />
    <form class="form" @submit.prevent="signIn" @input="auth.clearError">
      <fieldset :disabled="auth.isLoading">
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@domain.com"
            v-model="email"
            required
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            v-model="password"
            required
          />
        </div>
        <div class="form-extra">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label for="rememberMe">Remember me</label>
          <RouterLink to="/forgot-password" class="text-link">Forgot your password?</RouterLink>
        </div>

        <div class="form-action">
          <button type="submit" class="btn btn-primary w-full">
            {{ auth.isLoading ? 'Logging in...' : 'Login' }}
          </button>
        </div>
      </fieldset>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/components/ui/AuthLayout.vue'
import CallOut from '@/components/ui/CallOut.vue'
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')

const auth = useAuthStore()

const signIn = () => {
  auth.login(email.value, password.value)
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
