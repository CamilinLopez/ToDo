import { combineReducers } from "redux";
import { TodoType, TodoAction } from "../types/types";
import { v4 as uuidv4 } from "uuid";

interface AppState {
    todos: TodoType[],
}

const initialState: AppState = {
    todos: []};

const todoReducer = (state = initialState, action: TodoAction): AppState => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuidv4(),
                        text: action.payload.text,
                        level: action.payload.level,
                        date: action.payload.date,
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

