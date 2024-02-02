import axios from 'axios';

interface Book {
  
    id: string;
    title:string;
    description: string;
    authors: string[];
    thumbnail: string;
    
  }


const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export const getBookData = async (query: string): Promise<Book | null> => {
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_API}?q=${query}`);
    const bookData = response.data;

    console.log(bookData);

    const book: Book = {
      id: bookData.id,
      title: bookData.volumeInfo?.title,
      authors: bookData.volumeInfo?.authors || [],
      thumbnail: bookData.volumeInfo?.imageLinks?.thumbnail || '',
      description: bookData.volumeInfo?.description || '',
    };

    return book;
  } catch (error) {
    console.error('Error fetching book data:', error);
    return null;
  }
};