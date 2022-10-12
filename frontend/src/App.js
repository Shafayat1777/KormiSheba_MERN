import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages & components
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Profile from './pages/Profile';
import FOF from './pages/404';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={ user ? <Home/> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={ <Dashboard/>}
            />
            <Route
              path="/about"
              element={ user ? <About/> : <Navigate to="/login" /> }
            />
            <Route
              path="/login"
              element={ !user ? <Login/> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={ !user ? <Signup/> : <Navigate to="/" />}
            />
            <Route 
              path="/updateProfile"
              element={<Profile/>}
            />
            <Route
              path="*"
              element={<FOF/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
