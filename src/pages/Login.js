import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Login.css'


const Login = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const [loginStatus, setLoginStatus] = useState('')

//   const navigate = useNavigate();

//   const login = () => {
//     Axios.post("http://localhost:3005/login", {
//       username: username,
//       password: password,
//     }).then((response) => {

//       if(response.data.message){
//         setLoginStatus(response.data.message)
//       }
//       else{
//         setLoginStatus(response.data[0].username)
//         navigate('../Home', { replace: true })
//         }
//     })
//   }

  return (
    <div >
        <div class="container">
        
	<div class="screen">
        
		<div class="screen__content">
        <h2 class='meutitle'> Meu Labs <br/> Student Profile</h2>
			<form class="login">
         
				<div class="login__field">
                   
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Username"  onChange={(e) => {
    //    setUsername(e.target.value)
     }}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" onChange={(e) => {
    //    setPassword(e.target.value)
     }}/>
				</div>
                <div>
				{/* onClick={() => { login();  }} */}
				<button  class="button login__submit">
				<a href='/'>
					Log In Now
					</a>  
				</button>	
				{/* <p>{loginStatus}</p> */}
             
                </div>			
			</form>
			{/* <div class="social-login">
				<h3>Follow Us On</h3>
				<div class="social-icons">
					<a href="https://www.instagram.com/meulabslk/" target='blank' class="social-login__icon fab fa-instagram"><img src='../Assets/igicon.png' alt='ig' style={{width:'35px',height:'33px'}}></img></a>
					<a href="https://www.facebook.com/meulabs/" target='blank' class="social-login__icon fab fa-facebook"><img src='/images/fbicon.png' alt='fb' style={{width:'35px',height:'38px'}}></img></a>
					<a href="https://www.youtube.com/@meulabs" target='blank' class="social-login__icon fab fa-twitter"><img src='/images/yticon.png' alt='yt' style={{width:'41px',height:'35px'}}></img></a>
				</div>
			</div> */}
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default Login