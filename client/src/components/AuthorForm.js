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
            <label className='font-bold'>Name:</label>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4'>Cancel</button>
            <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4' type="submit" value="Submit" />
        </form>
    )
}

export default AuthorForm