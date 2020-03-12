import React from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import MovieItems from './components/MovieIems';
import AddnewMovie from './components/AddnewMovie/AddnewMovie'
import DescriptionMovie from './components/DescriptionMovie/DescriptionMovie';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
        <Route exact path='/' component={MovieItems}/>
        <Route exact path='/Description/:id' render={ props => <DescriptionMovie {...props}/>}/>
        </Switch>
         <AddnewMovie/> 
      </BrowserRouter>
    </div>


  );
}
export default App;