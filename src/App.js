import './App.css';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import {fetchCat, fetchGOAT} from './service';
import Cats from './pages/cat';
import Goat from './pages/pourmoi';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      cat: '',
      goat: '',
      picUrl: ''
    };
  }
getCat = () => {
  return fetchCat().then(data => {
    let cat = data.url;
    this.setState({cat: cat})
  });
}

getGoat = () => {
  return fetchGOAT().then(data => {
    let goat = data.url;
    this.setState({goat: goat})
  })
}

  render(){
    return(
      <div className = "App">
        <header className="header">
          <nav>
            <ul>
              <li>
              <Link to ="/cat-page">Get You a cat bruh</Link>
              </li>
              <li>
                <Link to ="/tweet-page">Or Get A Quote From The Goat</Link>
              </li>
            </ul>


          </nav>
        </header>

        <main>
        <Route path="/cat-page" >
        <Cats getCat = {this.getCat} cat = {this.state.cat}/>
        </Route>
          <Route path="/tweet-page">
            <Goat getGoat = {this.getGoat} goat={this.state.goat}/>
          </Route>
        </main>
      </div>
    )
  }
  
}
export default App;
