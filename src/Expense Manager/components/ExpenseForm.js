import React, { useState } from "react";
import App from "../App";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount, date: new Date(date) });
    console.log("called handle submit");
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        ></input>
        <input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        ></input>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          placeholder="date"
          required
        ></input>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
