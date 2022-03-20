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
                console.log(err.response.data);
                setErrors(err.response.data);
                setLoaded(false);
            })
            return() => isMounted = false;
    }, [])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {

                setErrors(err.response.data.errors);
            });

    }

    return (
        <>

        <section>
            <Link to='/'>Home</Link>
            {loaded && !errors.message?
            <><p>Edit this author:</p><AuthorForm errors={errors} initialName={author.name} submitProp={updateAuthor} /></>
            :<><p>{errors.message}</p><Link to='/new'><button>Add Author</button></Link></>
            }
        </section>



        </>
        
    )
}

export default Update;