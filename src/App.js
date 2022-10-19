import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Connect from './components/Connect';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
function App() {
  const [connect, setConnect] = useState(false);
  console.log(connect);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header setConnect={setConnect} />
              <Home />
              <About />
            </div>
          }
        />
        <Route
          path="/connect"
          element={
            <div className="connect-wrapper">
              <Connect />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
