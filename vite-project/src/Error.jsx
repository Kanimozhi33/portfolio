import { useRouteError } from "react-router";


const Error = () => {
    const err = useRouteError();
    return (
         <div className="error text-3xl ">
            OOPS! Page not found
            <hr></hr> 😱 :(
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
};

export default Error;