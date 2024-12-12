import React from "react";
import "../styles/MonthlyFilter.css";

function MonthlyFilter({ selectedMonth, setSelectedMonth }) {
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  return (
    <div className="month-filter">
      <label htmlFor="month">Filter by Month</label>
      <select
        id="month"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="">All</option>
        {months.map((month) => (
          <option key={month.id} value={month.id}>
            {month.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MonthlyFilter;
