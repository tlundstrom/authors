import react, {useState, useEffect} from 'react';
import AuthorForm from "./AuthorForm";
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    
    let navigate = useNavigate();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState();

    const {id} = useParams();

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                    if(isMounted){
                    setAuthor(res.data);
                    console.log(author)
                    setLoaded(true);
                    

                }
            })
            .catch((err) => {
                console.log(err);
            })
            return() => isMounted = false;
    }, [])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then((res) => {
                
                navigate('/');
            })
            .catch((err) => console.log(err));
            navigate('/');
    }

    return (
        <>
        {loaded && 
        <section>
            <p>Edit this author:</p>
            <Link to='/'>Home</Link>
            <AuthorForm initialName={author.name} submitProp={updateAuthor} />
        </section>}
        </>
        
    )
}

export default Update;