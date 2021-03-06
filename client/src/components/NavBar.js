import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css'
import LoginImage from '../images/login.PNG' 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GoogleLogin } from 'react-google-login';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Button,
    makeStyles, TextField 
} from "@material-ui/core";
import { login } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
    heading : {
        color : "red", 
        fontSize: "20px",
        fontWeight: "bold",
    },
    para : {
        paddingTop : '0px'
    },
    buttonSection : {
        paddingTop: '20px'
    },
    otpButton : {
        height: "50px",
        width: "340px",
        backgroundColor : "#e04c54",
        color : "white", 
        fontSize: "16px",
        fontFamily : "monospace", 
        border : "none", 
        borderRadius: "5px",
        cursor: "pointer"
    },
    newPTag : {
        paddingTop: "20px", 
        textAlign: "center", 
        color: "grey"
    }, 
    termsAndCondition : {
        textAlign : "center", 
        paddingTop : "20px",
        fontSize: "small"
    }
}))

const NavBar = ({user,type}) => {
    const classes = useStyles();
    console.log(type)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const {user} = useSelector((state) => state.user)
    // // console.log(user)
    if(type){
        console.log(type.is_admin)
    }
    console.log(user, type)
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email, password)

        dispatch(login({
            email, password
        }));
    }
    // const user=null;
    const dispatch = useDispatch();
    return (
    <>
        <div className="navbar" style={{ backgroundColor:"#e04c54"}}>
            <div className="nav-header">
                <div className="nav-logo">
                    <div>
                        <a href='/'>
                        <img src = "https://play-lh.googleusercontent.com/5ZxVI65M9_yQQHgsY2f_lvSFD9E4Oqvfgxkg-E-MZwWt1M65-6HLY3twREAubQtZqqo" className="logo"/></a>
                    </div>
                </div>
            </div>
         
            <div className="nav-links">
                         
            {  (user!==null) ?
                    (
                        <div className="dropdown" style={{
                            position:"relative",
                            // left:"15%",
                            color:"white",
                            bottom:"4px", 
                            float : 'right',
                                paddingTop : '10px', 
                                paddingLeft:'30px', 
                                paddingRight : '50px'
                        }}>
                        <a className="dropBtn" href="/">
                        <AccountCircleIcon style={{fontSize: '250%',color:"white"}}/>
                        {/* <img style={{
                            width:"70px"
                            ,height:"70px"
                        }} class="ui avatar image" src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"/> */}
                        </a>
                        <div className="drop-content">
                            {/* <a href="/createtrip">Createtrip</a> */}
                            <a href="/profile">Profile</a>
                            <a href="/changepassword">Password</a>
                            <a href="/logout">Logout</a>
                            
                        </div>
                        </div>
                    )
                    : 
                    (
                        <div className="dropdown">
                            <a className="dropBtn" href="/" style={{
                                color:"white",
                                position:"relative",
                                // left:"100px"
                                float : 'right',
                                padding : '30px'
                            }}>
                                Login
                            </a>
                            <div className="drop-content">
                                <Popup trigger={
                                    <a style={{cursor: "pointer"}}>Sign In/Sign Up</a>
                                } modal>
                                    <span style={{margin:"auto"}}>
                                        <div className="columns">
                                            <div className="column">
                                            <img src={LoginImage} style={{width:'95%'}} />
                                            </div>
                                            <div className="column">
                                                <img src={Logo} style={{height:'50px', width:"100px", border:'1px black', margin:"0"}} />
                                                <h6 className={classes.heading}>Sign in to avail exciting discounts and cashbacks!!</h6>
                                                
                                                <p className={classes.para}>
                                                    <input 
                                                        style={{
                                                            width:'335px', 
                                                            borderRadius: '5px',
                                                            border: '1px solid grey', 
                                                            fontFamily: 'Courier New, Courier, monospace', 
                                                            fontWeight: "bold", 
                                                            paddingLeft : "20px"
                                                        }}
                                                        type="text"
                                                        value={email} 
                                                        onChange={(e)=>setEmail(e.target.value)} 
                                                        placeholder = "Enter your email address"
                                                    />

                                                    <input 
                                                        style={{
                                                            width:'310px',
                                                            height:'40px', 
                                                            borderRadius: '5px',
                                                            border: '1px solid grey', 
                                                            fontFamily: 'Courier New, Courier, monospace', 
                                                            fontWeight: "bold", 
                                                            paddingLeft : "20px"
                                                        }}
                                                        type="password"
                                                        value={password} 
                                                        onChange={(e)=>setPassword(e.target.value)} 
                                                        placeholder = "Enter your password"
                                                    />

                                                </p>
                                                <div className={classes.buttonSection}>
                                                    <button 
                                                        className={classes.otpButton}
                                                        onClick={(e)=>handleSubmit(e)}
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>

                                                <p className={classes.newPTag}>
                                                    <b>OR</b><br /> 
                                                    
                                                        <a style={{cursor: "pointer"}} href='/signup'>New User? Sign Up to continue</a>
                                                    
                                                </p>
                                                
                                                
                                            </div>
                                        </div>
                                    </span>
                                </Popup>
                                
                            </div>
                        </div>
                    )
                }


                {(
                    type!==null && type.is_admin==="yes")?
                (
                    <div className="dropdown"style={{
                        position:"relative",
                        // left:"20%",
                        float : 'right',
                        padding : '30px',
                        // bottom:"20px",
                        color:"white"
                    }}>
                    <a  style={{
                        color:"white"
                    }} className="dropBtn" href="/">
                        Manage Trip
                    </a>
                    <div className="drop-content">
                        {/* <a href="/createtrip">Createtrip</a> */}
                        <a href="/viewtrip">Viewtrip</a>
                        <a href="/addbus">Addbus</a>
                        <a href="/viewbus">Viewbus</a>
                        <a href="/addadmin">Addadmin</a>
                        
                    </div>
                    </div>
                ):(
                    (type!== null && type.is_admin==="no") ?
                      
                        (
                  
                    <div className="dropdown"style={{
                                position:"relative",
                                // left:"20%",
                                bottom:"20px",
                                color:"white", 
                                float : 'right',
                                padding : '40px', 
                            }}>
                        <a className="dropBtn"style={{
                            color:"white"
                        }}  href="/mytrip">
                            Booked Trip
                        </a>
                        {/* <div className="drop-content">
                            <a href="/">Cancel</a>
                        </div> */}
                        
                    </div>
    
                   ) : <></>)
                
                }


                
                
            </div>

        </div>
    </>
  );
}

const mapStateToProps=state=>{
    return {
        user:state.auth.token,
        type:state.auth.user
    }
  }
export default connect(mapStateToProps)(NavBar)