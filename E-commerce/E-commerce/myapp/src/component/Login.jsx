import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
return (
    <div class="main">
        <img class="img-1" src="./assets/images/login-bg-2.jpg" alt=""/>
        <div class="container">
            
            <div class="row">
                
                <div class=" login-1 col-8 col-sm-10 col-md-2 col-lg-8 mx-auto mt-5 shadow p-3 rounded">
                    <h3>User Login</h3>
                    <div class="mb-3">
                        <label class="form-label">UserName</label>
                        <input class="form-control" type="text" placeholder="Username"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input class="form-control" type="password" placeholder="Password"/>
                    </div>
                    
                    <div>
                        <input class="btn btn-outline-danger " type="submit" value="register"/>
                        Don't Have an Account?? <Link to="/Register">register</Link>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    </div>
)
}
