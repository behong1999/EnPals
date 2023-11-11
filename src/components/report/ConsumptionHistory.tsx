import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

const ConsumptionHistory = () => {
  const data = {
    labels: Array.from({ length: 12 }, (_, month) => month + 1),
    datasets: [
      {
        label: "kWh/month",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: "#132A13",
        barThickness: 10,
        maxBarThickness: 25,
        minBarLength: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "c/kWh",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
    maintainAspectRatio: false, // Set this to false to adjust width and height directly
    responsive: true,
  };

  return (
    <div className=" bg-gray-50 w-full rounded-md p-5">
      <div className="flex flex-row justify-between w-full">
        <h1 className="font-bold text-base text-primary-900">
          Yearly Consumption History
        </h1>
      </div>
      <div className="inline-flex w-full">
        <div className="w-full">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ConsumptionHistory;
