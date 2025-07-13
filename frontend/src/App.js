function MyButton(){
  return(
    <button>I'm a button</button>
  );
};


function Logo(){
  const user ={
    logo:"/logo.png"
    
  };
  return (
    <img 
    className="logo"
    src={user.logo}
    alt="Logo"
    style={{width:"100px",height:"auto"}}>

    </img>
  )
}

var user = "mandeep"
export default function MyApp(){
  return(
    <div>
      <Logo />
      <h1>Welcome to my app</h1>
      <MyButton />


    </div>
  )
}