import React from 'react';
import { useLocation} from 'react-router-dom';
import { useAuth } from '../hoc/useAuth'
import { useNavigate } from 'react-router-dom';

const Auth = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();
    const {signout} = useAuth();
  //  const fromPage = location.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
      // signin(user, () => navigate(fromPage, {replace: true}));
        signin(user, () => navigate('/about', {replace: true}));
    }git

    return (
        <div>


            <h1>Login page</h1>


           <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => signout(() => navigate('/about', {replace: true}))}> LogOut</button>


        </div>
    )
};

export {Auth};




