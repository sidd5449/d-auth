import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import StatusPage from './pages/StatusPage/StatusPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/status' element={<StatusPage />} />
      </Routes>
    </div>
  );
}

export default App;
