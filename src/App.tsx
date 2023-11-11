import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"

import Login from "./auth/Login"
import Header from "./components/Header"
import Sidebar from "./components/SideBar"
import Home from "./pages/Home"
import Report from "./pages/Report"

const AppLayout = () => (
  <div className="max-h-screen flex flex-col">
    <Header />
    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
      <Sidebar />
      <div className="overflow-x-hidden px-8 pb-4">
        <Outlet />
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/reports" element={<Report />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
