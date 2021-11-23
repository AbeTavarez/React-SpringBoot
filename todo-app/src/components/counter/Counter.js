import {useState} from 'react';


const Counter = () => {
    let [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter += 1)
    }

    return (
        <div className="container">
            <h1>{counter}</h1>
            <span className="mx-3">0</span>
            <button className="btn btn-primary ml-2" onClick={increment}>+1</button>
        </div>
    )
}

export default Counter;