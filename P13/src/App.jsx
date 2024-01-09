import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
/* import Layout from './components/Layout/Layout' */
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import User from './pages/User'

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-in/user' element={<User />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
