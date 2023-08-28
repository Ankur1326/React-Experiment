import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) => {

    const saveExpemseDataHandler = (expenseData) => {
        console.log(" inside the NewExpense.js components ", expenseData);
        props.saveAddExpenseHandler(expenseData)
    }
    
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpemseDataHandler}/>
        </div>
    );
}

export default NewExpense;