import React from "react";
import './Todo.css';
import { FaExclamation } from "react-icons/fa";
const Delete = (name) => {

    return (
        <>

            <li>{name.value}
                <FaExclamation id="delet" onClick={() => name.remove(name.id)} />
            </li>
        </>
    )
}
export default Delete;
