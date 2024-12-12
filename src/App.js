import React from "react";
import Header from "./Expense Manager/components/Header";
import ExpenseForm from "./Expense Manager/components/ExpenseForm";
import ExpenseList from "./Expense Manager/components/ExpenseList";
import { useState } from "react";
import MonthlyFilter from "./Expense Manager/components/MonthlyFilter";
import Summary from "./Expense Manager/components/Summary";
import "./Expense Manager/styles/App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
    // console.log(expense);
    // console.log("All expenses:", [...expenses, expense]);
  };

  const filteredExpenses =
    selectedMonth === ""
      ? expenses
      : expenses.filter((expense) => {
          return (
            new Date(expense.date).getMonth() + 1 === parseInt(selectedMonth)
          );
        });

  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <button onClick={() => setShowSummary(!showSummary)} className="summary-button">
          {showSummary ? "Hide Summary" : "Show Summary"}
        </button>
        <ExpenseForm addExpense={addExpense} />
        <MonthlyFilter
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <ExpenseList expenses={filteredExpenses} />
      </div>
      <div className="summary-container">
      
        {showSummary && <Summary expenses={expenses} />}
      </div>
    </div>
  );
}

export default App;
