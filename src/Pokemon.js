import React, { useState } from 'react';
import axios from 'axios';
function Pokemon(){
        const[count,setCount] = useState();
        const[name,setName] = useState();
        async function getData(){
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`);
                setName(res.data.name);
        }
        getData();
        return(
            <div>
                <h1>The number is {count}</h1>
                <h1>The Name is {name}</h1>
                <select onChange={(event) =>{
                        setCount(event.target.value);
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        );
}
export default Pokemon;