import React, { useEffect, useState } from "react";
import "./Avo.scss";//!(:@)>styles;
import { Avocado } from "../Avocado";
import { useGetProducts, useGetRick } from '../../hooks/useGetProducts';

// const API = "https://platzi-avo.vercel.app/api/avo"; //todo 
const RickandMorthi = "https://rickandmortyapi.com/api/character";

const Avo =()=> { 
const [rick,setRick]=useState([]);
// const [avo,setAvo]=useState([]);

useEffect(()=>{
  setRick(useGetRick(RickandMorthi,setRick))
  // setAvo(useGetProducts(API,setAvo))
},[])
// console.log(rick.length>0&&(rick.map(e=>e)));

return ( <> 
<div className="div-container">
{rick.length>0&&(rick.map(char=>
  <>
      <div className="div-avo" >  MAIN: 
            <div className="div-list">  container: 
              <div className="div-card"> 
                Char: card  
                <Avocado props={char} key={char.id}/>
              </div>
            </div>
      </div>
  </>
))}
</div>

</>) }; export {Avo};