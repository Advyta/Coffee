import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, index) => (
        <input
          key={index}
          className={`join-item btn btn-square btn-sm md:btn-md body-l ${totalPages === 1 ? 'rounded-lg' : ''} ${currentPage !== index + 1 ? 'hover:bg-card-bg' : ''}`}
          type="radio"
          name="options"
          aria-label={`${index + 1}`}
          checked={currentPage === index + 1}
          onChange={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};

export default Pagination;
