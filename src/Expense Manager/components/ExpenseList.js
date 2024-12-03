import React from "react";

function ExpenseList({ expenses }) {
return (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense) => (
                <tr key={expense.title}>
                    <td>{expense.title}</td>
                    <td>Rs {expense.amount}</td>
                    <td>{expense.date.toDateString()}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
}

export default ExpenseList;
