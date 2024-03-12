import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
function App() {
  
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchHistory' element={<WatchHistory/>}/>
      </Routes>
     

      <Footer/>

    </>
  )
}

export default App
