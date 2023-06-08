import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { AuthContextProvider } from './Context/Auth.Context';
import Login from './Pages/Login';
import Account from './Pages/Account';
import Signup from './Pages/Signup';
import Protectedroute from './Components/Protectedroute';
import NavBar from './Components/NavBar';


function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
              <Route path="/" element={<Protectedroute><Home /></Protectedroute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<Protectedroute><Account /></Protectedroute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
