import React, { useState} from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import Post from './Components/Posts/Posts';
// import DisplayPost from './Components/DisplayPost/DisplayPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Parser } from 'html-to-react';
// import MyComponent from './Components/DisplayPost/DisplayPost';
// import useScript from './hooks/useScript';


// start app with npm start: app will open in default brower window//

function App() {
  

  // const useScript = url => {
    
  //   useEffect(() => {
  //     const script = document.createElement('script');
  
  //     script.src = url;
  //     script.async = true;
  
  //     document.body.appendChild(script);
  
  //     return () => {
  //       document.body.removeChild(script);
  //     }
  //   }, [url]);
  

  const [entries, setEntries] = useState([{userName: ' :', post: ''}])


  // const MyComponent = props => {
  //   useScript('https://use.typekit.net/foobar.js');

  //   // rest of your component
  // }

  function addNewEntry(entry){

    let tempEntries = [ entry,...entries ];

    setEntries(tempEntries);

  }
// Added for test raw html embeds
  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    
    <div className='page-background'>
      <div><h1>SocialProject</h1></div>
      <div className='entry-border-box' dangerouslySetInnerHTML={{__html: <script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"></script>}}></div>

        
          <div className='border-box'>
            <CreatePost createNewPost ={addNewEntry} /> 
          </div>
          {/* <MyComponent  /> */}
        
          
            {/* <iframe className='entry-border-box' src=".DisplayTest.html" title="Coin Geeko"></iframe>  */}
          
          {/* <iframe className='entry-border-box' src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js">
          <DisplayPost  
          coin-id="bitcoin" 
          currency="usd" 
          locale="en">
          </DisplayPost></iframe> */}
          
          <div className= 'border-box'>
            <Post parentEntries ={entries} /> 
          </div>
          <div>
            {/* <DisplayedPost  /> */}
            {/* <embed>
            <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
<coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
            </embed> */}
            
     
          </div>
          <div className='border-box'>
              {/* <DisplayPost  /> */}

          </div>
        
        
    </div>
  );
}

export default App;
