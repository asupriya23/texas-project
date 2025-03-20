import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
