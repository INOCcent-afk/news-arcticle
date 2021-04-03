import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/core/Footer";
import Nav from "./components/core/Nav";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
