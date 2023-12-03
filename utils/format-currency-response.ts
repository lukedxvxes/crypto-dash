import { type Currency } from "../use/types";

export const formatCurrencyResponse = (currencyArr: Currency[]) => {
  return currencyArr.map((currency) => ({
    ...currency,
    price_usd: formatPrice(currency.price_usd),
    market_cap_usd: formatPrice(currency.market_cap_usd),
    volume24: formatPrice(currency.volume24),
    volume24a: formatPrice(currency.volume24a),
    csupply: formatPrice(currency.csupply),
    tsupply: formatPrice(currency.tsupply),
    msupply: formatPrice(currency.msupply),
  }));
};
