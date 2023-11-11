import ConsumptionHistory from "../components/report/ConsumptionHistory";
import Grid from "../components/report/Grid";
import PaymentDetail from "../components/report/PaymentDetail";
import PaymentHistory from "../components/report/PaymentHistory";

export default function Report() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-2">
        <PaymentDetail />
      </div>
      <div className="col-span-2">
        <Grid />
      </div>
      <div className="col-span-2">
        <ConsumptionHistory />
      </div>
      <div className="col-span-2">
        <PaymentHistory />
      </div>
    </div>
  );
}
