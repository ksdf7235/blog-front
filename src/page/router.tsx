import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component//Header";
import Home from "./Home";
import Login from "./Login";
import Test from "./Test";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
