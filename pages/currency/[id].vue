<template>
  <ComponentContainer>
    <h1>{{ currency.name }}</h1>
    <div>
      <span></span>
    </div>
  </ComponentContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import { useCurrency } from "@/use/use-currency";
const route = useRoute();

const { currencyResponse } = await useCurrency(route.params.id.toString());

const currency = ref(currencyResponse.value[0]);
</script>

<style scoped></style>
