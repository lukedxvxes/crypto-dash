<template>
  <v-app>
    <v-main>
      <div class="layout-wrap">
        <Sidebar />

        <div class="pa-4">
          <slot />

          <div class="footer mt-2">
            by
            <a
              href="https://lukedavies.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              lukedavies.dev</a
            >
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-wrap {
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
