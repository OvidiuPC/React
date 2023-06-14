export default function InputFilter(props) {

    const bookFilterHandler = (e)=>{
       props.onFilter(e.target.value);
       console.log(e.target.value);
    }
  return (
    <div>

      <div>
        <label>Select by section</label>
        <select value={props.sfiltSection} onChange={bookFilterHandler}>
          <option value="fiction">Fiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="science-fiction">Science fiction</option>
          <option value="non-fiction">Non-fiction</option>
        </select>
      </div>




    </div>
  )
}
