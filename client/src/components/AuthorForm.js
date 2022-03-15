import react, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    let navigate = useNavigate;
    const {initialName, submitProp} = props
    const [name, setName] = useState(initialName);
  

    const submitHandler = (e) => {
        e.preventDefault();

         submitProp({name});
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name:</label>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
            <button>Cancel</button>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AuthorForm