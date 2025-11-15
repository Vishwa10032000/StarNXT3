
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'


function App() {

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Outlet /> {/* 👈 Page content loads here */}
      </main>
      <Footer />
    </>
  )
}

export default App
