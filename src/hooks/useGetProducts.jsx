import React from 'react'
import useEffect from 'react';
import axios from "axios";

const useGetProducts = async(API,state) => {
  const endpoint = await axios.get(API)
  state(endpoint.data.data);
}
const useGetRick = async(API,state) => {
  const endpoint = await axios.get(API)
  state(endpoint.data.results);
}

export { 
  useGetRick,
  useGetProducts,
}