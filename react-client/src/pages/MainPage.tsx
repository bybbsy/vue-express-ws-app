import { Outlet } from "react-router-dom";

export function MainPage() {
  return (
    <div className="App">
      <header>
        <h1>A-Chat</h1>
      </header>
      <Outlet/>
    </div>
  )
}
