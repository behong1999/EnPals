import PieChart from "../components/PieChart"
import OfferList from "../components/ranking/OfferList"
import PaymentDetail from "../components/report/PaymentDetail"

const Ranking = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-2">
      <div className="md:col-span-2 sm:mb-3">
        <PaymentDetail />
      </div>
      <div className="sm:mb-3">
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
