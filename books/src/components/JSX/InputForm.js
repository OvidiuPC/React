import React,{useState} from "react";

import InputFilter from "./InputFilter";
import '../Styles/InputForm.css'

function InputForm(props){
    const [enteredName, setEnteredName] = useState('');
    const [enteredAuthor,setEnteredAuthor] = useState('');
    const [enteredYear,setEnteredYear] = useState('');
    const [enteredSection,setEnteredSection] =useState('');
    const [enteredPrice,setEnteredPrice] = useState('');

    const [filteredSection,setFilteredSection] = useState('fantasy');


  const generalClass = 'input-form-';
  const labelClass = 'input-label ';
  const labelsClass ='labels label-';
  const inputClass ='inputs input-';
  

  const nameChangeHandler = (e) => {setEnteredName(e.target.value)};
  const authorChangeHandler = (e)=>{setEnteredAuthor(e.target.value)};
  const yearChangeHandler = (e)=>{setEnteredYear(e.target.value)};
  const sectionChangeHandler = (e)=>{setEnteredSection(e.target.value)};
  const priceChangeHandler = (e)=>{setEnteredPrice(e.target.value)};


  const sumbitHandler =(e)=>{
        e.preventDefault()

      const data = {
          title: enteredName,
          author: enteredAuthor,
          pubYear: enteredYear,
          section: enteredSection,
          price: enteredPrice,
      }

        props.onAddBook(data);
        
        setEnteredName('');
        setEnteredAuthor('');
        setEnteredYear('');
        setEnteredSection('');
        setEnteredPrice('');
     
  }

  const filteredHandle =(selected)=>{

    setFilteredSection(selected);
 
    
  }

 
  
    return(

        <div className={generalClass + 'container'}> 
         <form onSubmit={sumbitHandler} className={generalClass +'form'}>

            <div className={labelClass + generalClass+'bookName'}>
                <label className={labelsClass +'bookName'}>Book Title:</label>
                <input value={enteredName} onChange={nameChangeHandler} className={inputClass + 'bookName'}type="text" />
            </div>

            <div className={labelClass + generalClass + 'author'}>
                <label className={labelsClass +'author'} >Author:</label>
                <input value={enteredAuthor} onChange={authorChangeHandler} className={inputClass + 'author'} type="text" />
            </div>

            <div className={labelClass + generalClass +'pubYear'}>
                <label className={labelsClass +'pubYear'} >Pub. Year:</label>
                <input value={enteredYear} onChange={yearChangeHandler} className={inputClass + 'pubYear'} min='0' step='1' type="number"/>
            </div>

            <div className={labelClass + generalClass + 'section'}>
                <label className={labelsClass +'section'}>Section:</label>
                <input value={enteredSection} onChange={sectionChangeHandler} className={inputClass + 'section'} type="text" />
            </div>

            <div className={labelClass + generalClass+'price'}>
                <label className={labelsClass +'price'}>Price:</label>
                <input value={enteredPrice} onChange={priceChangeHandler} className={inputClass + 'price'} min='0.1' step='0.1' type="number"/>
            </div>

            <button type="submit"  className="add-book-btn">Add Book</button>
         </form>
            <InputFilter filteredSection={filteredSection} onFilter={filteredHandle} />
            
        </div>
    )
}

export default InputForm