import {useState} from 'react';


const Counter = () => {
    let [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter += 1)
    }
    const decrement = () => {
        setCounter(counter -= 1)
    }

    return (
        <div className="container">
            <h1>{counter}</h1>
            <button className="btn btn-primary ml-2" onClick={decrement}>Decrement</button>
            <span className="mx-3">0</span>
            <button className="btn btn-primary ml-2" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;