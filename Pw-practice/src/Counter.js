import { useState } from 'react'
function Counter() {
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <>
            Count X: {x}       
            <button onClick={() => setX(x+1)}>Inc</button>
            <button onClick={() => setX(x-1)}>Dec</button>

            Count Y: {y}
            <button onClick={() => setY(y+1)}>Inc</button>
            <button onClick={() => setY(y-1)}>Dec</button>
        </>
    )
}

export default Counter;