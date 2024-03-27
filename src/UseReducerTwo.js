import { useReducer, useState } from "react";

function reducer(state,action)
{
    switch(action.type)
    {
        case "ADD_TODO":
            return[...state,{id:Date.now(),text:action.payload}]
        case "REMOVE":
            return state.filter((todo)=>todo.id!==action.payload)
    }
}


function UsereducerTwo()
{
    var[cart,dispatch]=useReducer(reducer,[])
    var[todo,settodo]=useState("")

    function btn_click()
    {
        dispatch({type:"ADD_TODO",payload:todo})
        settodo("")
    }
    function RemoveChild(id)
    {
        dispatch({type:"REMOVE",payload:id})
        
    }
    return(
        <>
              <h1 className="text-center" style={{color:"red"}}>UseReducer TodoList</h1>
       
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <input type="text" value={todo} onChange={(e)=>settodo(e.target.value)} style={{width:630,border:"1px solid black",height:"60px",fontSize:"22px"}} />
                         <button style={{height:"60px",marginLeft:10,fontSize:"22px"}} onClick={btn_click}>submit</button>
                  
                </div>
                
            </div>
            <div className="row">
                        <div className="col-7">
                  <table className="table table-hover table-info table-striped m-4  ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((d)=>(
                                <tr key={d.id}>
                                    <td><strong>{d.text}</strong></td>
                                    <td><button className=" bg-danger" onClick={()=>RemoveChild(d.id)}>Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                  </table>
                  </div>
                  </div>
        </div>
       
        </>
    )
}
export default UsereducerTwo;