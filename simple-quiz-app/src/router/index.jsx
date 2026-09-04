import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import LeaderBoard from "../pages/LeaderBoard";
import Result from "../pages/Result";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/quiz',
                element:<Quiz/>
            },
            {
                path:'/leaderboard',
                element:<LeaderBoard/>
            },
            {
                path:'/result',
                element:<Result/>
            }
        ]
    }
]);