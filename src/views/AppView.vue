<script setup>
import SideBar from '@/components/ui/SideBar.vue'
import TopBar from '@/components/ui/TopBar.vue'
</script>

<template>
  <div class="container">
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
.container {
  display: flex;
}

.content-pane {
  padding-left: var(--sidebar-width);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content {
  padding: 1rem;
  flex: 1;
}
</style>
