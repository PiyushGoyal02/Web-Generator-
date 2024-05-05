import { Link } from "react-router-dom";
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye,FaEyeSlash } from "react-icons/fa";

function SignUp (){

    const [AccountType, setAccountType] = useState('');

    const [invadidInput, setInvalidInput] = useState(false);

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

            <div className="SignUp-Box-Div">

                <div>
                    <h5 className="SignUp-Top-Hading">signup</h5>
                </div>

                <form>
                    
                    <div className="TwoButtonDin">
                        <div className="Two-Buttons-Admin-User">
                            <button onClick={() => setAccountType("Admin")} className={`OneButton-Admin ${AccountType === 'Admin' ? 'active' : ''}`}>Admin</button>
                            <button onClick={() => setAccountType("User")} className={`TwoButton-User ${AccountType === 'User' ? 'active' : ''}`}>User</button>
                        </div>
                    </div>

                    <div className="Contant-Div">
                        <div className="FirstName-Div">
                            <label className="labelsTagss" htmlFor="firstName"> First Name </label>
                            <input required className="inputTagss" name="firstName" id="firstName" placeholder="Enter First Name"></input>
                        </div>

                        <div className="LastName-Div">
                            <label className="labelsTagss" htmlFor="lastName"> Last Name </label>
                            <input required className="inputTagss" name="lastName" id="LastName" placeholder="Enter Last Name"></input>
                        </div>
                    </div>

                    <div className="Contant-Div">
                        <div className="FirstName-Div">
                            <label className="labelsTagss" htmlFor="email"> Email Address </label>
                            <input required className="inputTagss" name="firstName" id="email" placeholder="Enter Your Email"></input>
                        </div>

                        <div className="LastName-Div">
                            <label className="labelsTagss" htmlFor="DOB"> Date Of Birth </label>
                            <input required className="inputTagss" name="lastName" id="DOB" placeholder="Enter Your DOB"></input>
                        </div>
                    </div>

                    <div className="Contant-Div">
                        <div className="FirstName-Div">
                            <div className="labelTag-Eye">
                                <label className="labelsTagss" htmlFor="password"> Password </label>
                                <span className='eye' onClick={() => setInvalidInput((pre) => !pre)}> {invadidInput ? (<FaEye />) : (<FaEyeSlash />)}</span>
                            </div>
                            <input required className="inputTagss" type={invadidInput === false ? "password": "text"} name="password" id="password" placeholder="Enter Your Password"></input>
                        </div>

                        <div className="LastName-Div">
                            <div className="labelTag-Eye">
                                <label className="labelsTagss" htmlFor="confirmPass"> Confirm Password </label>
                                {/* <span className='eye' onClick={() => setInvalidInput((pre) => !pre)}> {invadidInput ? (<FaEye />) : (<FaEyeSlash />)}</span> */}
                            </div>
                            <input required className="inputTagss" type={invadidInput === false ? "password": "text"} name="confirmPass" id="confirmPass" placeholder="Confirm Password"></input>
                        </div>
                    </div>

                    <div className="buttonSignup">
                        <button className="SignUp-Button">Sign up</button>
                    </div>

                    <div className='Line-OR-TopDiv'>
                        <div className='LeftLine'></div>
                        <p>OR</p>
                        <div className='RightLine'></div>
                    </div>

                    <div className="buttonSignup">
                    <button className='google-Button-SignUp'><FcGoogle /> Sign up with Google</button>    
                    </div> 



                </form>
            </div>

        </div>
    )
}

export default SignUp;