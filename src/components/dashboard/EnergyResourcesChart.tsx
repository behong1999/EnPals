import PieChart from "../PieChart";

const EnergyResourcesChart = () => {
  return (
    <div className="bg-gray-50 rounded-md p-5 w-full">
      <h1 className="font-bold text-base text-primary-900">
        Where does your electricity come from ?
      </h1>
      <div className="w-full max-w-md h-96 mx-auto mt-6">
        <PieChart
          labels={["Solar Energy", "Wind Energy", "Other"]}
          data={[68, 23, 9]}
        />
      </div>
    </div>
  );
};

export default EnergyResourcesChart;
