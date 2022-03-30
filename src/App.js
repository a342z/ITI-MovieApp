import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          {/* <Navbar/> */}
          <Switch>
            {/* <Route path="/" exact component={}></Route> */}
            <Route path="/" exact component={Movies} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" exact component={MovieDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
