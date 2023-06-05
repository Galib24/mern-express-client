import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {


    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);


    // redirect formation for user
    const navigate = useNavigate();

    const location = useLocation()

    const from = location.state?.from?.pathname || '/';


    // for captcha reload 6digits
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }


    // captcha validation
    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        // console.log(value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }


    return (
        <>
            <Helmet>
                <title>Mern Express || Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left ml-24">
                        <h1 className="text-5xl font-bold ml-16">Login now!</h1>
                        <img className='w-1/2 mt-10' src="https://media.istockphoto.com/id/1481596427/photo/3d-hand-holding-mobile-phone-with-toggle-switch-button-and-check-mark-mobile-settings-slider.jpg?s=2048x2048&w=is&k=20&c=-n-WZdpkwqtVPMFHH7bRDRe2e2wQ5qgCuSPEYMEnVXk=" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha above" className="input input-bordered" />
                                {/* <button  className="btn w-24 btn-sm bg-green-200  mt-2">Confirm!</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? Create an account <Link to='/signup'>Click here!</Link> </small></p>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Login;