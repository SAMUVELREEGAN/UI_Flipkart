import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css'


const Login = () => {
    const[User,setUser] = useState("")
    const[Password,setPassword] = useState("")
    const[Massage,setMassage] =useState("")
    const navigate = useNavigate();
    const handle =()=>{
        setMassage("Loading...")
        if(User === "sam" && Password ==="123"){
            setTimeout(() => {navigate('/')}, 2000);
        }
        else{
            setTimeout(()=>{setMassage("Login Fail")},2000)
        } 
    }
  return (
    <div className='login_container'>
        <div className='login_info'>
        <div className='login_heading'>
        <img src="flipkart.png"  alt='Error'/>
        <h1>Flipkart</h1>
        </div>
        <div className='login_value'>
        <input type="text" className='login_input' placeholder="User Name" onChange={(e)=>{setUser(e.target.value)}} />
        <input type="text" className='login_input'  placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}/>  
        <div className='check'>
        <div>
        <input type="checkbox" /><label className='check_click'>Remember Me</label>
        </div>
        <div>
        <p className='check_name'>ForgotPassword</p>
        </div>
        </div> 
        <input type="button" className='login_btn' value="Login" onClick={handle}/>
        <h6>Don't have an account? <span> SignUp to free!</span> </h6>
        </div>  
        </div>   
        <div className='massage'>
        {Massage && <p>{Massage}</p>}
        </div>
    </div>
  )
}

export default Login