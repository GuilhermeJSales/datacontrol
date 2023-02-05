import { stringToCurrency } from "./stringToCurrency.js";
import { stringToDate } from "./stringToDate.js";
export const normalizeTransaction = (transition) => {
    return {
        nome: transition.Nome,
        id: transition.ID,
        email: transition.Email,
        status: transition.Status,
        data: stringToDate(transition.Data),
        pagamento: transition["Forma de Pagamento"],
        moeda: transition["Valor (R$)"],
        valor: stringToCurrency(transition["Valor (R$)"]),
        novo: Boolean(transition["Cliente Novo"]),
    };
};
//# sourceMappingURL=normalizeTransaction.js.map