<script setup>
import SideBar from '@/components/ui/SideBar.vue'
import TopBar from '@/components/ui/TopBar.vue'
</script>

<template>
  <div class="app-container">
    <SideBar />
    <div class="content-pane">
      <TopBar />
      <main class="main-content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.content-pane {
  padding-left: var(--sidebar-width);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content {
  padding: 2rem;
  flex: 1;
  background-color: var(--white);
  position: relative;
}
</style>
