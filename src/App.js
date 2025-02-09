import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Journal from './Components/UserJournal/Journal';
import Navbar from './Components/NavBar/Navbar';
import Resources from './Components/MentalHealthResources/Resources'
function App() {
  return (
      <Router>
        <div className={"App"}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Journal />} />
              <Route path={"/mhresources"} element={<Resources />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
