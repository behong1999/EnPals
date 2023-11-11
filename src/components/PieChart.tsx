import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"

import React from "react"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
  title: string
  labels: string[]
  data: number[]
}

const PieChart: React.FC<PieChartProps> = ({ title, labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data,
        backgroundColor: ["#90A955", "#31572C", "#4F772D"],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="bg-gray-50 rounded-md p-5 w-full">
      <h1 className="font-bold text-base text-primary-900">{title}</h1>
      <div className="w-full max-w-md h-96 mx-auto mt-6">
        <Pie data={chartData} />
      </div>
    </div>
  )
}

export default PieChart
