//interfaces
import { TodoType } from "../types/types"
//hooks
import { useTodoHook } from "../reducerHook/reducerHooks";
import { useEffect } from "react";



function List() {

  const [todo, _] = useTodoHook();

  useEffect(() => {
    console.log(todo);
  }, [todo])
  
  return (
    <div>

      <h1>hola desde lista</h1>
    </div>
  );
};

export default List;
