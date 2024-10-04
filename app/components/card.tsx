import React, { useState } from "react";
import Image from 'next/image';
import Modal from './overlay';

const Card = ({ book }: { book: any }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    // Check for empty book array
    if (!book || book.length === 0) {
        return <p>No books found.</p>;
    }

    // Function to truncate the title to a certain number of characters
    const truncateTitle = (str: string, limit: number) => {
        return str.length > limit ? str.slice(0, limit) + '...' : str;
    };

    return (
        <div>
            {book.map((item: any) => {
                const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail || '/default-thumbnail.jpg'; // Replace with a default image path if needed
                const title = item.volumeInfo.title;
                const truncatedTitle = truncateTitle(title, 39);

                return (
                    <div key={item.id} className="card-container">
                        <div className="card" onClick={() => { setShow(true); setItem(item); }}>
                            <Image
                                className="thumbnail"
                                src={thumbnail}
                                alt={title}
                                width={100} // Set desired width
                                height={150} // Set desired height
                            />
                            <div className="bottom">
                                <h3 className="title">{truncatedTitle}</h3>
                                <h3>Authors: {item.volumeInfo.authors?.join(', ')}</h3>
                            </div>
                        </div>
                        {/* Modal component for additional book details */}
                        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
