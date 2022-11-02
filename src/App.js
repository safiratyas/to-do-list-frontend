import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

import Homepage from './components/Cards/Register/Register'

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
