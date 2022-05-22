import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
