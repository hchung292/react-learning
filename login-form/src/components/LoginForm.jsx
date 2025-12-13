import { useState } from 'react'

function LoginForm() {

    const [pw, showPw] = useState(true);

    function showPassword() {
        if(pw) {
            showPw(false);
        } else {
            showPw(true);
        }
    }


    return(
        <>
            <h1>Hello, welcome to my website</h1>

            <div className="form-input-container">
                <input 
                    type="email" 
                    placeholder="Email"
                    className="form-input"
                />
            </div>

            <div className="form-input-container">
                <input 
                    type={pw ? 'password' : 'text'} 
                    placeholder="Password"
                    className="form-input"
                />
                <button
                    onClick={showPassword}
                    className="show-hide-pw-button"
                >
                    {pw ? 'Show' : 'Hide'}
                </button>
            </div>

            <div className="button-container">
                <button className="form-button">
                    Login
                </button>

                <button className="form-button">
                    Sign up
                </button>
            </div>
        </>
    );
}

export default LoginForm;