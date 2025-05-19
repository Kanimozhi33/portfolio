
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import './index.css'
import Body from "./Body.jsx";
import { RouterProvider} from "react-router-dom";
import Error from "./Error.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import { createBrowserRouter} from "react-router";
import Header from "./Header.jsx";
import Contact from "./Contact.jsx";


const Applayout = () =>{
    return (
<div className="flex flex-col">
    <Header/>
    <Outlet/>
    <Footer/>
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
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
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
