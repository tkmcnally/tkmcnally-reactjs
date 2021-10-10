import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
