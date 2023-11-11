import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import PieChart, { pieChartData } from './components/PieChart';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pieChart" element={<PieChart labels={pieChartData.labels} data={pieChartData.data} />} />
      </Routes>
    </Router>
  );
}

export default App;
