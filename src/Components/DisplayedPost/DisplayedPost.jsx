// import { Parser } from 'html-to-react'
import { useEffect } from 'react';

// import React from 'react';

// const rawHTML = 
// <div>

// <html>
// <body>

// <h1>The iframe element</h1>

// <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
// <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>

// </body>
// </html>
// </div>


// const DisplayTest = () => {
//   return (
//     <div style={container}>
//       {Parser().parse(rawHTML)}
//     </div>
//   );
// };

// export default DisplayTest


// import {Helmet} from "react-helmet"

// const DisplayedPost = () => {
//   return (
//     <div>
//       <Helmet htmlAttributes>
//         <html lang="en" />
//         <title>Hello from React Helmet</title>
//         <meta name="description" content="Basic example" />
//       </Helmet>
//     </div>
//   );
// }
// export default DisplayedPost


// class Application extends React.Component {
//     render () {
//       return (
//           <div className="application">
//               <Helmet>
//                   <script src="https://use.typekit.net/foobar.js"></script>
//                   <script>try{Typekit.load({ async: true });}catch(e){}</script>
//               </Helmet>
//               ...
//           </div>
//       );
//     }
//   };




// <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
// <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>

const MyComponent = props => {
  useScript('https://use.typekit.net/foobar.js');

  // rest of your component
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

return (
  <body>

    <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
    <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
  </body>
);

}


export default MyComponent;