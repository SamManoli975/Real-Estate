"use client";
//google book api project

import Image from "next/image";
import react, { useEffect,useState } from "react";
import Link from 'next/link';
import axios from 'axios'
import Card from './components/card'
// import '../global.css';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt: React.KeyboardEvent) => {
    if (evt.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBNfW9LIehzRmIohoJ_Y9jlSiRQu6zve5g'+'&maxResults=10'+'&langRestrict=en')
      .then(res => {
        console.log(res.data.items || []);
        setBookData(res.data.items || []);
      })
      .catch(err => console.log(err))
    }
  };

  return(
    <div>
      <div >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchBook} />
          
        <button>search</button>
      </div>
      <div className="container" >
        {bookData.length > 0 ? (
          bookData.map((item: any) => (
            <Card key={item.id} book={[item]} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};
export default Main;

