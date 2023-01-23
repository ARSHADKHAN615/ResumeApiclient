import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LayoutComponent from "./utils/Layout";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/404" element={<h1>404</h1>} />
        <Route path="*" name="home" element={<LayoutComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
