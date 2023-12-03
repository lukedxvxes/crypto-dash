<template>
  <ComponentContainer :full-width="true">
    <div>
      <v-text-field placeholder="Search" variant="solo"></v-text-field>
    </div>
    <div class="grid">
      <div class="row row-1">
        <v-card>
          <h1>Hello</h1>
        </v-card>
        <v-card>
          <h1>There</h1>
        </v-card>
      </div>
      <div class="row row-2">
        <v-card class="px-5 py-1">
          <AllTokenTable />
        </v-card>
      </div>
    </div>
  </ComponentContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: 300px 1fr;
  .row-1 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    padding: 0rem 0 1rem 0;
  }

  .v-card {
    height: 100%;
    flex: 1;
    padding: 1rem;
  }
}
</style>
