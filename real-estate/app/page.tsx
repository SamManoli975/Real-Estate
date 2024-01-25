"use client";

import Image from "next/image";
import { useEffect,useState } from "react";

export default function Home() {
  // const [data,setData] = useState();

  const url = 'https://zoopla.p.rapidapi.com/house-prices/estimate?area=Greenwich%20Close%2C%20Crawley%20RH11&identifier=west-sussex%2Fcrawley%2Fgreenwich-close&order_by=address&ordering=descending&page_number=1&page_size=40';


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '83d1a5a905msh10111a0cb368862p1672f9jsnaf6057e0ac2f',
        'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
      }
    };
      fetch(url, options)
      .then(response => response.json())
      .then(response => (
        console.log(response)
      ))
      .catch(error => 
        console.error('error:', error
        ));

  },[])

  return (
    <main>
      <div>
        {/* <Home /> */}
        <p>hi</p>
      </div>
   </main>
  );
}
