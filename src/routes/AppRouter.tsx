import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddStatusPage from "../pages/AddStatusPage";
import LoginPage from "../pages/LoginPage";
import DashBoardPage from "../pages/DashBoardPage";
import ProfilePage from "../pages/ProfilePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/add-status" element={<AddStatusPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
    </Routes>
  );
}

export default AppRouter;
