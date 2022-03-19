import react, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';


const Authors = (props) => {
    const [loaded, setLoaded] = useState(false);
    const {authors, setAuthors} = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            setAuthors(res.data);
            setLoaded(true);

        })
        .catch((err) => {
            console.log(err);
        })
    }, [authors])


    return (
        <>
        <Link to="/new">Add an Author</Link>
        <p>We have quotes by:</p>
        <table style={{margin: "0 auto"}}className='table-auto'>
            <tbody>
                <tr>
                    <td><h3>Author</h3></td>
                    <td><h3>Actions available</h3></td>
                </tr>
                {
                    loaded && authors.map((author, index) => {
                        return(
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4' >Edit</button></Link>
                                    <DeleteBtn authors={authors} setAuthors={setAuthors} id={author._id}/>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default Authors