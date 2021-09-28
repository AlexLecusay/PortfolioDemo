import './ClickMe.css';
import { useState } from 'react';



function ClickMe() {
  const [clickedAmount, setClickedAmount]= useState(0); 

  function addOneToAmount(){
    setClickedAmount(clickedAmount+ 1);
  }

  return (
    
    <div id="clickMe">
    <div id="btnNice">
      <h1 id="heading"><center>Click the button! clicked:{clickedAmount}</center></h1>
      <center><button id="btn" onClick={addOneToAmount}>Click me</button></center>
    </div>

    </div>
  );
}

export default ClickMe;
