"use client";

import Image from "next/image";
import { useEffect,useState } from "react";

interface PropertyData {
  property_identifier: string;
  address: string;
  estimate_value: number;
  // Add other properties based on your actual data structure
}


export default function Home() {
  const [data, setData] = useState<Array<PropertyData>>([]);


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
    .then(response => {
      console.log(response);
      // setData(response.property);
    })
    .catch(error =>
      console.error('Error:', error)
    );

  },[])

  return (
    <main>
      <div>
        {/* <Home /> */}
        <p>hii</p>
        { 
          data && data.map((d) => {
            return (
              <div key={d.property_identifier}>
                <h2>{d.address}</h2>
                <p>{d.estimate_value}</p>
              </div>
            )
          })
        }
      </div>
   </main>
  );
}
