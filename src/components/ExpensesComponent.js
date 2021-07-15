import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from './ExpensesChart';

function ExpensesComponent(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const onChangeFilterSelectionHandler = (selectedFilterValue) => {
    setFilteredYear(selectedFilterValue);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilterSelection={onChangeFilterSelectionHandler}
      />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default ExpensesComponent;
