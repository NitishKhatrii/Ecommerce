import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditButton() {
  var navigate = useNavigate();
  var [data, setdata] = useState({
    id: "",
    name: "",
    age: "",
    salary: "", // Corrected typo here
    city: "",
  });
  const { id } = useParams();

  async function fetchData() {
    try {
      var response = await axios.get(
        "https://6570055109586eff66409733.mockapi.io/Nitish/" + id
      );
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handler(e) {
    e.preventDefault();
    axios
      .put("https://6570055109586eff66409733.mockapi.io/Nitish/" + id, data)
      .then(() => {
        navigate("/readData");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            style={{
              margin: "auto",
              border: "1px solid gray",
              marginTop: "20px",
              borderRadius: 15,
            }}
            className="col-5 bg-body-secondary"
          >
            <form onSubmit={handler}>
              <div className="mb-3 p-1">
                <h1 style={{ textAlign: "center" }}>
                  <i>Edit Form</i>
                </h1>
                <hr />
                <label htmlFor="exampleInputId" className="form-label">
                  <strong>ID:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.id}
                  id="exampleInputId"
                  readOnly
                />
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  <strong>Name:</strong>
                </label>
                <input
                  type="text"
                  value={data.name || ""}
                  onChange={(e) => setdata({ ...data, name: e.target.value })}
                  className="form-control"
                  id="exampleInputName"
                />
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="exampleInputAge" className="form-label">
                  <strong>Age:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.age || ""}
                  onChange={(e) => setdata({ ...data, age: e.target.value })}
                />
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="exampleInputSalary" className="form-label">
                  <strong>Salary:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.salary || ""}
                  onChange={(e) =>
                    setdata({ ...data, salary: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="exampleInputCity" className="form-label">
                  <strong>City:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.city || ""}
                  onChange={(e) =>
                    setdata({ ...data, city: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
                <hr />
                <div id="emailHelp" className="form-text">
                  We'll never share your API with anyone else.
                </div>
                <hr />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditButton;
