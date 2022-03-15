import react, {useState, useEffect} from 'react';
import AuthorForm from "./AuthorForm";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Update = () => {



    return (
        <section>
            <p>Edit this author:</p>
            <Link to='/'>Home</Link>
            <AuthorForm />
        </section>
    )
}

export default Update;