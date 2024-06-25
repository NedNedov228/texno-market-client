import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import SearchPage from './components/SearchPage/SearchPage'

function App() {

  return (
    <>
      <Header />
      <main>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="search" element={<SearchPage />} />
          </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
