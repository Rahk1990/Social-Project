import { useState, useEffect } from 'react'; //imsr used here//

// Saves post for the user to see//
const Post = (props) =>{

    const [postData, setPostData] = useState([]);
   
    useEffect(() => {
      let tempPostData = props.parentEntries.map(entry => {
          return [entry.userName, entry.post, entry.dateTime];
      });
      setPostData(tempPostData);
    }, [props.parentEntries])
    return postData;    
  }
export default Post;