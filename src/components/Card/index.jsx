import React from 'react'

const Card =({props})=> { return ( <>

<h2 style={{backgroundColor: "black"}}> {props.name} </h2>
  <img src={props.image}/>
    <div style={{fontSize: "12px"}}>{props.specie}</div>
    <div style={{fontSize: "22px"}}>{props.status}</div>
  <button>buttonPurchase</button>
<button>buttonAddToCart</button>

</> ) }; export { Card };