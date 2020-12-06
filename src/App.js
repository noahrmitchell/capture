import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//Routing 
import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
        <Route path="/" exact>
          <AboutUs />;
        </Route>
        <Route path="/work" exact>
          <OurWork />;
        </Route>
        <Route>
          <MovieDetail path="/work/:id" />
        </Route>
        <Route path="/contact">
        <ContactUs />;
        </Route>
      </Switch>
      <GlobalStyle />;
    </div>
  );
}

export default App;
