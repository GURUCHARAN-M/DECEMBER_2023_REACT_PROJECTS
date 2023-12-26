import React, { useState } from 'react'

export default function Dropdown() {
    const boxsty={
        width:'200px',height:'50px'
    }
    const [vvalue,setValue]=useState("Fruit");
    const itemclick=(e)=>{
        setValue(e.target.value);
    }
  return (
    <div>
        <form style={{marginLeft:'600px',marginBottom:'150px'}}>
            <h1>{vvalue}</h1><br></br>
            <h1>Form</h1>
            <select style={boxsty} onClick={itemclick}>
                <option style={boxsty}>Fruit</option>
                <option style={boxsty}>Vegetables</option>
                <option style={boxsty}>Meat</option>
                <option style={boxsty}>Cereals</option>
                <option style={boxsty}>Nuts</option>
                <option style={boxsty}>Fast Food</option>
                <option style={boxsty}>Dessert</option>
            </select>
        </form>
    </div>
  )
}
