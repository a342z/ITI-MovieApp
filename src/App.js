import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import Favourite from "./pages/Favourite";
import { LanguageContext } from "./context/language";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {

  const  [languageContext ,setLanguageContext] = useState('en');
  // const lang = useSelector((state)=>state.language.currentlang)
  return (
    <>
      <LanguageContext.Provider value={{languageContext,setLanguageContext}}>
        <Router>
          <Navbar />
          <div className="container">
            {/* <Navbar/> */}
            <Switch>
              {/* <Route path="/" exact component={}></Route> */}
              <Route path="/" exact component={Movies} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/movies/:id" exact component={MovieDetails} />
              <Route path="/favourite" exact component={Favourite} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
