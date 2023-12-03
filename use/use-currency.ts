import { formatCurrencyResponse } from "../utils/format-currency-response";
import type { Currency } from "./types";

export async function useCurrency(id: string) {
  const {
    data,
  }: {
    data: globalThis.Ref<Currency[]>;
  } = await useFetch(`/api/ticker/?id=${id}`);

  const currencyResponse = ref(formatCurrencyResponse([data.value[0]]));

  return {
    currencyResponse,
  };
}
