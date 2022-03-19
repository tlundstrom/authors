import React from "react";
import axios from "axios";

const DeleteBtn = (props) => {
    const {id, authors, setAuthors} = props;

    const removeFromDOM = (id) => {
        setAuthors(authors.filter(author => author._id !== id));
      }

    const deleteHandler = async (e) => {
        console.log('Delete');
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                removeFromDOM(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <input className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4" onClick={deleteHandler}  type="button" value="Delete" />
    )
}

export default DeleteBtn

