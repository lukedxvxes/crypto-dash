<template>
  <v-container :fluid="fullWidth">
    <v-row>
      <v-col>
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
export interface Props {
  fullWidth?: boolean;
}

withDefaults(defineProps<Props>(), {
  fullWidth: false,
});
</script>

<style scoped></style>
