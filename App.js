import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {
  const pageSize = 15;
  const[progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API

    
    return (
      <>
      <Router>
        
        <Navbar/>

        <LoadingBar
        color='#f11946'
        progress={progress} 
        height={3} 
      />

      <Routes>
         
        <Route exact path='/' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="General" pageSize={pageSize} country="in" category="General"/>}></Route>

        <Route exact path='/Business' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="Business" pageSize={pageSize}  country="in" category="Business"/>}></Route>

        <Route exact path='/General' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="General" pageSize={pageSize}  country="in" category="General"/>}></Route>

        <Route exact path='/Health' element= {<News  setProgress = {setProgress} apiKey  = {apiKey} key="Health" pageSize={pageSize}  country="in" category="Health"/>}></Route>

        <Route exact path='/science' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="science" pageSize={pageSize}  country="in" category="science"/>}></Route>

        <Route exact path='/Sports' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="Sports" pageSize={pageSize}  country="in" category="Sports"/>}></Route>

        <Route exact path='/Technology' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="Technology" pageSize={pageSize}  country="in" category="Technology"/>}></Route>

        <Route exact path='/Entertainment' element= {<News setProgress = {setProgress} apiKey  = {apiKey} key="Entertainment" pageSize={pageSize}  country="in" category="Entertainment"/>}></Route>
                
      </Routes>
      </Router>
        
        
      </>
    )
  }


export default App;
