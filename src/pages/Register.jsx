import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        // // console.log(name, photo, email, password);

        // if (password.length < 6) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Something went wrong!",
        //     });
        //     return;
        // }
        // else if (/[A-Z]/.test(password)) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Something went wrong!",
        //     }); return;
        // }
        // else if (/[a-z]/.test(password)) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Something went wrong!",
        //     }); return;
        // }

        setRegisterError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })

    }
    return (
        <div>
            <h1 className="text-3xl my-10 text-center" >Please Register</h1>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                {/* photoUrl */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoUrl" className="input input-bordered" required />
                </div>
                {/*password  */}
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
                    <button className="btn btn-primary">Register</button>
                    <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Register;