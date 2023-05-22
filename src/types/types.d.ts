export interface TodoType {
    id: string,
    text: string,
    level: number,
    date: string,
    isDone: boolean,
}



export type TodoAction =
    | {
        type: "ADD",
        payload: {
            text: string,
            level: number,
            date: string,
        }
    }
    |
    {
        type: "DELETE",
        payload: {
            id: string
        }
    }

export interface form {
    todo: string,
    level: number,
    date: string
}