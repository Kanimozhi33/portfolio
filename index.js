import { createBrowserRouter} from "react-router";



const Applayout = () =>{
    return (
<div className="flex flex-col">

</div>
    )
};


const routing = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body/>},
            {

            }
],
        errorElement: <Error/>}
])