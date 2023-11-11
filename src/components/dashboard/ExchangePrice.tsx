import { CalendarIcon } from "@heroicons/react/24/outline"
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"
import { Line } from "react-chartjs-2"

Chart.register(CategoryScale)

const PriceBox = ({
  additionalClassName,
  title,
  data,
}: {
  additionalClassName?: string
  title: string
  data: number
}) => {
  return (
    <div className={`${additionalClassName} bg-gray-200 rounded-md py-2 px-4`}>
      <p className="font-bold	text-xs text-primary-900 text-center">{title}</p>
      <p className="font-bold text-sm text-primary-700 text-center break-keep">
        {data} c/kWh
      </p>
    </div>
  )
}

const ExchangePrice = () => {
  const data = {
    labels: Array.from({ length: 24 }, (_, hour) => hour + 1),
    datasets: [
      {
        data: Array.from({ length: 24 }, () =>
          (Math.random() * 3.0 + 1.0).toFixed(2)
        ),
        fill: false,
        tension: 0.5,
        borderColor: "#374725",
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "c/kWh",
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <div className="bg-gray-50 rounded-md w-full h-full py-4 px-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-base text-primary-900">
          Exchange Price of Electricity
        </h1>
        <div className="bg-gray-100 rounded-md p-2.5 flex flex-row justify-center text-primary-900">
          <CalendarIcon className="w-4 h-4" />
          <p className="font-bold	text-sm ml-2">Today</p>
        </div>
      </div>
      <div className="flex flex-col pt-2 w-full gap-8">
        <div className="flex gap-2 justify-between h-full w-full">
          <PriceBox
            additionalClassName="col-span-2"
            title="Price Now"
            data={3.5}
          />
          <PriceBox title="Lowest" data={1.0} />
          <PriceBox title="Highest" data={4.0} />
        </div>
        <div className="w-full h-full m-auto rounded-lg">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default ExchangePrice
