import React from "react";
import '../styles/Summary.css';

function summary({ expenses }) {
  const monthlyTotals = Array(12).fill(0);
  let overallTotal = 0;

  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    const amount = parseFloat(expense.amount); // Ensure amount is a number
    monthlyTotals[month] += amount;
    overallTotal += amount;
  });
  return (
    <div className="summary">
      <h2>Monthly Expenses Summary</h2>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Expense</th>
          </tr>
        </thead>
        <tbody>
          {monthlyTotals.map((total, index) => (
            <tr key={index}>
              <td>
                {new Date(0, index).toLocaleString("default", {
                  month: "long",
                })}
              </td>
              <td>Rs {total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Overall Total: Rs {overallTotal}</h3>
    </div>
  );
}

export default summary;
