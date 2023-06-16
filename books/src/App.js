import React, { useState } from 'react'

import InputForm from './components/JSX/InputForm'
import Container from './components/JSX/Container'
import CardContainer from './components/JSX/CardContainer'

const LIBRARY = [
  {
    title: 'Orizonturi Rosii',
    author: 'Ion Mihai Pacepa',
    pubYear: 1989,
    section: 'Tragedie',
    price: 29.99,
  },
]

function App() {
  const [books, setBooks] = useState(LIBRARY);

 const  addBookHandler = (book) => {
   setBooks((prevBook)=>{
   return [book, ...prevBook]
 
   });
  };

  return (
    <Container>
      <InputForm onAddBook={addBookHandler} />
      <CardContainer items={books} />
    </Container>
  )
}

export default App
