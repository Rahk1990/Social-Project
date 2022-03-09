import React, { useState } from 'react';



const CreatePost  = (props) => {

    const [userName, setUserName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        let newEntry = {
            userName: userName,
            post: post
        };
        console.log(newEntry);
        props.createNewPost(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>
           
                <table>
                    
                    <div className='entries-border-box'>
                    <tr><label>Name</label></tr>
                    <input type= 'name' value={userName} onChange={(event) => setUserName(event.target.value)}/>
              
                   
                    <tr><label>Post</label></tr>
                    <input type= 'post' value={post} onChange={(event) => setPost(event.target.value)}/>
                    </div>
                <tr>
                <button type= 'submit'>Submit Post</button>
                </tr> 
                </table>
        </form>
     );
}
 
export default CreatePost;