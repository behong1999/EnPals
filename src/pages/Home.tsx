import EnergyResourcesChart from "../components/dashboard/EnergyResourcesChart";
import ExchangePrice from "../components/dashboard/ExchangePrice";
import GeneralRankingTable from "../components/dashboard/GeneralRankingTable";
import UserSummary from "../components/dashboard/UserSummary";

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
        <EnergyResourcesChart />
      </div>
      <div className="col-span-2">
        <GeneralRankingTable />
      </div>
    </div>
  );
}
