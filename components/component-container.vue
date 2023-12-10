<template>
  <v-container :fluid="fullWidth">
    <v-row no-gutters>
      <v-col cols="12" :lg="fullWidth ? 12 : 10" class="mx-auto pa-0">
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
