import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LayoutComponent from "./utils/Layout";
import "./index.css";
import { Button, Result } from "antd";
import GuestWrap from "./utils/GuestWrap";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/sign-in"
          element={
            <GuestWrap>
              <SignIn />
            </GuestWrap>
          }
        />
        <Route
          exact
          path="/sign-up"
          element={
            <GuestWrap>
              <SignUp />
            </GuestWrap>
          }
        />
        <Route
          exact
          path="/404"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary" onClick={() => window.location.href = "/"}>Back Home</Button>}
            />
          }
        />
        <Route path="*" name="home" element={<LayoutComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
