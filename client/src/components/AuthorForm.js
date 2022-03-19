import react, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const {errors, initialName, submitProp} = props
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

         submitProp({name});
    }

    return (
        <form style={{margin:"10px"}} onSubmit={submitHandler}>
            <label className='font-bold'>Name:</label>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)}/><br/>
            {
                errors.name?
                <p>{errors.name.message}</p>
                :null
            }
            <input className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4' type="submit" value="Submit" />
            <input onClick={()=> navigate('/')} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4' type="button" value="Cancel"/>
        </form>
    )
}

export default AuthorForm