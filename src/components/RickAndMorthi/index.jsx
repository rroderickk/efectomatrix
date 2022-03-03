import React, { useEffect, useState } from "react";
import { Card }    from "../Card";
import { useGetRick } from '../../hooks/useGetProducts';
import "./index.scss";//!(:@)>styles;

const RickandMorthi = "https://rickandmortyapi.com/api/character";

const RickAndMorthi =()=> { 
const [rick,setRick]=useState([]);

useEffect(()=>{
  setRick(useGetRick(RickandMorthi,setRick))
},[])

return ( <> 
<div className="div-container">
{rick.length>0 && (rick.map(char=>
  <>
    <div className="div-avo" >  MAIN: 
        <div className="div-list">  container: 
          <div className="div-card"> 
            Char: card  
            <Card props={char} key={char.id}/>
          </div>
        </div>
    </div>
  </>
))}
</div>

</>) }; export { RickAndMorthi };