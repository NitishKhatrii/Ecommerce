import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ReadData()
{
    var[data,setdata]=useState([])
    var navigtor = useNavigate()
    var navigator = useNavigate()
     async function fetchData()
    {
        var response = await axios.get("https://6570055109586eff66409733.mockapi.io/Nitish")
        setdata(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    function btn_click(id)
    {
        navigtor(`/edit/${id}`)
    }
   async function btn_click1(id)
    {
        await axios.delete(`https://6570055109586eff66409733.mockapi.io/Nitish/${id}`)
        fetchData()
    }
 
    







    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <div className="row">
                        <table className="table table-light table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>age</th>
                                    <th>salary</th>
                                    <th>city</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((d)=>(
                                        <tr key={d.id}>
                                            <td>{d.id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.age}</td>
                                            <td>{d.salary}</td>
                                            <td>{d.city}</td>
                                            <td><button onClick={()=>btn_click(d.id)} className=" bg-warning">edit</button></td>
                                            <td><button onClick={()=>btn_click1(d.id)}className=" bg-danger">Remove</button></td>
                               
                                        </tr>   
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default ReadData;