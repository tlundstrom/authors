import react, {useState, useEffect} from 'react';
import AuthorForm from "./AuthorForm";
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Update = (props) => {
    
    let navigate = useNavigate();
    const {author, setAuthor} = props;
    const [loaded, setLoaded] = useState();
    const [errors, setErrors] = useState({});

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
                setErrors(err.response.data.errors);
            })
            return() => isMounted = false;
    }, [])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });

    }

    return (
        <>
        {loaded && 
        <section>
            <p>Edit this author:</p>
            <Link to='/'>Home</Link>
            <AuthorForm errors={errors} initialName={author.name} submitProp={updateAuthor} />
        </section>}
        </>
        
    )
}

export default Update;