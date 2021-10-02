import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={(id) => deleteTransaction(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
