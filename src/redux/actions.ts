//types
import { form, TodoAction } from "../types/types"



export const ADD = "ADD"


export const addToDo = (todos:form): TodoAction => {
    return {type: ADD, payload: todos}
}