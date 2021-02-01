const Pages = ({ pageProp }) => {
  const { pageNum, updatePageNum, size } = pageProp;
  let pages = [];
  for (let i = 1; i < Math.ceil(size / 20) + 1; i++) {
    pages.push(i);
  }

  return (
    <div className="page__num__container">
      {pages.map((page) => (
        <div
          key={page}
          onClick={updatePageNum}
          className={`page__num ${
            page == pageNum ? "page__num__selected" : ""
          }`}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
export default Pages;
