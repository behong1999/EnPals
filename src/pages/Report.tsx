import EnergyRatio from "../components/EnergyRatio"
import ConsumptionHistory from "../components/report/ConsumptionHIstory"
import Grid from "../components/report/Grid"
import PaymentDetail from "../components/report/PaymentDetail"
import PaymentHistory from "../components/report/PaymentHistory"

export default function Report() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3">
        <PaymentDetail />
      </div>
      <div>
        <EnergyRatio />
        <ConsumptionHistory />
      </div>
      <div>
        <PaymentHistory />
      </div>
      <div>
        <Grid />
      </div>
    </div>
  )
}
