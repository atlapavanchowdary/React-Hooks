import { useEffect, useState } from "react";

export default function UseEffectCounter(){
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${counter} times`
    })
    return(
        <div>
            <h1>Counter Example</h1>
            <button onClick={() => setCounter(counter+1)}>Click Me</button>: Clicked {counter} times
        </div>
    )
}