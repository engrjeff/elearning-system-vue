<template>
  <div class="auth-container">
    <div class="auth-form-wrapper">
      <div class="auth-form-header">
        <h1 class="logo">Learn<span>Now</span></h1>
        <h2 class="title">Forgot Password</h2>
        <p class="subtitle">Enter your email below and we'll send you a password reset link.</p>
      </div>
      <form class="form">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="email@domain.com" />
        </div>

        <div class="form-action">
          <button type="submit" class="btn btn-primary w-full">
            Send me a password reset link
          </button>
        </div>
      </form>
      <RouterLink to="/login" class="text-link">Back to Log In</RouterLink>
    </div>
  </div>
</template>

<script setup></script>

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
  text-align: center;
}
</style>
