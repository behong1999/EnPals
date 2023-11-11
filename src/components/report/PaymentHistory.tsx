const data = [
  {
    id: 1,
    first_name: "Fran Rhead",
    address: "15040 Hollow Ridge Road",
    date: "11/14/2023",
    amount: 213.81,
    status: "Paid",
  },
  {
    id: 2,
    first_name: "Ricky Norcock",
    address: "4 Porter Center",
    date: "12/11/2023",
    amount: 230.34,
    status: "Paid",
  },
  {
    id: 3,
    first_name: "Kim Treagust",
    address: "641 Londonderry Trail",
    date: "12/17/2023",
    amount: 233.09,
    status: "Unpaid",
  },
];

type HistoryRowProps = {
  name: string;
  price: number;
  status: string;
};

const HistoryRow = ({ name, price, status }: HistoryRowProps) => {
  return (
    <tr className="grid grid-cols-3 justify-items-start border-t px-4 py-2">
      <td className="text-xs md:text-sm text-primary-700">{name}</td>
      <td className="text-xs md:text-sm text-primary-700">${price}</td>
      <td className="text-xs md:text-sm text-primary-700">{status}</td>
    </tr>
  );
};

const PaymentHistory = () => {
  return (
    <div className="rounded-lg border">
      <header className="flex justify-between py-2 px-4">
        <p className="font-bold text-base md:text-lg">Payment history</p>
      </header>

      <div className="w-full">
        <table className="w-full text-gray-500 font-semibold py-2 px-4">
          <thead>
            <tr className="grid grid-cols-3 justify-items-start px-4">
              <td className="text-sm md:text-base">Name</td>
              <td className="text-sm md:text-base">Price</td>
              <td className="text-sm md:text-base">Status</td>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <HistoryRow
                // id={data.id}
                name={data.first_name}
                price={data.amount}
                status={data.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
