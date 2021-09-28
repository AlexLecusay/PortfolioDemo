import React from "react";
import { Link } from "react-router-dom"

const NotFoundPage= ()=>{
return(
    <section id="fullPage">
    <div>
        <h2>404 Not Found!</h2>
        <Link to="/">Home Page</Link>
    </div>
    </section>
    );
};
export default NotFoundPage;