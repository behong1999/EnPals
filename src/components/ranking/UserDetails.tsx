import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import dummyData from "../../data/userDetails.json";

interface Data {
  id: number;
  name: string;
  address: string;
  usage: number;
  ranking: number;
}

const UserDetails: React.FC = () => {
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
            User Details
          </div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Id
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Name
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Address
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Usage/Month
                </th>
                <th className="w-1/5 text-start px-4 py-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 uppercase border-b">
                  Ranking
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.slice(offset, offset + 10).map((item, index) => (
                <tr key={index}>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.id}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.name}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.address}
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    {item.usage} KW
                  </td>
                  <td className="font-bold text-xs md:text-sm px-4 py-2 text-primary-800">
                    #{item.ranking}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            pageClassName="text-primary-700 mx-2"
            onPageChange={handlePageClick}
            containerClassName={"flex justify-start items-center my-4"}
            previousLinkClassName={
              "px-4 py-2 rounded-lg font-bold text-primary-700 bg-gray-200 hover:bg-primary-700 hover:text-gray-100"
            }
            nextLinkClassName={
              "px-4 py-2 rounded-lg font-bold text-primary-700 bg-gray-200 hover:bg-primary-700 hover:text-gray-100"
            }
            disabledClassName={"px-4 py-2 rounded text-gray-500"}
            activeClassName={
              "text-primary-700 bg-gray-200 px-4 py-2 rounded-lg font-bold"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
