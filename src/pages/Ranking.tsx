import PieChart from "../components/PieChart"
import OfferList from "../components/ranking/OfferList"
import PaymentDetail from "../components/report/PaymentDetail"

const Ranking = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-2">
        <PaymentDetail />
      </div>
      <div>
        <PieChart
          title="Ranking percentages"
          labels={["Red", "Blue", "Yellow"]}
          data={[12, 19, 3]}
        />
      </div>
      <div>
        <OfferList />
      </div>
    </div>
  )
}

export default Ranking
