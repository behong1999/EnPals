import React, { useEffect, useState } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import ReactPaginate from "react-paginate";
import dummyData from "../../data/paymentUserData.json";

interface Data {
  id: number;
  first_name: string;
  address: string;
  date: string;
  amount: string;
}

const PaymentDetail: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  useEffect(() => {
    setData(dummyData);
    setPageCount(Math.ceil(dummyData.length / 10));
  }, []);

  const offset = currentPage * 10;

  return (
    <div className="flex flex-col justify-center mt-2 border rounded-lg w-full overflow-x-scroll">
      <div className="relative py-3">
        <div className="relative px-4 bg-white">
          <div className="md:text-2xl text-xl font-bold mb-5 px-4">
            Payment Details
          </div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Name
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Address
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Due Date
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Amount
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.slice(offset, offset + 10).map((item, index) => (
                <tr key={index}>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.first_name}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.address}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.date}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.amount}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    <div>
                      <ArrowTopRightOnSquareIcon className="w-[24px] " />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={pageCount}
            pageClassName="text-primary-700"
            onPageChange={handlePageClick}
            containerClassName={"flex justify-start items-center my-4 gap-4"}
            previousLinkClassName={`px-4 py-2 rounded-lg font-bold text-primary-700 bg-gray-200 hover:bg-primary-700 hover:text-gray-100 ${
              currentPage === 0 && "hidden"
            }`}
            nextLinkClassName={`px-4 py-2 rounded-lg font-bold text-primary-700 bg-gray-200 hover:bg-primary-700 hover:text-gray-100 ${
              currentPage === pageCount - 1 && "hidden"
            }`}
            activeClassName={
              "text-primary-700 bg-gray-200 px-4 py-2 rounded-lg font-bold"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
