import { formatCurrencyResponse } from "../utils/format-currency-response";
import type { Currency } from "./types";

export async function useCurrencies(limit: number = 10) {
  const {
    data,
  }: {
    data: globalThis.Ref<{
      data: Currency[];
    }>;
  } = await useFetch(`/api/tickers/?limit=${limit}`);

  const currencyResponse = ref(formatCurrencyResponse(data.value.data));

  return {
    currencyResponse,
  };
}
