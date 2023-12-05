import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0)//Valor inicial

    function increment() {
        console.log(counter);
        //counter++;
        setCounter(counter + 1);
    }

    function decrement() {
        if (counter > 0)
            setCounter(counter - 1);
    }

    return (
        <div>
            <p>El contador tiene valor: {counter}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
}

export default Counter;