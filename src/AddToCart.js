import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
function AddToCart()
{
    var[data,setdata]=useState([])
    var[cart,setcart]=useState([])
    var[on,seton]=useState(false)
    async function fetchData()
    {
        var response =  await axios.get("https://dummyjson.com/products")
        console.log(response.data.products)
        setdata(response.data.products)
    }
    useEffect(()=>{ 
        fetchData()
    },[])
    function handler()
    {
        console.log(data);
        seton(true);
    }
    function btn_click(d)
    {
       setcart([...cart, d]);
       console.log(cart);
    }
    function removeHandler(id)
    {
            let newcart = cart.filter(function(carts){
                    return carts.id!=id;
            });
            setcart(newcart)
    }
    var cost = cart.reduce((acc,p)=>acc+p.price,0)
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 bg-body-secondary mt-3" style={{borderRight:"1px solid gray"}}>
                        <div className="row">
                            {
                            data.map((d)=>(
                                <div className="card m-2 p-2" style={{width:"17rem"}}>
                                    <img src={d.thumbnail} style={{height:100,width:260}}/>
                                    <h1>id:{d.id}</h1>
                                    <p><strong>Title:</strong>{d.title}</p>
                                    <p><strong>description:</strong>{d.description}</p>
                                    <p><strong>price:</strong>{d.price}</p>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" onClick={()=>btn_click(d)} type="button">Rs:{d.price}</button>
                                        
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="col-4 bg-body-secondary mt-3">
                            <a href="#" onClick={handler}>
                                
                                <h1 className="p-3 text-center m-2" style={{background:"skyblue"}}><FaCartArrowDown/>cartRs:{cost}</h1>
                            </a>
                            {
                                on?(
                                    cart.map((d)=>(
                                        <div className="card m-5 p-2" style={{ width: "18rem" }}>
                                            
                                            <img src={d.thumbnail}/>
                                            <h1>Title:{d.title}</h1>
                                            <p><strong>description:</strong>{d.description}</p>
                                            <p><strong>price:</strong>{d.price}</p>
                                            <button className=" btn btn-primary" onClick={()=>removeHandler(d.id)}>
                                            Remove
                                            </button>
                                            
                                        </div>
                                        
                                    ))
                                ):
                                <>
                                </>
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddToCart;