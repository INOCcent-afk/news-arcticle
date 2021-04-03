import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/core/Footer";
import Nav from "./components/core/Nav";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="na-body-inner">
        <Nav />
        <div className="na-body-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
