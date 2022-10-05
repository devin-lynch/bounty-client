import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/partials/NavBar'
import Home from './components/routes/Home';
import Bounties from './components/routes/Bounties';
import Bounty from './components/routes/Bounty';
import EditBounty from './components/routes/EditBounty';
import NewBounty from './components/routes/NewBounty';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
