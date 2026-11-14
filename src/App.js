import { BrowserRouter , Route , Routes , Link } from "react-router-dom";


import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sign from "./components/Sign/Authorization/Sign.js";
import SignUp from "./components/Sign/Registration/SignUp.js";



function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    

    <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/registration" element={<SignUp/>} />
      <Route path="/authorization" element={<Sign/>} />

    </Routes>

    </BrowserRouter>
  );
}

export default App;
