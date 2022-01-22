import React from 'react';
import '../Style/style.css';
import '../Style/formLogin.css';

const LoginForm = (props) => (
    <form className="formLogin">
        <label><br/>
            Nume utilizator: <br/>
            <input type="text" className="usernameLogin" placeholder="Nume utilizator" name="username" defaultValue=""
                   onChange={props.handleChange}/>
            <br/>
        </label>
        <label><br/>
            Parola: <br/>
            <input type="password" className="passLogin" placeholder="Parola" name="password" defaultValue=""
                   onChange={props.handleChange}/>
            <br/>
        </label>
        <label><br/>
            <input type="button" name="login_prof" className="btnProf" value="Autentificare Profesor" onClick={props.handleClick}/>
        </label><br/>
        <label><br/>
            <input type="button" name="login_stud" className="btnStud" value="Autentificare Student" onClick={props.handleClick}/>
        </label>
    </form>
);


export default LoginForm;
