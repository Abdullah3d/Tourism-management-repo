import { Link, NavLink, useLoaderData } from "react-router-dom";
import Footer from "./Footer";


const Countries = () => {

    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div>
            <NavLink to="/countries/countries/countryName" className="grid items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {
                countries && countries.map((country) =>
                    <div key={country?._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={country.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{country.
                                country_name}</h2>
                            <p>{country.description}</p>
                        </div>
                    </div>
                )
            }
           
        </NavLink>
        <Footer></Footer>
        </div>
    )

};

export default Countries;