import react, {useState, useEffect} from 'react';
import AuthorForm from "./AuthorForm";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const CreateAuthor = (props) => {

    let navigate = useNavigate();
    const {authors, setAuthors} = props;
    const [errors, setErrors] = useState({});

    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate('/');
            })
            .catch(err => {
                console.log( err);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <section>
            <p>Add a new author:</p>
            <Link to='/'>Home</Link>
            <AuthorForm errors={errors} submitProp={createAuthor} />
        </section>
    )
}

export default CreateAuthor;