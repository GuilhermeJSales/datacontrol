export const stringToCurrency = (coin: string) => {
  const value = Number(coin.replaceAll(".", "").replace(",","."));
  return isNaN(value) ? null : value; 
  
}