import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [titleChanged, setTitle] = useState("");
  const [amountChanged, setAmount] = useState("");
  const [dateChanged, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: titleChanged,
      amount: +amountChanged,
      date: new Date(dateChanged),
    };

    props.onSaveExpenseData(newExpense);

    setTitle("");
    setAmount("");
    setDate("");

  };

  const onClickCancelButtonHandler = () => {
       props.showAddButton();
  };

  return (
    <div className="new-expense__controls">
      <form onSubmit={submitHandler}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={titleChanged}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amountChanged}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={dateChanged}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit New Expense</button>
          <button onClick = {onClickCancelButtonHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
