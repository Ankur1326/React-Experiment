import { useState } from 'react'
function Counter() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [isEditting, setIseditting] = useState(false)
    return (
        <>
            {
                (isEditting) ? <input /> : <p>Some todo</p>
            }
            <br />
            <button onClick={() => setIseditting(!isEditting)}>Click</button>
        </>
    )
}

export default Counter;