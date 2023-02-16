export const PaginationHome = ({
  offset,
  setOffset,
  pagelimit,
  page,
  maxpages,
}: {
  offset: number;
  setOffset: (offset: number) => void;
  pagelimit: number;
  page: number;
  maxpages: number;
}) => {
  const handleClick = (direction: "next" | "prev") => () => {
    if (direction === "next") {
      setOffset(offset + pagelimit);
    } else {
      setOffset(offset - pagelimit || 1);
    }
  };

  return (
    <div
      className="flex flex-row items-center justify-center gap-5 
    bg-slate-300 bg-opacity-50 border-2 border-gray-200 rounded-lg shadow-lg p-5
    "
    >
      <button
        className="bg-gradient-to-tr from-white to-slate-300 rounded-lg shadow-lg p-4 border-2 cursor-pointer disabled:cursor-not-allowed "
        onClick={handleClick("prev")}
        disabled={page === 1}
      >
        {"<-"}
      </button>
      {
        <select
          className=" 
        bg-gradient-to-tr from-white to-slate-300 rounded-lg shadow-lg p-4 border-2 cursor-pointer disabled:cursor-not-allowed "
          value={offset}
          onChange={(e) => setOffset(Number(e.target.value) || 1)}
        >
          {Array.from({ length: maxpages }, (_, index) => index).map((page) => (
            <option key={page} value={page * pagelimit + 1}>
              {page + 1}
            </option>
          ))}
        </select>
      }

      <button
        className=" 
        bg-gradient-to-tr from-white to-slate-300 rounded-lg shadow-lg p-4 border-2 cursor-pointer disabled:cursor-not-allowed "
        onClick={handleClick("next")}
        disabled={page === maxpages}
      >
        {"->"}
      </button>
    </div>
  );
};
