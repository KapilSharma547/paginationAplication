import React, { useMemo, useState } from "react";
import Delete from "./Delete";
import './Todo.css';
import { FaCheck } from "react-icons/fa";

const Todo = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([])

    const inputEvent = (e) => {
        setInput(e.target.value);

    }
    const addData = () => {
        // console.log(input.length)
        setData((p) => {
            if (input === "") {
                return [...p]
            } else {
                return [...p,
                    input]
            }
        });
        setInput('')
    }

    const removeData = (index) => {
        setData((p) => {
            return p.filter((cur, ind) => {
                return index !== ind
            })
        })
    }

    let memo = useMemo(() => {
        if (input === "") {
            return data;
        }
        return data.filter((cur) => {
            return cur.includes(input);
        })
    }, [input, data]);

    // console.log(memo);
    return (
        <>
           
            <div id="container">
                <h1>Add Data Here</h1>
                <input type='text' placeholder="Enter here data"
                    value={input} onChange={inputEvent}
                /> 
                 <FaCheck id="add" onClick={addData}/>
             
                <ol>
                    {memo.map((cur, id) => {
                        return (
                            <Delete
                                key={id}
                                id={id}
                                value={cur}
                                remove={removeData}
                            />
                        );
                    })}
                </ol>
            </div>
        </>
    );
}
export default Todo;