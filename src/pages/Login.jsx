import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";



const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(true);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setRegisterError('');
        setSuccess('');


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully.');
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                setIsLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            })
    }

    const handleGithubSignIn = () => {
        setIsLoading(true);
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error)
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(false);
    }, []);
    return (
        <div>
            {isLoading && <span className="loading loading-spinner loading-lg"></span>}
            <h1 className="text-3xl my-10 text-center" >Please Login</h1>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 mb-10">
                    <button className="btn btn-primary">Login</button>


                </div>
            </form>
            {
                registerError && <p className="text-red-700 text-bold text-center">{registerError}</p>
            }
            {
                success && <p className="text-green-600 text-bold text-center">{success}</p>
            }
            <p className="text-center mt-4">Do not have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            <div className="flex font-bold justify-center mt-5 gap-10">
                <p className="text-5xl"><button onClick={handleGoogleSignIn} className=""><FcGoogle/></button></p>
                <p className="text-5xl"><button onClick={handleGithubSignIn} className=""><VscGithubInverted/></button></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;