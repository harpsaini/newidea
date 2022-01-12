
import './App.css';
import SignIn from './SignIn';
import Home from './Home'
import Register from './Register'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {

  const [route, setRoute]= useState("signin")

  const handleRouteChange = (Route) => {
    setRoute(Route)
    console.log("routechanged");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NewIdea</h1>
      </header>
      {
        route === 'home'?
        <Home/>:
        (route === 'signin'?
        <SignIn handleRouteChange={handleRouteChange}/>:
        <Register handleRouteChange={handleRouteChange}/> )   
      }
    </div>
  );
}

export default App;
