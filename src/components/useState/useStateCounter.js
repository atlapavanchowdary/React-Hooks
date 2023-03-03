import { useState } from "react";

export default function ReactUseStateHook(){
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Counter Example</h1>
            <button onClick={()=>setCounter(counter+1)}>counter</button>: Clicked {counter} times
        </div>
    )
}