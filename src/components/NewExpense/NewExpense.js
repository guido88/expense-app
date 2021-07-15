import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {

  const onSaveExpenseDataHandler = (expense) => {
      const expenseData = {
        ...expense,
        id: Math.random().toString()
      }
      props.onAddNewExpense(expenseData);
  }

  const onClickCancelButtonHandler = () => {
       props.showAddButton();
  };

  return (
    <div className="new-expense">
      <ExpenseForm showAddButton= {onClickCancelButtonHandler} onSaveExpenseData ={onSaveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
