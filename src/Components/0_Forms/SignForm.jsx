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
const SignForm = ({signForm,status}) => {
    const classes = useStyles();
    return (
        <div>
            {
                status ? <form className={classes.root, "sign"} noValidate autoComplete="off">
                    <TextField
                        label="First Name"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        className="input"
                        type="text"
                    />
                    <TextField
                        label="Last Name"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        className="input"
                        type="text"
                    />
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
                    <TextField
                        label="Confirm Password"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        className="input"
                        type="password"
                    />
                    <button onClick={signForm} className="sign__close">x</button>
                    <button className="signButton">Register</button>
                </form> : null
            }

        </div>
    )
}

export default SignForm
