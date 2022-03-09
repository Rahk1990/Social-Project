


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
                <tr>
                    <td>{entry.userName}</td>
                    <td>{entry.post}</td>
                    <td>{index-(0)}</td>
                </tr>
                );

            })}
            
            </tbody>   
      </table>
     );
}
 
export default DisplayPost;