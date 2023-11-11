import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"

import React from "react"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
  labels: string[]
  data: number[]
}

const pieChartData = {
  labels: ["Red", "Blue", "Yellow"],
  data: [12, 19, 3],
}

const PieChart: React.FC<PieChartProps> = ({ labels, data }) => {
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

  return <Pie data={chartData} />
}

export default PieChart
export { pieChartData }
