


const DisplayPost = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
                <th>Number</th>
            </tr>
            </thead>
            <tbody>

            {props.parentEntries.map((entry,index) => {
            return (
                <tr className="entry-border-box">
                    <td className="name-border-box">{entry.userName}</td>
                    <td>{entry.post}</td>
                    <td>{index-(0)}</td>

                    <div><button className="like-border-box">Like</button><button className="dislike-border-box">Dislike</button></div>

                </tr>
            );
            }
            
            )
    }
            
            </tbody>
               
      </table>
     );
}
 
export default DisplayPost;