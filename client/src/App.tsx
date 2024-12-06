import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/dashboard/Create';
import Scripts from './pages/dashboard/Scripts';
import Scenes from './pages/dashboard/Scenes';
import CreateStory from './pages/dashboard/createStory';
// import Layout from './components/layout/Layout ';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Create />} />
          <Route path="create" element={<Create />} />
          <Route path="scripts" element={<Scripts />} />
          <Route path="scenes" element={<Scenes />} />
          <Route path="createStory" element={<CreateStory />} />s
        </Route>
        </Routes>
      </BrowserRouter>        
    </AuthProvider>
  );
}

export default App;