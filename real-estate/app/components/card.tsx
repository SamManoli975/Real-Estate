import react,{useState} from "react";

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
                    let thumbnail = item.volumeInfo.imageLinks.thumbnail;
                    let title = item.volumeInfo.title;
                    // let title = item.
                    return (
                        <div>
                        <p>
                            this is the card
                        </p>
                        <div key={item.id} className="card">
                            <img src={thumbnail} alt={title} />
                            <div className="bottomCard">
                                <h3 className="title">{title}</h3>
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