import PieChart from "../components/PieChart";
import OfferList from "../components/ranking/OfferList";
import UserDetails from "../components/ranking/UserDetails";

const Ranking = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Rankings</h1>
      <div className="col-span-2">
        <UserDetails />
      </div>
      <div className="col-span-2">
        <PieChart
          title="Ranking percentages"
          labels={["Red", "Blue", "Yellow"]}
          data={[12, 19, 3]}
        />
      </div>
      <div className="col-span-2">
        <OfferList />
      </div>
    </div>
  );
};

export default Ranking;
