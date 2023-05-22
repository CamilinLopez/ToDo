import { useState } from "react"
import { form } from "../types/types"

//hooks
import { useTodoHook } from '../reducerHook/reducerHooks'

function Form() {

    const [texto, setTexto] = useState<form>({
        todo: "",
        level: 0,
        date: ""
    });

    const [todo, dispatch] = useTodoHook();



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: {
                text: texto.todo,
                level: texto.level,
                date: texto.date
            }
        })
        setTexto({
            todo: "",
            level: 0,
            date: ""
        })
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setTexto({
            ...texto,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="todo"
                    onChange={handleOnChange}
                    value={texto.todo}
                />
                <input
                    type="range"
                    name="level"
                    min={0}
                    max={10}
                    onChange={handleOnChange}
                    value={texto.level}
                />
                <input
                    type="datetime-local"
                    name="date"
                    onChange={handleOnChange}
                    value={texto.date}
                />
                <input type="submit" name="Add" disabled={!texto.todo} />

            </form>

        </div>
    );
};

export default Form;