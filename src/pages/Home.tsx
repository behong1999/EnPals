import PieChart from "../components/PieChart"
import ExchangePrice from "../components/dashboard/ExchangePrice"
import GeneralRankingTable from "../components/dashboard/GeneralRankingTable"
import UserSummary from "../components/dashboard/UserSummary"

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <UserSummary />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <ExchangePrice />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <PieChart
          title="Where does your electricity come from ?"
          labels={["Solar Energy", "Wind Energy", "Other"]}
          data={[68, 23, 9]}
        />
      </div>
      <div className="col-span-2">
        <GeneralRankingTable />
      </div>
    </div>
  )
}
