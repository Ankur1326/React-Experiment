import React from "react";

function ExpenseDate(props) {

    console.log(props);

    if (!props.date) {
        return <p>No date provided</p>;
    }
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  
    return (
        <div>
            <div>{ month }</div>
            <div>{ year }</div>
            <div>{ day }</div>
        </div>
    );
}

export default ExpenseDate;