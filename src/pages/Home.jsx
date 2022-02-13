import React from "react";
import { Layout } from "@containers/Layout";
import { Efecto1 } from "@components/Efecto1";
import { Efecto2 } from "../components/Efecto2";
import { Efecto3 } from "../components/Efecto3";

const Home =()=> { return (
<>
  {/* <h1>EfectomatrixByCM4</h1> */}
<Layout>
  <Efecto1/>
</Layout>

<Layout>
  <Efecto2/>
</Layout>

<Layout>
  {/* <Efecto3/> */}
</Layout>

<Layout>
  <h2>efectomatrixN</h2>
</Layout>

<Layout>
  <h2>efectomatrixN</h2>
</Layout>

</>
); }; export { Home };