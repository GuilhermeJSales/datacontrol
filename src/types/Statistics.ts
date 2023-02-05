import { countBy } from "./countBy.js";

type TransactionsValor = Transactions & {value: number};
const filterValue = (transactions : Transactions) : transactions is TransactionsValor => {
  return transactions.value !== null;
}


export class Statistics {
  private transactions;
  total;
  payment;
  status;
  date;
  better;
  constructor(transactions: Transactions[]){
    this.transactions = transactions;
    this.total = this.handleTotal();
    this.payment = this.handlePayment();
    this.status = this.handleStatus();
    this.date = this.handleDate();
    this.better = this.betterDay();
  }


  private betterDay(){
    return Object.entries(this.date).sort((a,b) => {
      return b[1] - a[1];
    })[0];   
    
  }


  private handleDate(){
    const week = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sábado']: 0,
    }
    let i;
    for(i = 0; i < this.transactions.length; i++){
      const days = this.transactions[i].date.getDay()
      if(days === 0) week['Domingo'] += 1;
      if(days === 1) week['Segunda'] += 1;
      if(days === 2) week['Terça'] += 1;
      if(days === 3) week['Quarta'] += 1;
      if(days === 4) week['Quinta'] += 1;
      if(days === 5) week['Sexta'] += 1;
      if(days === 6) week['Sábado'] += 1;
    }

    return week

  }

  private handlePayment(){
     return countBy(this.transactions.map(({payment}) => payment));
  }

  private handleStatus(){
     return  countBy(this.transactions.map(({status}) => status));
  }

  private handleTotal() {
    return this.transactions.filter(filterValue).reduce((acc, {value}) => {
      return acc + value;
    },0)
  }
}