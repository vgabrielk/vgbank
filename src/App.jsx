import './css/App.css'
import './css/responsive.css'
import SideBar from './components/SideBar'
import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from 'react-router-dom'

import Financas from './pages/Financas'
import Payments from './pages/Payments'


function App() {

  return (
    <>
      <div className="App">
        <Router>
          <SideBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/financas' element={<Financas />} />
            <Route path='/payments' element={<Payments />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
