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
    //without SVG
    <div className="flex flex-row items-center justify-center gap-5">
      <button
        className="bg-slate-300 rounded-lg shadow-lg p-2"
        onClick={handleClick("prev")}
        disabled={page === 1}
      >
        {"<-"}
      </button>
      {
        <select
          className="bg-slate-300 rounded-lg shadow-lg p-2"
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
        className="bg-slate-300 rounded-lg shadow-lg p-2"
        onClick={handleClick("next")}
        disabled={page === maxpages}
      >
        {"->"}
      </button>
    </div>
  );
};
