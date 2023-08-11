import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
              <ExpenseItem date={props.date} />
              <div className='expense-item_description'>
                <h2>{ props.title }</h2>
                <div className='expense-item_price'>${ props.amount }</div>
              </div>
        </div>
    )
}

export default ExpenseItem;