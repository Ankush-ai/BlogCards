import React from 'react';
import './App.css';

function App() {
  const blogObj={
    title:"title",
    description:"lorem ipsum dolor"
    
  }
   const style={
    color:'blue',
    borderRadius:'5px',
    boxShadow:'0px 2px 5px #ccc',
    margin:'16px',
    padding:'16px',
    boxSizing:'border-box'
  
    
}
  return (
    <div className="App">
     <div style={style}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>

     </div>
     <div style={style}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>

     </div>
     <div style={style}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>

     </div>

     <div style={style}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>

     </div>
     <div style={style}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>

     </div>
      
      
      

    </div>
  );
}

export default App;
