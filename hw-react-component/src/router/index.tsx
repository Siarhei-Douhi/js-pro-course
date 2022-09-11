import { Route, Routes } from "react-router-dom";
import { EmailConfirmed } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { Registration } from "../pages/Registration";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register_success" element={<RegisterSuccess />} />
      <Route path="/email_confirmed" element={<EmailConfirmed />} />
      <Route path="/selected_post" element={<SelectedPost />} />
    </Routes>
  );
};
