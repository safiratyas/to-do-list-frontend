import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Register from './pages/Register';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
