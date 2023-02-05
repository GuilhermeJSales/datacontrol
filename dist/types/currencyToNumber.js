export const currencyToNumber = (moeda) => {
    const number = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
};
//# sourceMappingURL=currencyToNumber.js.map