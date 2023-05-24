import { Link } from "react-router-dom";
//hooks
import { useSelector } from "react-redux"
//type 
import { RootState } from "../redux/store";


function List() {

  const todos = useSelector((state) => state)
  console.log(todos)
  return (
    <div>
      <h1>hola desde lista</h1>
      <Link to="/form">Form</Link>
    </div>
  );
};

export default List;
