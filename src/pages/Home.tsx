import ExchangePrice from "../components/dashboard/ExchangePrice"
import UserSummary from "../components/dashboard/UserSummary"

export default function Home() {
  return (
    <div>
      <UserSummary />
      <ExchangePrice />
    </div>
  )
}
