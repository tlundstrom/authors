import React, {useState} from "react";
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
        <input onClick={deleteHandler}  type="button" value="Delete" />
    )
}

export default DeleteBtn

