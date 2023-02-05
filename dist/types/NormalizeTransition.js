export const normalizeTransition = (transition) => {
    return {
        nome: transition.Nome,
        id: transition.ID,
        email: transition.Email,
        status: transition.Status,
        data: transition.Data,
        pagamento: transition["Forma de Pagamento"],
        moeda: transition["Valor (R$)"],
        valor: 0,
        novo: transition["Cliente Novo"],
    };
};
//# sourceMappingURL=normalizeTransition.js.map