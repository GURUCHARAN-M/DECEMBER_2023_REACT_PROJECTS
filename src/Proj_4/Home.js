import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
    const butsty={
        width:'100px',height:'35px'
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Welcome to my app!!!</h1>
        <Link to='/about'><button style={butsty}>About</button></Link>
    </div>
  )
}
