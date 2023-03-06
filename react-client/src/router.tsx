import { createBrowserRouter } from "react-router-dom";
import { RoomsList } from "./pages/RoomsList";
import { Room } from "./pages/Room";
import { MainPage } from "./pages/MainPage";

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    children: [
      {
        path: '/rooms',
        element: <RoomsList />
      },
      {
        path: '/rooms/:id',
        element: <Room />
      }
    ]
  }
])
