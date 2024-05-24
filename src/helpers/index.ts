export function formatCurrency(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function formatTotal(price: number, quantity: number) {
  return formatCurrency(price * quantity);
}