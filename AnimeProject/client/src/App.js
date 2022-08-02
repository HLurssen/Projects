// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllAnimes from './components/AllAnimes';
import NewAnimeForm from './components/NewAnime';
import OneAnime from './components/OneAnime';
import EditAnime from './components/EditAnime';

function App() {

  const [newAnimeToggle, setNewAnimeToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">

        <div id='banner'>

          <h1 id='animePost'>AnimePost</h1>

          <Link to={"/new"} className='btn btn-warning' id='newButton'>Add New Anime</Link>

          <Link to={"/"} className='btn btn-info'> HomePage</Link>

        </div>


        <Switch>
          <Route exact path="/">
            <hr />
            <AllAnimes newAnimeToggle={newAnimeToggle} ></AllAnimes>
          </Route>

          <Route exact path="/animes/:_id">
            <OneAnime></OneAnime>
          </Route>

          <Route exact path={"/new"}>
            <NewAnimeForm newAnimeToggle={newAnimeToggle} setNewAnimeToggle={setNewAnimeToggle}></NewAnimeForm>
          </Route>

          <Route exact path="/edit/:_id">
            <EditAnime></EditAnime>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
