import ExpenseItem from './components/ExpenseItem'

function App() {
  let expenses = [
    {
      id: 'e1',
      title: 'school Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'rent Fee',
      amount: 400,
      date: new Date(2021, 2, 6)
    },
  ]

  return (
    <div>
      <h2>Let's get started </h2>
      <ExpenseItem 
        date={expenses[0].date} 
        title={expenses[0].title} 
        amount={expenses[0].amount} >
      </ExpenseItem>
      <ExpenseItem 
        date={expenses[1].date} 
        title={expenses[1].title} 
        amount={expenses[1].amount} >
      </ExpenseItem>
    </div>
  );
}

export default App;