import './login.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
];

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const errors = {
        invalidCredentials: 'Invalid credentials'
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const {uname, pass} = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (!userData || (userData.password !== pass.value)) {
            setErrorMessages({name: "invalidCredentials", message: errors.invalidCredentials});
        } else {
            setIsSubmitted(true);
        }
        setTimeout(() => navigate('/launches'), 1000)
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" name="uname" required/>
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" required/>
                    {renderErrorMessage("invalidCredentials")}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-form m-4">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    );
}

export default Login;
