import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';




function App() {

  const [entries, setEntries] = useState([{userName: 'Name Namesonss', post: 'I think things are awesome! maybe i should have Lorem Ispom insteaded. Who knos...'}])
  
  return (
    <div>
      <div><h1>SocialProject</h1></div>
      <div>
        <DisplayPost parentEntries ={entries} />
        <CreatePost parentEntries ={entries} />
      </div>    
      <div><h4>Like</h4></div>
      <div><h4>Dislike</h4></div>
        
        
        
        
        
    </div>
  );
}

export default App;
