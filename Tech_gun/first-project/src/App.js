import { React, useState } from 'react';
// import ExpenseItem from './components/Expenses/ExpenseItem'
import Expense from "./components/Expenses/Expense"
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'school Fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },  
  {
    id: 'e3',
    title: 'rent Fee',
    amount: 400,
    date: new Date(2021, 1, 6)
  },
  {
    id: 'e3',
    title: 'Food Fee',
    amount: 100,
    date: new Date(2021, 7, 6)
  },
  {
    id: 'e4',
    title: 'rurist Fee',
    amount: 750,
    date: new Date(2022, 2, 4)
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    // console.log("inside the App.js components : ", expense);
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense)
  } 
 
  return (
    <div>
      <NewExpense saveAddExpenseHandler={addExpenseHandler}/>
      <Expense items={expenses} />
    </div>
  );
}


export default App; 