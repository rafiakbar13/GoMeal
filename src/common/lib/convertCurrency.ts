export function convertCurrency(price: number) {
  if (isNaN(price)) {
    return "Invalid input";
  }
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `Rp${formattedPrice}`;
}
