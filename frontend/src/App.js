
import logo from './logo.png';
import './App.css';
import Navbar from './Navbar';

export default function MyApp(){
  return(
    <div className='app-container'>
      <Navbar />
      <img className='logo' src={logo} alt = {logo} />
      <div className='button-group'>
        <button className='btn login-btn'>Login</button>
        <button className='btn signup-btn'>Sing Up</button>
      </div>
    </div>
  )
}

