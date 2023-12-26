import React, { useState } from 'react'

export default function Imgtoggle() {
    const imgq='https://tse1.mm.bing.net/th?id=OIP.ia7HjGvra2Q1xkgRlz5cxgAAAA&pid=Api&P=0&h=180';
    const imgq2='https://tse2.mm.bing.net/th?id=OIP.hoNoUvijZZZ4QHRjl_TEIwAAAA&pid=Api&P=0&h=180';
    const [img1dis,setImg1dis]=useState(true);
    const [img2dis,setImg2dis]=useState(false);
    function imgch(){
        if(img2dis===false){
            setImg2dis(true);
            setImg1dis(false);
        }
        else{
            setImg2dis(false);
            setImg1dis(true);
        }
    }
    const imgsty={
       width:'300px',height:'300px'
    }
  return (
    <div style={{marginLeft:'600px'}}>
        {img1dis && <img src={imgq}  style={imgsty}  onClick={imgch} alt=''></img>}
        {img2dis && <img src={imgq2} style={imgsty}  onClick={imgch}  alt=''></img>}
    </div>
  )
}
