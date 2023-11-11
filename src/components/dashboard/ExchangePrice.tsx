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
    <div
      className={`${additionalClassName} bg-gray-100 round-md py-2 px-1 h-fit`}
    >
      <p className="font-bold	text-xs text-primary-900 text-center">{title}</p>
      <p className="font-bold text-lg text-primary-400 text-center break-keep">
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
  }

  return (
    <div className="bg-gray-50 rounded-md p-5 w-1/2">
      <div className="flex flex-row justify-between w-full">
        <h1 className="font-bold text-base text-primary-900">
          Exchange Price of Electricity
        </h1>
        <div className="bg-gray-100 rounded-md p-2.5 flex flex-row justify-center">
          <CalendarIcon className="w-4 h-4" />
          <p className="font-bold	text-sm ml-2">Today</p>
        </div>
      </div>
      <div className="flex flex-row pt-2 w-full">
        <div className="grid grid-cols-2 gap-2 w-4/12 h-fit">
          <PriceBox
            additionalClassName="col-span-2"
            title="Price Now"
            data={3.5}
          />
          <PriceBox title="Lowest" data={1.0} />
          <PriceBox title="Highest" data={4.0} />
        </div>
        <div className="ml-3 w-8/12">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default ExchangePrice
