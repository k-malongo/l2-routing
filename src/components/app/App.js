import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import User from '../user/User'

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
   </div>
  );
}
function MainApp(){
  return(
    <Router>
      <div>
        {/* All routes go here */}
        <div className="topNavBar">
          <Link className="active" to="/">Home</Link>.
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to ="/user/kelvin">User kelvin</Link>
        </div>

        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path = '/user/:username' element={<User/>} />

        </Routes>
      </div>
    </Router>
  )
}



export default App;
export {MainApp}
