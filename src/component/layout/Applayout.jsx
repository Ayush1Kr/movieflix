import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

const Applayout=()=>{
    const navigation = useNavigation();

    if(navigation.state=== "loading")
    {
        <Loading/>
    }

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    )
}

export default Applayout