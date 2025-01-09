import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Detail from "@/pages/detail/Detail";
import Search from "@/pages/search/Search";

const Router = () => {
    return (
        useRoutes([
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "latest",
                element: <Latest/>,
            },
            {
                path: "search",
                element: <Search/>,
            },
            {
                path: "product/:id",
                element: <Detail/>,
            },
        ])
    )
}

export default Router