import React, { useEffect, useState } from "react"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import ReactPaginate from "react-paginate"
import dummyData from "../../data/paymentUserData.json"

// import axios from 'axios';

interface Data {
  id: number
  first_name: string
  address: string
  date: string
  amount: string
}

const PaymentDetail: React.FC = () => {
  const [data, setData] = useState<Data[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected)
  }

  useEffect(() => {
    setData(dummyData)
    setPageCount(Math.ceil(dummyData.length / 10))

    // axios
    //   .get('https://your-api-url.com/data')
    //   .then((response) => {
    //     setData(response.data);
    //     setPageCount(Math.ceil(response.data.length / 10));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [])

  const offset = currentPage * 10

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="inline-flex py-3 sm:w-full sm:mx-auto">
        <div className="px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-[24px] font-bold mb-5">Payment Details</div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="w-1/5 px-4 py-2 text-base font-semibold tracking-wide text-gray-400 uppercase border-b">
                  Name
                </th>
                <th className="w-1/5 px-4 py-2 text-base font-semibold tracking-wide text-gray-400 uppercase border-b">
                  Address
                </th>
                <th className="w-1/5 px-4 py-2 text-base font-semibold tracking-wide text-gray-400 uppercase border-b">
                  Due Date
                </th>
                <th className="w-1/5 px-4 py-2 text-base font-semibold tracking-wide text-gray-400 uppercase border-b">
                  Amount
                </th>
                <th className="w-1/5 px-4 py-2 text-base font-semibold tracking-wide text-gray-400 uppercase border-b">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.slice(offset, offset + 10).map((item, index) => (
                <tr key={index}>
                  <td className="font-bold px-4 py-2 text-hunter_green">
                    {item.first_name}
                  </td>
                  <td className="font-bold px-4 py-2 text-hunter_green">
                    {item.address}
                  </td>
                  <td className="font-bold px-4 py-2 text-hunter_green">
                    {item.date}
                  </td>
                  <td className="font-bold px-4 py-2 text-hunter_green">
                    {item.amount}
                  </td>
                  <td className="font-bold px-4 py-2 text-hunter_green">
                    <div>
                      <ArrowTopRightOnSquareIcon className="w-[24px] " />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            pageClassName="mx-2"
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center items-center my-4"}
            previousLinkClassName={
              "mx-2 bg-gray-600 px-4 py-2 rounded text-white"
            }
            nextLinkClassName={"mx-2 bg-gray-600 px-4 py-2 rounded text-white"}
            disabledClassName={"px-4 py-2 rounded text-gray-500"}
            activeClassName={"bg-blue-500 px-4 py-2 rounded text-white"}
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetail
