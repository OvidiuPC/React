import React from 'react'

import '../Styles/CardContainer.css'
import BookOutputCard from './BookOutputCard'

// CardContainer.js
function CardContainer(props) {
  return (
    <div className="card-container">
      {props.items.map((item) => (
        <BookOutputCard
          key={item.id} // Adăugați o cheie unică pentru fiecare element
          title={item.title}
          author={item.author}
          pubYear={item.pubYear}
          section={item.section}
          price={item.price}
        />
      ))}
    </div>
  );
}


export default CardContainer
