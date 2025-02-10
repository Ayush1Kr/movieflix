import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Contact, contactData } from "./pages/Contact"
import { Movie } from "./pages/Movie"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import Applayout from "./component/layout/Applayout"
import "./app.css"
import { Errorpage } from "./pages/Errorpages"
import { getmoviedata } from "./api/Getapidata"
import { Moviedetails } from "./component/UI/Moviedetails"
import { getmoviedetails } from "./api/Getmoviedetails"

const App=()=>{
    const router= createBrowserRouter([
      {
        path:"/",
        element:<Applayout/>,
        errorElement: <Errorpage/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/about",
            element:<About/>
    
          },
          {
            path:"/movie",
            element:<Movie/>,
            loader: getmoviedata,
    
          },
          {
            path:"/movie/:movieID",
            element:<Moviedetails/>,
            loader:getmoviedetails,
    
          },
          {
            path:"/contact",
            element:<Contact/>,
            action:contactData,
          }
        ]
      },
      
    ])
    return <RouterProvider router={router} />
}

export default App