import React from 'react'

const MobileNavbar = ({ statusMobile,signForm,loginForm }) => {
    return (
        <>
            {statusMobile ? 
                <div className="mobile">
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                    <hr/>
                    <button className="loginmobile" onClick={loginForm}>Login</button>
                    <button className="signmobile" onClick={signForm}>Sign Up</button>
                </div>
             : null}
        </>
    )
}

export default MobileNavbar;