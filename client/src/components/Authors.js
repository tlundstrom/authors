import react, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';


const Authors = (props) => {
    const [loaded, setLoaded] = useState(false);
    const {authors, setAuthors} = props;
    const [sorted, setSorted] = useState(false);
    let newList = authors;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            setAuthors(res.data);
            setLoaded(true);

        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const sort = (e) => {
        sorted?
        newList = authors.sort((a, z) => {
            if(a.name < z.name) return -1
            if(a.name > z.name) return 1
            return 0;
        })
        :newList = authors.sort((a, z) => {
            if(a.name < z.name) return 1
            if(a.name > z.name) return -1
            return 0;
        }) 
        setAuthors(newList);
        setSorted(!sorted);
        
    }

    return (
        <>
        <Link to="/new">Add an Author</Link>
        <p>We have quotes by:</p>
        <table style={{margin: "0 auto"}}className='table-auto'>
            <tbody>
                <tr>
                    <td><Link to="/"><h3 onClick={() => sort()}>Author</h3></Link></td>
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