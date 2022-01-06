
import './App.css';
import SignIn from './SignIn';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>NewIdea</h1>
        </header>
        <Routes>
          <Route  exact path='/' element={<SignIn/>}/>
          <Route  path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
