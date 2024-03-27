import "./App.css"
import { Route, Routes } from "react-router-dom";
import CreateData from "./CreateData";
import Navabar from "./Navbar";
import Home from "./Home";
import About from "./About";
import ReadData from "./ReadData";
import EditButton from "./EditButton";
import AddToCart from "./AddToCart";
import TodoList from "./TodoList";
import UseReducerAddToCart from "./UseReducerAddToCart";
import ReduceHookAddToCartUlLi from "./ReduceHookAddToCartUlLi";
import UseReducerTwo from "./UseReducerTwo";
import Try from "./Try";



function App() {
  return (
    <>
      {/* <TodoList/> */}
      <Navabar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/createData" element={<CreateData/>}></Route>
        <Route path="/readData" element={<ReadData/>}></Route>
        <Route path="/edit/:id" element={<EditButton/>}></Route>
        <Route path="AddToCart" element={<AddToCart/>}></Route>

      </Routes>




      {/* <ReduceHookAddToCartUlLi/> */}
      {/* <UseReducerTwo/> */}
      {/* <Try/> */}

      {/* <Routes>
        <Route path="/ReadCard/:id" Element={<ReadData/>}></Route>
      </Routes> */}




      {/* <ReduceHookTodoList/> */}
      
      {/* <UseReducerAddToCart/> */}
    </>
  );
}

export default App;
