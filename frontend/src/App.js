// function MyButton(){
//   return(
//     <button>I'm a button</button>
//   );
// };


// function Logo(){
//   const user ={
//     logo:"/logo.png"
    
//   };
//   return (
//     <img 
//     className="logo"
//     src={user.logo}
//     alt="Logo"
//     style={{width:"100px",height:"auto"}}>

//     </img>
//   )
// }

// var user = "mandeep"
// export default function MyApp(){
//   return(
//     <div>
//       <Logo />
//       <h1>Welcome to my app</h1>
//       <MyButton />


//     </div>
//   )
// }


import logo from './logo.png';
import './App.css';


export default function MyApp(){
  return(
    <div className='app-container'>
      <img className='logo' src={logo} alt = {logo} />
      <div className='button-group'>
        <button className='btn login-btn'>Login</button>
        <button className='btn signup-btn'>Sing Up</button>
      </div>
    </div>
  )
}

