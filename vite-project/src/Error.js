import { useRouteError } from "react-router";


const Error = () => {
    return (
         <div className="error">
            OOPS! Page not found
            <hr></hr> 😱 :(
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
};

export default Error;