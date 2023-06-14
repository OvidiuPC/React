import React from "react";

import '../Styles/BookOutputCard.css';
import OutputCard from "../Events/OutputCardBtn";

function BookCard(props){
 const BookCardClass = 'book-card-'
    return(
        <div className={BookCardClass+'container'}>

            <div className={BookCardClass +'image'}>No image for now</div> 

            <div className={BookCardClass+'details'}>
                <div className={BookCardClass+'bookName'}>{props.title}</div>
                <div className={BookCardClass+'author'}>{props.author}</div>
                <div className={BookCardClass+'pubYear'}>{props.pubYear}</div>
                <div className={BookCardClass+'section'}>{props.section}</div>
                <div className={BookCardClass+'price'}>{props.price}$</div>
            </div>
            <OutputCard />
        </div>
    )
}


export default BookCard
