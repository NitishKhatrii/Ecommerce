import { useState } from "react";

function Try()
{
    var [todo,settodo]=useState([])
    var[newtodo,setnewtodo]=useState("")
    
    function btn_click()
    {
        settodo([...todo,newtodo])
    }
    function remove(index)
    {
        var newarr = todo.filter((item,i)=>i!==index)
        settodo(newarr)
    }

    return(
        <>
            <input type="text" value={newtodo} onChange={(e)=>setnewtodo(e.target.value)}/>
            <button onClick={btn_click}>click</button>
            <ul>
                {
                    todo.map((d,item)=>(
                        <>
                        <li>{d}</li>
                        <button onClick={()=>remove(item)}>Remove</button>
                        </>
                    ))
                }
            </ul>
        </>
    )
}
export default Try;