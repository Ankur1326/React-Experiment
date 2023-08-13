import ExpenseItem from './components/Expenses/ExpenseItem'
import Expense from "./components/Expenses/Expense"

function App() {
  let expenses = [
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

  return (
    <div>
      <h2>Let's get started </h2>
      <Expense item={expenses} />
    </div>
  );
}


export default App;