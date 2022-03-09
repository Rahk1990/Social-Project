import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import Post from './Components/Posts/Posts';
import Displayedpost from './Components/DisplayedPost/DisplayedPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


// start app with npm start: app will open in default brower window//

function App() {

  const [entries, setEntries] = useState([{userName: ' :', post: ''}])
  
  function addNewEntry(entry){

    let tempEntries = [ entry,...entries ];

    setEntries(tempEntries);

  }
  return (
    <div className='page-background'>
      <div><h1>SocialProject</h1></div>
      
        
          <div className='border-box'>
            <CreatePost createNewPost ={addNewEntry} /> 
          </div>
          <div className= 'border-box'>
            <Post parentEntries ={entries} /> 
          </div>
          <div className='border-box'>
              <DisplayPost parentEntries ={entries} />

          </div>
          {/* <div>Displayedpost parentEntries ={entries}</div> */}
        
        
    </div>
  );
}

export default App;
