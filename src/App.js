import React, { useState } from 'react';
import './App.css';

function App() {

  const [items] = useState(["David",
  "Damien",
  "Sara",
  "James",
  "Jane",
  "Sapiens"]);
  let [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');

  function onTextChanged(e){
    const value = e.target.value;
    if(value.length>0){
      const regex = new RegExp(`^${value}`, 'i');
       suggestions = items.sort().filter(v => regex.test(v)); 
    }
    setSuggestions(suggestions);
    setText(value);
  }

  function suggestionSelected(value){
    setSuggestions([]);
    setText(value);
  }

  function RenderSuggestions(){
    
    if(suggestions.length === 0){
      return null;
    }
    return(
      <ul> 
        {suggestions.map((item)=><li onClick={()=>suggestionSelected(item)}>{item}</li>)}
      </ul>
    );

  }


  return (
    <div className='search'>
    <input className='inputBox' value= {text} onChange={onTextChanged} type="text" placeholder="Search" />
    <RenderSuggestions/>
    </div>
  );
}

export default App;
