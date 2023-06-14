import React from "react";

import '../Styles/OutputCardBtn.css'

function OutputCard(){
   function deletCard(event){
     const container = event.target.closest('.book-card-container')
     
     if(container){
        container.remove()
     }
   }

    return (
        <div className='card-btns'>
            <button onClick={deletCard} className="delet-card">Delet Card</button>
            {/* <button className="show-details">Show Details</button> */}
        </div>
    )

}

export default OutputCard