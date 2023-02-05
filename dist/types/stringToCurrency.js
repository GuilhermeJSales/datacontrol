export const stringToCurrency = (coin) => {
    const value = Number(coin.replaceAll(".", "").replace(",", "."));
    return isNaN(value) ? null : value;
};
//# sourceMappingURL=stringToCurrency.js.map