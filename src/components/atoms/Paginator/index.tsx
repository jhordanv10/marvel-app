import { PaginatorType } from "@/typed/index";

export const Paginator = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}: PaginatorType) => {
  return (
    <div className="flex justify-center items-center mt-4 font-bold py-4">
      <button
        className={`w-8 h-8  px-2 py-1 mx-1 rounded-full text-black cursor-pointer ${
          currentPage === 1 ? "bg-gray-2" : "bg-golden-3"
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span className="mx-2 text-golden-3">
        {currentPage}/{totalPages}
      </span>
      <button
        className={`w-8 h-8 px-2 py-1 mx-1 rounded-full text-black cursor-pointer ${
          currentPage === totalPages ? "bg-gray-2" : "bg-golden-3"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};
