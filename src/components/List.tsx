//hooks
import { useSelector } from "react-redux"
//type 
import { RootState } from "../redux/store";


function List() {

  const { todos } = useSelector((state: RootState) => state)
  console.log(todos)
  return (
    <div>

      <h1>hola desde lista</h1>
    </div>
  );
};

export default List;
