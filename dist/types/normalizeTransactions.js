import { stringToCurrency } from "./stringToCurrency.js";
import { stringToDate } from "./stringToDate.js";
export const normalizeTransactions = (transactions) => {
    return {
        name: transactions.Nome,
        id: transactions.ID,
        date: stringToDate(transactions.Data),
        email: transactions.Email,
        status: transactions.Status,
        value: stringToCurrency(transactions["Valor (R$)"]),
        coin: transactions["Valor (R$)"],
        payment: transactions["Forma de Pagamento"],
        new: Boolean(transactions["Cliente Novo"]),
    };
};
//# sourceMappingURL=normalizeTransactions.js.map