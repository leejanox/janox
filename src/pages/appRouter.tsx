import { Route , Routes } from "react-router-dom";
import HomePage from "@pages/homePage";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    );
}

export default AppRouter;