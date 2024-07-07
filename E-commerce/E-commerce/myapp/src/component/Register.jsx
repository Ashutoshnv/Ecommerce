import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

export const Register = () => {
    const {createUser,signUpWithGmail}=useContext(AuthContext)
    const handleGoogleButton=()=>{
        console.log("Google sign in")
        signUpWithGmail().then((results)=>{
            const user =results.user
            console.log(user)


        }).catch((error)=>{
            console.log(error)
        })
    }
return (
    <div class="main">
        <img class="img-1" src="./assets/images/register-bg-1.jpg" alt=""/>
        <div class="container">
            
            <div class="row register-form">
                
                <div class="col-8 col-sm-10 col-md-5 col-lg-8 mx-auto mt-5 shadow p-3 rounded">
                    <h3>User Registration</h3>
                    <form>
                    <div class="mb-3">
                        <label class="form-label">UserName</label>
                        <input class="form-control" type="text" placeholder="Usernam"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input class="form-control" type="password" placeholder="Password"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confirm Password</label>
                        <input class="form-control" type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <input class="btn btn-outline-danger" type="Submit" value="login"/>
                        Already Have an Account??<Link to="/Login">login</Link>
                    </div>
                    </form>
                    <button onClick={handleGoogleButton}>Sign In With Gmail</button>

                    
                </div>
                
            </div>
        </div>
    </div>
)
}
