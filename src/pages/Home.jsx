import    React    from "react";
import { Layout  } from "@containers/Layout";
import { Efecto1 } from "@components/Efecto1";
import { Efecto2 } from "../components/Efecto2";
import { Efecto3 } from "../components/Efecto3";
import { Avo     } from "../components/Avo"; //! ===>>>>>>>>>este es el componente del reto
import { Header1 } from "../components/Header1";

const Home =()=> { return (
<>
  <Header1/>
<Layout>
  <Efecto1/>
  <Efecto2/>
  <Efecto2/>
</Layout>
  <h1>EfectomatrixByCM4</h1>
  {/* <h1>EfectomatrixByCM4</h1> */}
  <h2 style={{"background-color":"black"}}>Rick And Morthi</h2>
  <Avo/>          //! ================================>>>>>>>>>este es el componente del reto
  <h1 style={{"padding-top":"40px"}}></h1>
  {/* <Efecto3/> */}
  <h1>EfectomatrixByCM4</h1>

{/* {<Layout> */}
  {/* {<Efecto3/>} */}
{/* // </Layout> */}

{/* <Layout> */}
  {/* <h2>Avo La tiendita</h2> */}
  {/* <Avo/> */}
{/* // </Layout> */}

{/* <Layout> */}
  {/* <h2>efectomatrixN</h2> */}
{/* // </Layout> */} 
</>
); }; export { Home };