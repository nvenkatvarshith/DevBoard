import './App.css'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {Routes, Route} from 'react-router-dom'
import Sprints from './pages/Sprints'
import Kanban from './pages/Kanban'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='/dashboard/sprint' element={<Sprints/>} >
        </Route>
        <Route path='/dashboard/sprint/kanban/:sprintid' element={<Kanban/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
