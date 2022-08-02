import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const EditAnime = () => {

    const {_id} = useParams();

    const [animeInfo, setAnimeInfo] = useState({})

    const history = useHistory();




    useEffect(()=>{

        axios.get(`http://localhost:8000/api/animes/${_id}`)
    
            .then(res=>{
                console.log("res--->", res)
                setAnimeInfo(res.data.results);
            })
    
            .catch(err=>console.log(err))
    }, [])


    const changeHandler = (e)=>{

        if (e.target.type == "checkbox"){
            setAnimeInfo({
                ...animeInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setAnimeInfo({
                ...animeInfo,
                [e.target.name]: e.target.value
            })
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/animes/${_id}`, animeInfo)

        .then(res=>{
            console.log(res)
            history.push("/")
        })

        .catch(err=>console.log(err))
    }



    return (
        <div>
            <h3>Edit Anime: {_id}</h3>

            <form onSubmit={submitHandler}>

                <div className='form-group'>
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" onChange={changeHandler} className="form-control" value={animeInfo.title}/>
                    
                </div>

                <div className='form-group'>
                    <label htmlFor="">Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler} className="form-control" value={animeInfo.genre}/>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" onChange={changeHandler} className="form-control" value={animeInfo.description}/> 
                </div>

                <div className='form-group'>
                    <label htmlFor="">Rating:</label>
                    <input type="text" name="rating" onChange={changeHandler} className="form-control" value={animeInfo.rating} />
                </div>

                <input type="submit" value="Update Anime" className="btn btn-info" />
            </form>
        </div>
    );
};

export default EditAnime;