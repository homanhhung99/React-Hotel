import Footer from './Footer';
import Header from './Header';
import './../css/App.css';
import ControlURL from '../router/ControlURL';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import '../js/animation/animation'
//APP
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
        <ControlURL/>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
