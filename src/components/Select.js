import React from "react";

function Select(props){
    return (
        <select name={props.name} class="box" onChange={props.handle}>
            <option value="0" hidden>To Unit</option>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
        </select>
    );
   
}

export default Select;