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
           

                    <label>Name</label>
                    <input type= 'name' value={userName} onChange={(event) => setUserName(event.target.value)}/>
              
                    <label>Post</label>
                    <input type= 'post' value={post} onChange={(event) => setPost(event.target.value)}/>
                <br>
                </br> 
            <button type= 'submit'>Submit Post</button>
        </form>
     );
}
 
export default CreatePost;