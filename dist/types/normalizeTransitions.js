import { currencyToNumber } from "./currencyToNumber.js";
import { stringToDate } from "./stringToDate.js";
export const normalizeTransitions = (transitions) => {
    return {
        nome: transitions.Nome,
        id: transitions.ID,
        email: transitions.Email,
        data: stringToDate(transitions.Data),
        status: transitions.Status,
        pagamento: transitions["Forma de Pagamento"],
        valor: currencyToNumber(transitions["Valor (R$)"]),
        moeda: transitions["Valor (R$)"],
        novo: Boolean(transitions["Cliente Novo"]),
    };
};
//# sourceMappingURL=normalizeTransitions.js.map