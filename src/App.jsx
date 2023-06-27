import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {
  const  {currentUser}  = useContext(AuthContext);
  console.log("current user context",currentUser);
  //protecting routes
  const ProtectedRoutes = ({ children }) => {
    console.log("protected routes",currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/register' element={

            <Register />

          }

          />
          <Route path='/login' element={

            <Login />

          } />
          <Route path='/' element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>

          } />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
