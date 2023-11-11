<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Report from './pages/Report';
import PieChart, { pieChartData } from './components/PieChart';

=======
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Header from "./components/Header";
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

>>>>>>> 672991b84a02933ae6b3e14d9c2076f8719f17c1
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/pieChart'
          element={
            <PieChart labels={pieChartData.labels} data={pieChartData.data} />
          }
        />
=======
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
>>>>>>> 672991b84a02933ae6b3e14d9c2076f8719f17c1
      </Routes>
    </Router>
  );
}

export default App;
