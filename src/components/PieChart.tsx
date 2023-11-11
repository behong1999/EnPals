import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
}

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  data: [12, 19, 3],
};

const PieChart: React.FC<PieChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data,
        backgroundColor: [
          '#90A955',
          '#31572C',
          '#4F772D',
        ],
        borderWidth: 1,
        
      },
    ],
  };

  

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
export { pieChartData };
