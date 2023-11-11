import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Report from './pages/Report';
import PieChart, { pieChartData } from './components/PieChart';
import Header from "./components/Header";
import Sidebar from './components/SideBar';

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
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/pieChart'
          element={
            <PieChart labels={pieChartData.labels} data={pieChartData.data} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
