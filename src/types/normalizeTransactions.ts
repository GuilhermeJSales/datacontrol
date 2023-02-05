import { stringToCurrency } from "./stringToCurrency.js";
import { stringToDate } from "./stringToDate.js";

declare global {
type Payment = 'Boleto' | 'Cartão de Crédito';
type PaymentStatus = 'Paga' | 'Estornada' | 'Recusada pela operadora de cartão';

interface TransactionAPI{
  Nome: string;
  ID: number;
  Data: string;
  Email: string;
  Status: PaymentStatus;
  ['Valor (R$)']: string;
  ['Forma de Pagamento']: Payment;
  ['Cliente Novo']: number;
}

interface Transactions{
  name:string;
  id:number;
  date: Date;
  email: string;
  status: PaymentStatus;
  value: number | null;
  coin: string;
  payment: Payment;
  new: boolean;
}
}




export const normalizeTransactions = (transactions: TransactionAPI): Transactions => {
  return {
    name: transactions.Nome,
    id: transactions.ID,
    date: stringToDate(transactions.Data),
    email:transactions.Email,
    status: transactions.Status,
    value: stringToCurrency(transactions["Valor (R$)"]),
    coin: transactions["Valor (R$)"],
    payment: transactions["Forma de Pagamento"],
    new: Boolean(transactions["Cliente Novo"]),
  }

}