import { useState } from "react"
import { Link } from "react-router-dom"
import { form } from "../types/types"
import { useDispatch } from 'react-redux';
import { addToDo } from "../redux/actions";
// import { RootState } from "../redux/reducer";


function Form() {

    const [texto, setTexto] = useState<form>({
        text: "",
        level: 0,
        date: ""
    });

    const dispatch = useDispatch();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        dispatch(addToDo(texto))
        
        setTexto({
            text: "",
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
                    name="text"
                    onChange={handleOnChange}
                    value={texto.text}
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
                <input type="submit" name="Add" disabled={!texto.text} />
            </form>

            <Link to="/list">List</Link>

        </div>
    );
};

export default Form;