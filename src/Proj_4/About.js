import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    const butsty={
        width:'100px',height:'35px'
    }
  return (
    <div  style={{textAlign:'center'}}>
        <h1>This is a app based on Routing!!!</h1>
        <Link to='/'><button  style={butsty}>Home</button></Link>
    </div>
  )
}
