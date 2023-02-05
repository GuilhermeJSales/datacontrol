import { fetchData } from "./types/fetchData.js";
import { normalizeTransactions } from "./types/normalizeTransactions.js";
import { Statistics } from "./types/statistics.js";
const handleData = async () => {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    if (data) {
        const transactions = data.map(normalizeTransactions);
        fillTable(transactions);
        fillStats(transactions);
    }
};
const fillTable = (transactions) => {
    const table = document.querySelector('#table tbody');
    if (table) {
        transactions.forEach(item => {
            table.innerHTML += `
        <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>R$ ${item.coin}</td>
        <td>${item.payment}</td>
        <td>${item.status}</td>
        </tr>
      `;
        });
    }
};
const fillList = (list, containerID) => {
    const containerElement = document.getElementById(containerID);
    if (containerElement) {
        Object.keys(list).forEach((key) => {
            containerElement.innerHTML += `
      <p>${key}: ${list[key]} </p>
      `;
        });
    }
};
const fillStats = (transactions) => {
    const statistics = new Statistics(transactions);
    fillList(statistics.payment, 'payment');
    fillList(statistics.status, 'status');
    const totalValueElement = document.querySelector('#total span');
    if (totalValueElement) {
        totalValueElement.innerText = statistics.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    const betterDayElement = document.querySelector('#dia span');
    if (betterDayElement) {
        betterDayElement.innerText = statistics.better[0];
    }
};
handleData();
//# sourceMappingURL=script.js.map