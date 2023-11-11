import rankingData from "../../data/userRanking.json"

const convertToEuros = (consumption: number): number => {
  return Number.parseFloat(((consumption * 14.42) / 100).toFixed(2))
}

const GeneralRankingTable = () => {
  const sortedData = [...rankingData].sort((prev, curr) =>
    convertToEuros(prev.last_usage - prev.saving) / prev.number_of_members >
    convertToEuros(curr.last_usage - prev.saving) / curr.number_of_members
      ? 1
      : -1
  )
  return (
    <div className="bg-gray-50 rounded-md p-5 w-full">
      <h1 className="font-bold text-base text-primary-900">
        Top Energy-saving Family
      </h1>
      <table className="w-full rounded-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Last Month Spend/Usage</th>
            <th className="px-6 py-3">Saving</th>
            <th className="px-6 py-3">Rank</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.slice(0, 10).map((family, index) => (
            <tr key={family.socialnumbers} className="border-b border-gray-200">
              <td className="px-6 py-3">{family.name}</td>
              <td className="px-6 py-3">
                {convertToEuros(family.last_usage)}e/{family.last_usage} kWh
              </td>
              <td className="px-6 py-3">{convertToEuros(family.saving)}</td>
              <td className="px-6 py-3">#{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GeneralRankingTable
