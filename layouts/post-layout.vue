<template>
  <v-app>
    <v-main>
      <div class="layout-wrap">
        <Sidebar />

        <div>
          <v-card>
            <slot />
          </v-card>

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

.v-card:not(.layout-wrap > .v-card) {
  margin: 1.25rem;
  padding: 1rem 1.5rem 1rem 1rem;
}
</style>
