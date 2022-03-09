import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import Post from './Components/Posts/Posts';


// start app with npm start: app will open in default brower window//

function App() {

  const [entries, setEntries] = useState([{userName: '', post: ''}])
  
  function addNewEntry(entry){

    let tempEntries = [ entry,...entries ];

    setEntries(tempEntries);

  }
  return (
    <div>
      <div><h1>SocialProject</h1></div>
      <div>
      
        <CreatePost createNewPost ={addNewEntry} /> 
        <Post parentEntries ={entries} /> 
        <DisplayPost parentEntries ={entries} />

      </div>    
      <div><h4>Like</h4></div>
      <div><h4>Dislike</h4></div>
        
        
        
        
        
    </div>
  );
}

export default App;
