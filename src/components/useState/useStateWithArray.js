import { useState } from "react"
import xtype from "xtypejs"

export default function UseStateWithArray(){
    const [items, setItems] = useState([]);

    const addItem=()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

    return(
        <div>
            <button onClick={addItem}>Add a number</button>
                <ul>
                {
                    items.map(items => (
                        <li key={items.id}>{items.id} {items.value}</li>
                    ))
                }
                console.log(typeof(items));
                </ul>   
        </div>
    )
}