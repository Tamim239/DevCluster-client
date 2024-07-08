import { Outlet } from "react-router-dom"
import { Navbar } from "../Shared/Navbar"

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </div>
    </div>
  )
}
