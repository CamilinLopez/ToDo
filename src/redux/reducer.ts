import { combineReducers } from "redux";
import { TodoType, TodoAction } from "../types/types";
import { v4 as uuidv4 } from "uuid";

interface AppState {
    todos: TodoType[],
}

const initialState: AppState = {
    todos: []
};

const todoReducer = (state = initialState, action: TodoAction): AppState => {
    switch (action.type) {
        case "ADD":
            console.log(action.payload)
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: "adfasd",
                        text: "fdsdc",
                        level: 1,
                        date: "sddfsd",
                        isDone: false
                    }

                ]
            }

        default:
            return state;
    }
};

const appReducer = combineReducers({
    todos: todoReducer,
});

export type RootState = ReturnType<typeof appReducer>

export default appReducer;

