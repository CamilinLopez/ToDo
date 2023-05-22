import { useReducer } from "react";
import { TodoType, TodoAction } from "../types/types";
import { v4 as uuidv4 } from "uuid";


const todosReducer = (state:TodoType[], action:TodoAction ):TodoType[] => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id:uuidv4(),
                    text: action.payload.text,
                    level: action.payload.level,
                    date: action.payload.date,
                    isDone: false
                }
            ]
    
        default:
            return state
    }
}


export const useTodoHook = () => useReducer(todosReducer, [])