import React from 'react'

import '../Styles/CardContainer.css'
import BookCard from './BookCard'


function CardContainer({items}) {
  return (
    <div className="card-container">
      {items.map((item) => (
        <BookCard //aici trebuie sa fixezi denumirea
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
