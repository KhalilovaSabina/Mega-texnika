import { Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import Texnikalar from "../pages/Texnikalar";
import Choose from "../components/Choose";

function WebRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<Choose/>} />
      <Route path="/texnikalar" element={<Texnikalar />} />
    </Routes>
  );
}
export default WebRouting;
