import react,{useState} from "react";
import Link from 'next/link';

const Card = ({ book }:{book:any}) => {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log('hello');
    console.log(book);
    if (book.length === 0) {
        return <p>No books found.</p>;
      }
    return (
        <div>
            {
                book.map((item: any) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;
                    let link = item.volumeInfo.infoLink;
                    // let title = item.
                    // Function to truncate the title to a certain number of words
                    const truncateTitle = (str: string, limit: number) => {
                        if (str.length > limit) {
                          return str.slice(0, limit) + '...';
                        } else {
                          return str;
                        }
                      };
                
                      // Truncate the title to, for example, 20 letters
                      const truncatedTitle = truncateTitle(title, 39);
                    return (
                        <div  className="card-container">

                            <div key={item.id} className="card">

                                <img className="thumbnail" src={thumbnail} alt={title} />

                                <div className="bottom">

                                    <h3 className="title">{truncatedTitle}</h3>
                                    <Link href={link}>more info</Link>
                                    
                                    {/* <p>&#8377;3290</p> */}

                                </div>
                            </div>
                        {/* <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/> */}
                        </div>
                    )
                })
            }

            </div>
    )
}
export default Card;