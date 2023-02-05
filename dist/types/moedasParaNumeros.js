export const moedasParaNumeros = (moeda) => {
    const number = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
};
//# sourceMappingURL=moedasParaNumeros.js.map