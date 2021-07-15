import "./App.css";
import ExpensesComponent from "./components/ExpensesComponent";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import "./components/NewExpense/NewExpense.css";


const DUMMY_EXPENSES = [
  { id: 1, date: new Date(2021, 3, 28), title: "Car Insuranse", amount: 200 },
  { id: 2, date: new Date(2021, 1, 28), title: "Eating out", amount: 700 },
  { id: 3, date: new Date(2021, 8, 16), title: "Holidays", amount: 465 },
  { id: 4, date: new Date(2021, 9, 5), title: "Gym", amount: 121 },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [showAddButton, setShowAddButton] = useState(true);

  const addNewExpenseHandler = (expense) => {
    setExpenses((oldExpenses) => [expense, ...oldExpenses]);

    setShowAddButton(true);
  };

  const onClickExpenseButtonHandler = () => {
    setShowAddButton(false);
  };

  const onClickCancelButtonHandler = () => {
    setShowAddButton(true);
  };

  return (
    <div>
      {showAddButton ? (
        <div className="new-expense">
          <button onClick={onClickExpenseButtonHandler}>Add New Expense</button>
        </div>
      ) : (
        <NewExpense
          showAddButton={onClickCancelButtonHandler}
          onAddNewExpense={addNewExpenseHandler}
        />
      )}
      <ExpensesComponent expenses={expenses} />
    </div>
  );
}

export default App;
