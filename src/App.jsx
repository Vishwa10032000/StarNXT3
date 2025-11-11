
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'

function App() {

  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
   </HashRouter>
  )
}

export default App
