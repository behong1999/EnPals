const data = [
    {
        id: 1,
        first_name: "Fran Rhead",
        address: "15040 Hollow Ridge Road",
        date: "11/14/2023",
        amount: "$213.81",
    },
    {
        id: 2,
        first_name: "Ricky Norcock",
        address: "4 Porter Center",
        date: "12/11/2023",
        amount: "$230.34",
    },
    {
        id: 3,
        first_name: "Kim Treagust",
        address: "641 Londonderry Trail",
        date: "12/17/2023",
        amount: "$233.09",
    },
];

type HistoryRowProps = {
    name: string;
    price: number;
    status: string;
};

const HistoryRow = ({ name, price }: HistoryRowProps) => {
    return (
        <tr className="grid grid-cols-[1fr_1fr_1fr] mb-2.5">
            <td className="text-left">{name}</td>
            <td className="text-center">{price}</td>
            <td className="text-right">status</td>
        </tr>
    );
};

const PaymentHistory = () => {
    return (
        <div className="w-[30%] h-[357px] rounded-[20px]">
            <header className="flex justify-between pt-[15px] pb-0 px-7">
                <p className=" w-[30%] text-xl not-italic font-bold leading-8 tracking-[-0.4px]">
                    Payment history
                </p>
                <p
                    className="rounded-[70px] h-fit bg-[#f4f7fe] text-[#4f772d] text-center text-sm not-italic font-medium leading-6 tracking-[-0.28px] px-3 py-1 round-[70px]
"
                >
                    See all
                </p>
            </header>

            <table className="px-7 w-full text-[#4f772d] text-sm not-italic font-bold leading-6 tracking-[-0.28px] px-7 py-0">
                <tr className="text-[color:var(--secondary-grey-600,#a3aed0)] text-sm not-italic font-medium leading-6 tracking-[-0.28px] grid grid-cols-[1fr_1fr_1fr] mb-2.5">
                    <td className="text-left">Name</td>
                    <td className="text-center">Price</td>
                    <td className="text-right">Status</td>
                </tr>

                {data.map((data) => (
                    <HistoryRow
                        id={data.id}
                        name={data.first_name}
                        price={data.amount}
                    />
                ))}
            </table>
        </div>
    );
};

export default PaymentHistory;
