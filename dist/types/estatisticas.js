import { countBy } from "./countBy.js";
const filtrarValor = (transactions) => {
    return transactions.valor !== null;
};
export const setTotal = (transactions) => {
    const filtrado = transactions.filter(filtrarValor).reduce((acc, item) => {
        return acc + item.valor;
    }, 0);
    return filtrado;
};
export const setPagamento = (transactions) => {
    return countBy(transactions.map(({ pagamento }) => pagamento));
};
export const setStatus = (transactions) => {
    return countBy(transactions.map(({ status }) => status));
};
//# sourceMappingURL=estatisticas.js.map