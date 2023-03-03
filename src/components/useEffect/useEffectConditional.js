import { useEffect, useState } from "react";

export default function UseEffectConditional(){
    const [count, setCount] = useState(0);
    const [name, setName]= useState('');

    useEffect(()=>{
        console.log('useeffect updating document title')
        document.title = `You clicked ${count} times`

    return()=>{
        <button onClick={() => setCount(count+1)}>Click {count} times</button>
    }
    },[])
}