import { Link } from "react-router-dom";
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignUp ({ AccountType,setAccountType }){

    // This use to Navige (MenuCard) file par
    const navigate = useNavigate();

    // this is use To Password/Test Type..
    const [invadidInput, setInvalidInput] = useState(false);

    const [formdata, setformdata] = useState({firstName:"", lastName:"", email:"", password:"", confirmPassword:"", dateOfBirth:"", accountType:"User"})

    // OnChange Input Tag 
    function ValueChnageHandler(event){
        setformdata(preformdata => {
            return {
                ...preformdata,
                [event.target.name] : event.target.value
            }
        })
    }

    // (Axios) Resolve Message And Error Message
    const [message, setMessage] = useState("");


    // OnSubmit Button click 
    const SubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:4000/api/v1/auth/signup",
                formdata,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log("Signup successful:", response.data);
            setMessage(response.data.message || "Signup successful!");
            toast.success(response.data.message || "SignUp Successfully..")
            navigate("/MenuCard")
        } catch (error) {
            console.error("Error during signup:", error.response ? error.response.data : error.message);
            toast.error(error.message)
            // setMessage(error.response?.data?.message || "Error during signup.");
        }
    };

    const handleAccountTypeChange = (type) => {
        setAccountType(type);
        setformdata((prevFormData) => ({
            ...prevFormData,
            accountType: type
        }));
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

            <div className="SignUp-Box-Div">

                <div>
                    <h5 className="SignUp-Top-Hading">signup</h5>
                </div>

                <form onSubmit={SubmitHandler}>
                    
                    <div className="TwoButtonDin">
                        <div className="AdminDib">
                            <label className="AdminUserLabel" htmlFor="radio"> Admin </label>
                            <input name="accountType" type="radio" value="Admin" checked={AccountType === "Admin"} onChange={() => handleAccountTypeChange("Admin")}></input>
                        </div>

                        <div className="UserDiv">
                            <label className="AdminUserLabel" htmlFor="radio"> User </label>
                            <input name="accountType" type="radio" value="User" checked={AccountType === "User"} onChange={() => handleAccountTypeChange("User")}></input>
                        </div>
                    </div>

                    <div className="Contant-Div">
                        <div className="FirstName-Div">
                            <label className="labelsTagss" htmlFor="firstName"> First Name </label>
                            <input required type="text" onChange={ValueChnageHandler} value={formdata.firstName} className="inputTagss" name="firstName" id="firstName" placeholder="Enter First Name"></input>
                        </div>

                        <div className="LastName-Div">
                            <label className="labelsTagss" htmlFor="lastName"> Last Name </label>
                            <input required type="text" onChange={ValueChnageHandler} value={formdata.lastName} className="inputTagss" name="lastName" id="LastName" placeholder="Enter Last Name"></input>
                        </div>
                    </div>

                    <div className="Contant-Div">
                        <div className="FirstName-Div">
                            <label className="labelsTagss" htmlFor="email"> Email Address </label>
                            <input required type="email" onChange={ValueChnageHandler} value={formdata.email} className="inputTagss" name="email" id="email" placeholder="Enter Your Email"></input>
                        </div>

                        <div className="LastName-Div">
                            <label className="labelsTagss" htmlFor="dateOfBirth"> Date Of Birth </label>
                            <input required type="date" onChange={ValueChnageHandler} value={formdata.dateOfBirth} className="inputTagss" name="dateOfBirth" id="dateOfBirth" placeholder="Enter Your DOB"></input>
                        </div>
                    </div>

                    <div className="Contant-Div">
                        <div className="FirstName-Div">
                            <div className="labelTag-Eye">
                                <label className="labelsTagss" htmlFor="password"> Password </label>
                                <span className='eye' onClick={() => setInvalidInput((pre) => !pre)}> {invadidInput ? (<FaEye />) : (<FaEyeSlash />)}</span>
                            </div>
                            <input required onChange={ValueChnageHandler} value={formdata.password} className="inputTagss" type={invadidInput === false ? "password": "text"} name="password" id="password" placeholder="Enter Your Password"></input>
                        </div>

                        <div className="LastName-Div">
                            <div className="labelTag-Eye">
                                <label className="labelsTagss" htmlFor="confirmPass"> Confirm Password </label>
                                {/* <span className='eye' onClick={() => setInvalidInput((pre) => !pre)}> {invadidInput ? (<FaEye />) : (<FaEyeSlash />)}</span> */}
                            </div>
                            <input required onChange={ValueChnageHandler} value={formdata.confirmPassword} className="inputTagss" type={invadidInput === false ? "password": "text"} name="confirmPassword" id="confirmPass" placeholder="Confirm Password"></input>
                        </div>
                    </div>

                    <div className="buttonSignup">
                        <button type="submit" className="SignUp-Button">Sign up</button>
                    </div>

                    <div className='Line-OR-TopDiv'>
                        <div className='LeftLine'></div>
                        <p>OR</p>
                        <div className='RightLine'></div>
                    </div>

                </form>

                <div className="buttonSignup">
                    <button className='google-Button-SignUp'><FcGoogle /> Sign up with Google</button>    
                </div> 

            </div>

        </div>
    )
}

export default SignUp;