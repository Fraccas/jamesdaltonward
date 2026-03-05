import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TrailFamily from './pages/TrailFamily'
import Games from './pages/Games'
import Tools from './pages/Tools'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trail-family" element={<TrailFamily />} />
        <Route path="/games" element={<Games />} />
        <Route path="/experience" element={<Tools />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
