import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/home" element={<Home/>} />
			<Route path="/register" element={<Register/>} />
			<Route path="/login" element={<Login/>} />
		</Routes>
	);
}

export default App;