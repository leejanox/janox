import { Routes , Route } from "react-router-dom"
import Home from "@pages/home"
import TestPage from "@pages/test"
import Login from "@pages/login"

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<TestPage/>}/>
    </Routes>
  )
}

export default App
