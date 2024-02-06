import react from 'react';

const Modal=({show,item,onClose}:{show:any,item:any,onClose:any})=>{
    if(!show){
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title;
    return(
        

        <div className='overlay'>
            <div className='overlay-content'>
                <button className='close' onClick={onClose}>close</button>
                
                <img src={thumbnail} alt={title} />
                <p>{item.volumeInfo.description}</p>
            </div>
        </div>
    )
}
export default Modal;