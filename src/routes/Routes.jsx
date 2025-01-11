import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import AllVolunteerPosts from "../pages/AllVolunteerPosts";
import NeedVolunteerDetails from "../pages/NeedVolunteerDetails";
import BeAVolunteer from "../pages/BeAVolunteer";
import ManageMyPost from "../pages/ManageMyPost";
import UpdateVolNeedPosts from "../pages/UpdateVolNeedPosts";
import Error from "../pages/Error";




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: 'all-volunteer-need-posts',
    element: <PrivateRoutes><AllVolunteerPosts /></PrivateRoutes>,
  },
  {
    path: 'all-volunteer-need-posts/details/:id',
    element: <PrivateRoutes><NeedVolunteerDetails /></PrivateRoutes>,
    loader: ({ params }) => fetch(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts/${params.id}`)
  },
  {
    path: 'be-a-volunteer/:id',
    element: <PrivateRoutes><BeAVolunteer /></PrivateRoutes>,
    loader: ({ params }) => fetch(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts/${params.id}`)
  },
  {
    path: 'add-volunteer-need-posts',
    element: <PrivateRoutes><AddVolunteerPost /></PrivateRoutes>
  },
  {
    path: 'manage-my-posts',
    element: <PrivateRoutes><ManageMyPost /></PrivateRoutes>
  },
  {
    path: 'update-need-volunteers-posts/:id',
    element: <PrivateRoutes><UpdateVolNeedPosts /></PrivateRoutes>,
    loader: ({ params }) => fetch(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts/${params.id}`)
  },

  {
    path: 'volunteer/register',
    element: <Register />
  },
  {
    path: 'volunteer/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Error />,
  },


]);


export default router