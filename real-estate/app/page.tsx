"use client";

import Image from "next/image";
import { useEffect,useState } from "react";
import Link from 'next/link';

interface PropertyData {
  
  zpid: number;
  bedrooms:number;
  streetAddress: string;
  bathrooms:number
  imgSrc: string;
  // Add other properties based on your actual data structure
}


export default function Home() {
  const [data, setData] = useState<Array<PropertyData>>([]);


  const url = 'https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx';
  // const url = 'https://zoopla4.p.rapidapi.com/properties/new?locationKey=new-haw&maxPrice=1000&minPrice=100&maxBeds=4&sort=recommended&page=2';
  // const url = 'https://zoopla.p.rapidapi.com/house-prices/estimate?area=Greenwich%20Close%2C%20Crawley%20RH11&identifier=west-sussex%2Fcrawley%2Fgreenwich-close&order_by=address&ordering=descending&page_number=1&page_size=40';  
  
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
          data && data
          .filter(home => home.bathrooms !== null || home.bathrooms !== undefined &&
          home.bedrooms !== null || home.bedrooms !== undefined &&
          home.imgSrc !== null || home.imgSrc !== undefined)
          .map((home) => {
            return (
              
              <div key={home.zpid}>
                <img className="propertyImage" src={home.imgSrc} />
                <div className="propertyDetailsContainer">
                  <h2 className="propertyDetails">Address: {home.streetAddress}</h2>
                  <p className="propertyDetails">Bedrooms: {home.bedrooms}</p>
                  <p className="propertyDetails">Bathrooms: {home.bathrooms}</p>
                  {/* <p>hello testing testing 123</p> */}
                </div>
                
              </div>
            )
          })
        }
      </div>
   </main>
  );
}
