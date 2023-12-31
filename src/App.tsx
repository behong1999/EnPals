import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Report from "./pages/Report";
import Login from "./pages/auth/Login";
import Sidebar from "./components/Sidebar";

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
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/report" element={<Report />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
