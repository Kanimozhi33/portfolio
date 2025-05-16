import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";

import './index.css'
import Body from "./Body.jsx";
import { RouterProvider} from "react-router";



import { createBrowserRouter} from "react-router";



const Applayout = () =>{
    return (
<div className="flex flex-col">
      <Body/>
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {routing}/>)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
