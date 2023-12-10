<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
import { useCurrency } from '@/use/use-currency';
const route = useRoute();

const { currencyResponse } = await useCurrency(route.params.id.toString());

const currency = ref(currencyResponse.value[0]);
</script>

<template>
  <h1>{{ currency.name }}</h1>
  <div>
    <span></span>
  </div>
</template>

<style scoped></style>
