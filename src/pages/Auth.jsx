import React from 'react';
import { useAuth } from '../hoc/useAuth'
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import {users} from '../database/user';

const Auth = () => {
    const navigate = useNavigate();
    const {signin} = useAuth();
    const {signout} = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const loginForm = form.querySelector('.form__login');
        const passwordForm =  form.querySelector('.form__password');
        const dataUser = users;
        const user = form.username.value;
        const password = form.password.value;
        let userAuth = dataUser.find(item => item.name == user);

        if (user == "") {
            loginForm.classList.add("empty-input")
            loginForm.classList.remove("invalid-input")
        }
        else {if (user == userAuth.name)
        {loginForm.classList.remove("empty-input")
            loginForm.classList.remove("invalid-input");}
        else { loginForm.classList.add("invalid-input");
            loginForm.classList.remove("empty-input");}
        };
        if (password == "") {
            passwordForm.classList.add("empty-input")
            passwordForm.classList.remove("invalid-input")
        }
        else {if (password == userAuth.password)
        {passwordForm.classList.remove("empty-input")
            passwordForm.classList.remove("invalid-input");}
        else { passwordForm.classList.add("invalid-input");
            passwordForm.classList.remove("empty-input");}

        if (password == userAuth.password && user == userAuth.name)
        {signin(user, () => navigate('/about', {replace: true}));}
    }}

    return (
        <div className="auth_page">
                 <form className="form" onSubmit={handleSubmit} noValidate>

                <h2 className="form__title"> Авторизация</h2>

                <span className="form__text"> После авторизации у Вас будет доступ ко всем действующим курсам нашей школы</span>


                <div className="form__login login-block">
                    <label className="login-block__label asterisk" htmlFor="login-input">Login</label>
                    <input className="login-block__input" type="text" id="login-input"
                           placeholder="Введите Ваш логин" name="username"/>
                        <p className="empty-input">Поле обязательно для заполнения</p>
                        <p className="invalid-input">Логин не зарегестрирован</p>
               </div>

                     <div className="form__password password-block">
                         <label className="password-block__label asterisk" htmlFor="password-input">Password</label>
                         <input className="password-block__input" type="password" id="password-input"
                                placeholder="Введите Ваш пароль" name="password"/>
                         <p className="empty-input">Поле обязательно для заполнения</p>
                         <p className="invalid-input">Пароль не верный</p>
                     </div>

                <div className="form__button button-block">
                <button className="button-block__button" type="submit" >Вход</button>
                <button className="button-block__button" onClick={() => signout(() => navigate('/about', {replace: true}))}> Выход</button>
                </div>
            </form>



           </div>
    )
};

export {Auth};




