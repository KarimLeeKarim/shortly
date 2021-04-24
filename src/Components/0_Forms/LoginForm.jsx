import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 100,
        },
    },
}));

const LoginForm = ({ loginForm,status }) => {
    const classes = useStyles();
    return (
        <div>
            {status ? <form className={classes.root, "login"} noValidate autoComplete="off">
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    className="input"
                    type="email"
                />
                <TextField
                    label="Password"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    className="input"
                    type="password"
                />

                <button onClick={loginForm} className="login__close">x</button>
                <button className="loginButton">Login</button>

            </form> : null}
        </div>
    )
}


export default LoginForm;