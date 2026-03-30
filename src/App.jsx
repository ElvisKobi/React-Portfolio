import Home from './pages/Home'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import './css/App.css'
import { Routes, Route } from 'react-router-dom'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Project />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	)
}
