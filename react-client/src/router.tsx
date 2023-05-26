import { createBrowserRouter } from "react-router-dom";
import { RoomsPage } from "./pages/RoomsPage";
import { ChatPage } from "./pages/ChatPage";
import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    children: [
      {
        path: '/rooms',
        element: <RoomsPage/>
      },
      {
        path: '/rooms/:id',
        element: <ChatPage/>
      },
      {
        path: '/auth',
        element: <AuthPage/>
      }
    ]
  }
])
