import { createBrowserRouter } from "react-router-dom";
import { RoomsPage } from "./pages/RoomsPage";
import { ChatPage } from "./pages/ChatPage";
import { MainPage } from "./pages/MainPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/rooms',
        element: <RoomsPage />
      },
      {
        path: '/rooms/:id',
        element: <ChatPage />
      }
    ]
  }
])
