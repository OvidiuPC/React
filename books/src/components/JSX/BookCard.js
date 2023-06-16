import React from "react";

import '../Styles/BookOutputCard.css';
import OutputCard from "../Events/OutputCardBtn";

 function BookCard({title,author,pubYear,section,price}){
    console.log(title);
 const BookCardClass = 'book-card-'
   return(
        <div className={BookCardClass+'container'}>

            <div className={BookCardClass +'image'}>No image for now</div> 

            <div className={BookCardClass+'details'}>
                <div className={BookCardClass+'bookName'}>{title}</div>
                <div className={BookCardClass+'author'}>{author}</div>
                <div className={BookCardClass+'pubYear'}>{pubYear}</div>
                <div className={BookCardClass+'section'}>{section}</div>
                <div className={BookCardClass+'price'}>{price}$</div>
            </div>
            <OutputCard />
        </div>
    )
}


export default BookCard
