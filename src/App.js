import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

import Register from './components/Cards/Register/Register';
import Login from './components/Cards/Login/Login';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
