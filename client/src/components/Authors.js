import react, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Authors = (props) => {
    const {authors, setAuthors} = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            setAuthors(res.data);

        })
        .catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <>
        <Link to="/new">Add an Author</Link>
        <p>We have quotes by:</p>
        <table>
            <tbody>
                <tr>
                    <td><h3>Author</h3></td>
                    <td><h3>Actions available</h3></td>
                </tr>
                {
                     authors.map((author, index) => {
                        return(
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                                    <button>Delete</button>
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