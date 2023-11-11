import {
  BoltIcon,
  CurrencyEuroIcon,
  LightBulbIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

const contentData = [
  {
    title: "Users",
    icon: <UserIcon />,
    value: "45",
  },
  {
    title: "Last Month Consumption",
    icon: <LightBulbIcon />,
    value: "10.20e",
  },
  {
    title: "Last Month Usage",
    icon: <BoltIcon />,
    value: "111 kWh",
  },
  {
    title: "Total Saving",
    icon: <CurrencyEuroIcon />,
    value: "30",
  },
]

const UserSummary = () => {
  return (
    <div className="flex flex-row justify-between w-full lg:space-x-4 md:space-x-2 p-2">
      {contentData.map((data) => (
        <div
          key={data.title}
          className="flex flex-row content-center bg-gray-50 w-3/12 rounded-md p-3"
        >
          <div className="bg-gray-100 w-12 h-12 rounded-full p-3 text-primary-900">
            {data.icon}
          </div>
          <div className="ml-3">
            <p className="font-bold	text-sm text-primary-900">{data.title}</p>
            <h1 className="font-bold text-2xl text-primary-400">
              {data.value}
            </h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserSummary
