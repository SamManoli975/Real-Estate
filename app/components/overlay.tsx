import react from 'react';
import Link from 'next/link';

const Modal=({show,item,onClose}:{show:any,item:any,onClose:any})=>{
    if(!show){
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title;
    let description = item.volumeInfo.description;
    if(description==null){
        description = 'no description available';
    }

    const truncateTitle = (str: string, limit: number) => {
      if (str.length > limit) {
        return str.slice(0, limit) + '...';
      } else {
        return str;
      }
    };
    
    // Truncate the description to, for example, 100 letters
    const truncatedDescription = truncateTitle(description, 800);
    return(
        

        <div className='overlay'>
            <div className='overlay-content'>
                <button className='close' onClick={onClose}>close</button>
                <div className='inner-box'>
                    <h3 className='overlay-title'>{title}</h3>
                    <img src={thumbnail} alt={title} />
                    {description && <p>{truncatedDescription}</p>}
                    <br/>
                    
                </div>
                <Link className="infoLink" target="_blank" href={item.volumeInfo.infoLink}>More info</Link>
                <h2>Categories: {item.volumeInfo.categories}</h2>
                <h2>Authors: {item.volumeInfo.authors}</h2>
                <h2>Publisher: {item.volumeInfo.publisher}</h2>
                <h2>Date Published: {item.volumeInfo.publishedDate}</h2>
                <h2>Page Count: {item.volumeInfo.pageCount}</h2>
                <h2>Average Rating: {item.volumeInfo.averageRating}</h2>
                <Link className="previewLink" target="_blank" href={item.volumeInfo.previewLink}>Preview Book</Link>
            </div>
        </div>
    )
}
export default Modal;