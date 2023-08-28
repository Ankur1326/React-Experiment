import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {

  const [newTitle, setNewTitle] = useState("")
  const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
      setTitle(newTitle)
    }
    const inputChange = (event) => {
      setNewTitle(event.target.value)
    }
    return (
        <Card className='expense-item'>
              <ExpenseDate date={props.date} />
              <div className='expense-item_description'>
                <h2>{ props.title }</h2>
                <div className='expense-item_price'>${ props.amount }</div>
              </div>
        </Card>
    )
}

export default ExpenseItem;