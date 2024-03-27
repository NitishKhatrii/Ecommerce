import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateData()
{
    var[id,setid]=useState("")
    var[name,setname]=useState("")
    var[age,setage]=useState("")
    var[salary,setsalary]=useState("")
    var[city,setcity]=useState("")
    var navigtor=useNavigate()
    function handler(e)
    {
        e.preventDefault()
        axios.post("https://6570055109586eff66409733.mockapi.io/Nitish",{
            id:id,
            name:name,
            age:age,
            salary:salary,
            city:city,
        }).then(function(){
            navigtor("/readData")
        })  
        
    }
    return(
        <>
          <div className="container">
        <div className="row">
          <div
            style={{ margin: "auto", border:"1px solid lightgray", marginTop: "20px",borderRadius:15 }}
            className="col-5 bg-body-secondary"
          >
            <form onSubmit={handler}>
              <div class="mb-3 p-1">
                <hr></hr>
                <h1 style={{ textAlign: "center" }}><i>Api Form</i></h1>
                <hr></hr>
                <label for="exampleInputEmail1" class="form-label">
                  <strong>Id:</strong>
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setid(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <hr></hr>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                <strong>Name:</strong>
                </label>
                <input
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <hr></hr>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                <strong>Age:</strong>
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setage(e.target.value)}
                  id="exampleInputPassword1"
                />
              </div>
              <hr></hr>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                <strong>salary:</strong>
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setsalary(e.target.value)}
                  id="exampleInputPassword1"
                />
              </div>
              <hr></hr>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                <strong>City:</strong>
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setcity(e.target.value)}
                  id="exampleInputPassword1"
                />
              </div>
              <hr></hr>
              <hr></hr>
              
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit">
                  Create Data
                </button>
                <hr></hr>
                <div id="emailHelp" class="form-text">We'll never share your Api with anyone else.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}
 export default CreateData;