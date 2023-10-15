import React, { useState } from 'react';

function Counter(){
  var [words, updateCount] = useState(0);

  function countWords(event){
    var para = event.target.value;
    var words = para.trim().split(" ");

    updateCount(words.length);
  }

  return(
    <div className='container'>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea className='paragraph' rows='5' onChange={countWords}></textarea>
      <p className='result'>Word count: {words}</p>
    </div>
  );
}

export default Counter;