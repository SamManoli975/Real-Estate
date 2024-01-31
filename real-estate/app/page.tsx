"use client";

import Image from "next/image";
import { useEffect,useState } from "react";
import Link from 'next/link';

interface PropertyData {
  
  key: string;
  title:string;
  streetAddress: string;
  bathrooms:number
  imgSrc: string;
  // Add other properties based on your actual data structure
}


export default function Home() {
  const [data, setData] = useState<Array<PropertyData>>([]);


  // const url = 'https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx';
  // const url = 'https://zoopla4.p.rapidapi.com/properties/new?locationKey=new-haw&maxPrice=1000&minPrice=100&maxBeds=4&sort=recommended&page=2';
const url = 'https://www.googleapis.com/books/v1/volumes?q=life&key=AIzaSyBNfW9LIehzRmIohoJ_Y9jlSiRQu6zve5g' ;
   // const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        // 'X-RapidAPI-Key': '83d1a5a905msh10111a0cb368862p1672f9jsnaf6057e0ac2f',
        // 'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
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
          .filter(d => d.bathrooms !== null || d.bathrooms !== undefined &&
          d.title !== null || d.title !== undefined &&
          d.imgSrc !== null || d.imgSrc !== undefined)
          .map((d) => {
            return (
              
              <div key={d.key}>
                <img className="propertyImage" src={d.imgSrc} />
                <div className="propertyDetailsContainer">
                  <h2 className="propertyDetails">Address: {d.streetAddress}</h2>
                  <p className="propertyDetails">Bedrooms: {d.title}</p>
                  <p className="propertyDetails">Bathrooms: {d.bathrooms}</p>
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
