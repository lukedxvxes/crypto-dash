export const formatPrice = (price: string) => {
  const number = parseFloat(price);

  if (number < 0) return number.toFixed(2);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
