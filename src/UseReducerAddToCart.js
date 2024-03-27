import { useReducer } from "react";

function UseReducerAddToCart()
{
    function reducer(state,action)
    {
        switch(action.type)
        {
            case'ADD_TO_CART':
            return[...state,{id:action.payload.id,name:action.payload.name,price:action.payload.price}]
            case 'REMOVE_CART':
            return state.filter(item=>item.id!== action.payload)
            
        }
    }
    var[cart,dispatch]=useReducer(reducer,[])
    var products=[
        {id:1,name:"nitish",price:56000},
        {id:2,name:"lavish",price:45000},
        {id:3,name:"khatri",price:67000},
        {id:4,name:"dushyant",price:54000},
    ]
    var total = cart.reduce((acc,obj)=>acc+obj.price,0)
    function AddToCart(product)
    {
        dispatch({type:'ADD_TO_CART',payload:product})
    }
    function RemoveFromCart(itemid)
    {
        dispatch({type:'REMOVE_CART',payload:itemid})
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                        <h1>Shopping Cart List</h1>
                        
                            {
                                products.map((d)=>(
                                    <div className="card m-2 p-2"style={{width:"18rem"}}>
                                       <h1>id:{d.id}</h1>
                                       <p>Name:{d.name}</p>
                                       <p>price:{d.price}</p>
                                       <button onClick={()=>AddToCart(d)}>AddToCart </button>
                                    </div>
                                ))
                            }
                        
                        </div>
                    </div>
                    <div className="col-5">
                    <h1>TotalAmount={total}</h1>
                        {
                            cart.map((item)=>(
                                <div className="card m-2" style={{width:"18rem"}}>
                                    <h1>Id:{item.id}</h1>
                                    <p>Name:{item.name}</p>
                                    <p>price:{item.price}</p>
                                    <button onClick={()=>RemoveFromCart(item.id)}>RemoveFromCart</button>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default UseReducerAddToCart;