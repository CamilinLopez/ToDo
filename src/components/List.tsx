//hooks
import { useSelector } from "react-redux"
//type 
// import { RootState } from "../redux/reducer"


function List() {

  const list = useSelector((state) => state)
  console.log(list)
  return (
    <div>

      <h1>hola desde lista</h1>
    </div>
  );
};

export default List;
