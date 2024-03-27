import { Link } from "react-router-dom";

function Navabar()
{
    return(
        <>  
        <div className="container">
          <div className="row">
            <div className="col-2">
            <img src = "images.jpeg" style={{width:"80px",height:"80px", marginLeft:20, marginTop:10}}/>
            
            </div>
            <div className="col-10 mt-4">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="home">home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"to="about">about</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="createData">createData</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="readData">ReadData</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="AddToCart">AddToCart</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

            </div>
          </div>
        </div>
   
        </>
    )
}
export default Navabar;