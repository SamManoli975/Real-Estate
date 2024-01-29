"use client";

import Image from "next/image";
import { useEffect,useState } from "react";
import Link from 'next/link';

interface PropertyData {
  zpid: number;
  bedrooms: number;
  streetAddress: string;
  bathrooms: number;
  imgSrc: string;
  // Add other properties based on your actual data structure
}


export default function Home() {
  const [data, setData] = useState<Array<PropertyData>>([]);


  const url = 'https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx';


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '83d1a5a905msh10111a0cb368862p1672f9jsnaf6057e0ac2f',
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
      }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setData(response.results);
    })
    .catch(error =>
      console.error('Error:', error)
    );

  },[])

  return (
    <main>
      <div>
        {/* <Home /> */}
        <div className="navBar">
          <h4>Real Estate</h4>
          <ul className="navList">
            {/* <Link href={} >Buy</Link>
            <Link href={} >About</Link>
            <Link href={} >Contact</Link> */}
          </ul>
        </div>
        <div className="searchBarContainer">
          <input className="searchBar" type="text"></input>
          <button className="filterButton">filter search</button>
        </div>
          
        { 
          data && data.map((d) => {
            return (
              <div key={d.zpid}>
                {/* <h2>Address: {d.streetAddress}</h2>
                <p>Bedrooms: {d.bedrooms}</p>
                <p>Bathrooms: {d.bathrooms}</p>
                <img src={d.imgSrc} /> */}
              </div>
            )
          })
        }
      </div>
   </main>
  );
}
