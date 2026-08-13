import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App
