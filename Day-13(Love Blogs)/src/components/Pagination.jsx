import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className=" fixed bottom-0 bg-white w-full">
      <div className="p-4 shadow-lg bg-gray-300 w-full flex justify-around">
        {page > 1 && (
          <button
            className="bold px-6  py-1 bg-black text-white "
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            className="bold px-6  py-1 bg-black text-white "
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}

        <p className="bold px-6  py-1 bg-black text-white ">
          Page{page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
