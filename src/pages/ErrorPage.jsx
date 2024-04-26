import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-3xl font-bold">
            <img className="mx-auto" src="https://i.ibb.co/9Yj7933/404.jpg" alt="" />
            <h1>Opps! <br/>Page not found</h1>
            <Link className="text-purple-400" to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;