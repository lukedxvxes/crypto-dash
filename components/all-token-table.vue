<template>
  <v-data-table :items="tableArray" items-per-page="20">
    <template v-slot:headers="{ columns }">
      <tr>
        <th
          v-for="column in columns"
          :key="column.key || 1"
          class="text-left"
          :style="{ width: column.width }"
        >
          <h4 class="text-grey-darken-1">{{ column.key }}</h4>
        </th>
      </tr>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td class="font-weight-light">{{ item.name }}</td>
        <td class="font-weight-bold">{{ item.symbol }}</td>
        <td class="font-weight-light">{{ item.price }}</td>
        <td class="font-weight-light">{{ item["Market Cap"] }}</td>
        <td>
          <v-chip :color="getColor(item['Percent Change'])">
            {{ item["Percent Change"] }}%
          </v-chip>
        </td>
        <td>
          <NuxtLink :to="`/currency/${item.details}`">
            <v-btn size="small" rounded="xs" variant="tonal" class="text-black">
              Details
            </v-btn></NuxtLink
          >
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { useCurrencies } from "@/use/use-currencies";

const { currencyResponse } = await useCurrencies(100);

const tableArray = currencyResponse.value.map((currency) => {
  return {
    name: currency.name,
    symbol: currency.symbol,
    price: currency.price_usd,
    "Market Cap": currency.market_cap_usd,
    "Percent Change": currency.percent_change_24h,
    details: currency.id,
  };
});

const getColor = (percentChange: number) => {
  if (percentChange > 0) {
    return "green";
  } else {
    return "red";
  }
};
</script>

<style scoped></style>
