
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './components/Recipe.css';
import Recipe from './components/Recipe'
import Header from './components/Header'
import Footer from './components/Footer'
import Details from './components/Details'



const App = (props) => {
  return (
    <Router>
    	<div className="App">
	    	<Header/>
	    	<Route path='/' exact component={Recipe}/>
	    	<Route path='/details' component={Details}/>
	    	<Footer/>
    	</div>
    </Router>
  )
}

export default App;