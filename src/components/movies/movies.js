import React, { useEffect, useState,useContext } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './movies.css'
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from '../../store/actions/actions'
import { GetFromAPI } from "../../store/actions/movielist";

import ChangeLang from "../changeLang/ChangeLang";
import { LanguageContext } from './../../context/languageContext';

export default function Movies() {

    const [MovieList, setmovieList] = useState([]);
    const { contextLanguage } = useContext(LanguageContext);

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

    const getFavorits = useSelector((state) => state.favorites);

    const MOVIE_LIST = useSelector(state => state.movies.movie_list);

    console.log(getFavorits);

    const HandleFavourites = (item) => {
        dispatch2(addToFavorite(item))
        console.log(item);
    }

    //https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c
    //https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c&language=ar

    useEffect(() => {
        dispatch(GetFromAPI(contextLanguage))
    }, [contextLanguage])


    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c")
            .then((res) => setmovieList(res.data.results))
            .catch((err) => console.log(err));
    }, []);
    // const params = useParams();
    // console.log(props);
    // console.log(params);

    return (
        <div className="container text-center">
            <h1>Movies List</h1>
            <hr />
            {
                MovieList.map((movie, index) => {
                    return (
                        <div className="row floatt space-">
                            <div className="card border border-3 shadow m-4">
                                <Link className="fontlink" key={movie.id} to={`/OneMovie/${movie.id}`}>
                                    {movie.title}
                                    </Link>
                                    <button onClick={() => HandleFavourites(movie)}>fav</button>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top " alt="img" />
                                    <div className="card-body cardTEXT">
                                        <h6 className="card-text"><p>Release_Date :</p>{movie.release_date} </h6>
                                        <h6 className="card-text"><p>Language:</p>{movie.original_language}</h6>
                                    </div>
                                
                            </div>

                            <br /> <br />
                        </div>

                    )
                })
            }

        </div >
    );
}
