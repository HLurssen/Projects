import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneAnime = () => {

    const { _id } = useParams();

    const history = useHistory();

    const [animeInfo, setAnimeInfo] = useState({})



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/animes/${_id}`)
    
            .then(res=>{
                console.log(res);
                setAnimeInfo(res.data.results);
    
            })
    
            .catch(err=>console.log(err))
    }, [])

    const deleteAnime = ()=>{
        // console.log("Clutch or Kicking dis bih.")
        axios.delete(`http://localhost:8000/api/animes/${_id}`)

            .then(res=>{
                console.log("res---->", res)
                history.push("/")
            })

            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Title: {animeInfo.title}</h3>
            <p>Genre: {animeInfo.genre}</p>
            <p>Description: {animeInfo.description}</p>
            <p>Rating: {animeInfo.rating}</p>
            
            <button onClick={deleteAnime} className="btn btn-danger">Delete {animeInfo.title}</button>
        </div>
    );
};


export default OneAnime