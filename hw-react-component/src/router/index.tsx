import { Route, Routes, Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { Context } from "../App";
import { EmailConfirmed } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { Registration } from "../pages/Registration";
import { SelectedPost } from "../pages/SelectedPost";
import { MyPosts } from "../pages/MyPosts";
import { Error } from "../pages/Error";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register_success" element={<RegisterSuccess />} />
      <Route path="/email_confirmed" element={<EmailConfirmed />} />
      <Route path="/selected_post/:id" element={<SelectedPost />} />
      <Route path="/activate/:uid/:token" element={<EmailConfirmed />} />
      <Route path="/add-post" element={useLoginGuard(<EmailConfirmed />)} />
      <Route path="/myposts" element={useLoginGuard(<MyPosts />)} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

const useLoginGuard = (component: ReactNode) => {
  const { user } = useContext(Context);

  if (user) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
};
