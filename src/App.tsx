import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
