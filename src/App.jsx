import React, { useState } from 'react';

const App = () => {

    const [inputitem, Setinpuitem] = useState();

    const [item, Setitem] = useState([])

    const itemEvent = (event) => {
        Setinpuitem(event.target.value)
    }

    const listofitem = () => {
        Setitem((oldvalue) => {
            return [...oldvalue, inputitem]
        })
    }

    const deleteitems = () => {
        console.log("deleted")
    }


    return (
        <>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add item" onChange={itemEvent} />
            <button onClick={listofitem}> Add item</button>

            <ol>
                {/* <li>{inputitem}</li> */}
                <br />
                {item.map((itemval) => {
                    return <li>{itemval}
                        <button onClick={deleteitems}> Delete</button>
                    </li>

                })}

            </ol>


        </>
    )
}

export default App;