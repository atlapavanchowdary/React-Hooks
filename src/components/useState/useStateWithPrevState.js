import { useState } from "react";

export default function UseStateWithPrevState(){
    const initialstate = 0;

    const [counter, setCounter] = useState(initialstate);

    const incrementFive = () => {
        for(let i=0;i<5;i++){
            setCounter(prevCounter => prevCounter+1)
        }
    }
    return(
        <div>
            count: {counter}
            <button onClick={()=>setCounter(initialstate)}>Reset</button>
            <button onClick={()=>setCounter(prevCounter => prevCounter+1)}>Increment</button>
            <button onClick={()=>setCounter(prevCounter => prevCounter-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}