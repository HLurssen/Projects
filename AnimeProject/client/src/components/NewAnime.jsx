import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewAnimeForm = (props) => {

    let [title, setTitle] = useState("");
    let [genre, setGenre ] = useState("");
    let [description, setDescription] = useState("");
    let [rating, setRating] = useState("");


    let [errors, setErrors] = useState({})

    const history = useHistory();


    const addAnime = (e) => {
        e.preventDefault();


        let formInfo = {title, genre, description, rating}

        axios.post("http://localhost:8000/api/animes", formInfo)

            .then(res => {
                console.log("response after posting form.", res)

                if (res.data.error) {
                    setErrors(res.data.error.errors);
                }
                else {

                    setTitle("");
                    setGenre ("");
                    setDescription("");
                    setRating("");

                    props.setNewAnimeToggle(!props.newAnimeToggle);

                    history.push("/");
                }

            })

            .catch(err => console.log("RREEEEEEEE", err))
    }

    return (
        <div>
            <form onSubmit={addAnime}>

                <div className='form-group'>
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title} />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Genre:</label>
                    <input type="text" onChange={(e) => setGenre (e.target.value)} className="form-control" value={genre} /><p className="text-danger">{errors.genre?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" value={description} /> <p className="text-danger">{errors.description?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Rating:</label>
                    <input type="number" onChange={(e) => setRating(e.target.value)} className="form-control" value={rating} />
                    <p className="text-danger">{errors.rating?.message}</p>
                </div>

                <input type="submit" value="Add Anime" className="btn btn-warning" />
            </form>
        </div>
    );
};

export default NewAnimeForm;