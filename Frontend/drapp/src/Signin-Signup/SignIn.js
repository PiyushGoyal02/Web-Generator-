import { Link } from 'react-router-dom';
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useState } from 'react';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignIn(){

    // This Is Navigate (MenuCard)
    const navigate = useNavigate();

    // (Axios) Resolve And Error Message
    const [message, setMessage] = useState("");

    // Password And Eye 
    const [invadidInput, setInvalidInput] = useState(false);


    const [formdata,setFormdata] = useState({email:"", password:""})

    function ValueChangeHandler(event){
        setFormdata(preformdata => {
            return {
                ...preformdata,
                [event.target.name] : event.target.value
            }
        })
    }

    const SubmitDataHandler = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://localhost:4000/api/v1/auth/signin",
            formdata,
            {
              headers: {
                "Content-Type": "application/json"   //Accept
              }
            }
          );
          console.log("Sign-in successful:", response.data);
          setMessage(response.data.message || "Sign-in successful!");
          toast.success(response.data.message || "SignIn Successfully")
          // Navigate to the homepage after sign-in
          navigate("/MenuCard");
        } catch (error) {
          toast.error(error.message)
          console.error("Error during sign-in:", error.response ? error.response.data : error.message);
        }
      };


    return (
        <div>
            
            <div className='signin-TopHading'>
                <div className="sign-text">
                    <img src={sign}></img>
                    <img src={text}></img>
                </div>

                <div className='Link-signin-signup'>
                    <Link className='Link' to='/'>sign in</Link>
                    <Link className='Link' to='/SignUp'>sign up</Link>
                </div>
            </div>

            {/* SignIn Box */}
            <div className='Input-labels'>

                <div>
                    <h5 className='login-top-hading'>login</h5>
                </div>

                <form onSubmit={SubmitDataHandler}>
                    <div className='input-labels'>
                        <label className='email-password-input-hading-text' htmlFor='EmailId'>Email Addresss..</label>
                        <input required value={formdata.email} onChange={ValueChangeHandler} className='input-Tag-Email-Pass' name='email' type='text' id='EmailId' placeholder='Enter Your Email'></input>
                    </div>

                    <div>
                        <label className='email-password-input-hading-text' htmlFor='password'>Password..</label>
                        
                        <div className='password-input-eyeIcon'>
                            <input required value={formdata.password} onChange={ValueChangeHandler} placeholder='Enter Password' className='input-Tag-Email-Pass' name='password' type={invadidInput ? ("type") : "password"} id='password'></input> 
                            <span className='eye' onClick={() => setInvalidInput((pre) => !pre)}> {invadidInput ? (<FaEye />) : (<FaEyeSlash />)}</span>
                        </div>
                    </div> 

                    <div>
                        <p className='forgot-your-password'>Forgot Your Password?</p>
                    </div>

                    <div className='Signin-createNewAccount'>
                        <button type='submit' className='SignIn-Button'>Sign in</button>
                        <Link className='Create-New-Account' to='/SignUp'><button className='Create-New-Account'> Create New Account </button></Link>    
                    </div> 

                    <div className='Line-OR-TopDiv'>
                        <div className='LeftLine'></div>
                        <p>OR</p>
                        <div className='RightLine'></div>
                    </div>  

                </form>

                <div>
                    <button className='google-Button'><FcGoogle /> Sign up with Google</button>
                </div>
                
            </div>

        </div>
    )
}

export default SignIn;