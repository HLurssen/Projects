import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllAnimes = (props) => {

    const [allAnimes, setAllAnimes] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/animes")
            .then(res => {
                // console.log("response:", res)
                setAllAnimes(res.data.results);
            })

            .catch(err => {
                console.log("errrr", err)
            })
    }, [deleteToggle, props.newAnimeToggle])


    const deleteAnime = (id) => {
        console.log("And then she aint yo ho no mo - Michael", id);
        axios.delete(`http://localhost:8000/api/animes/${id}`)

            .then(res => {
                console.log("res after deleting!!!!", res)
                setDeleteToggle(!deleteToggle)
            })

            .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>All Animes List</h2>
            <div className="cards">
                {
                    allAnimes.map((animeObj, idx) => {
                        return (
                            <div key={animeObj._id} className="card mx-auto mb-3" style={{ width: '18rem' }}>
                                <div className="card-body">

                                    <h5 className="card-title"> <Link to={`/animes/${animeObj._id}`}>{animeObj.title}</Link></h5>

                                    <h6 className="card-subtitle mb-2 text-muted"> {animeObj.genre}</h6>

                                    <p className="card-text">{animeObj.description}</p>

                                    <p><Link to={`/edit/${animeObj._id}`} className='btn btn-info' >Edit {animeObj.title}</Link></p>

                                    <button onClick={(e) => { deleteAnime(animeObj._id) }} className="btn btn-danger">Delete {animeObj.title}</button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default AllAnimes