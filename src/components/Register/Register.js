import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input tupe="email" name="" id=""
                        placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id=""
                        placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id=""
                        placeholder="Re-enter Password" />
                    <input type="submit" value="Submit" />
                    <p>Already Have an account? <Link to="/login">Login
                    </Link></p>
                    <div>--------------Or--------</div>
                    <button className="btn regular">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;