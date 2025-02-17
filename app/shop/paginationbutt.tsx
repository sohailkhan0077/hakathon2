import React from 'react';

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentPage = 1,
  totalPages = 3,
  onPageChange
}) => {
  return (
    <div className="flex justify-center items-center gap-8">
      {[1, 2, 3].map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors
            ${currentPage === pageNumber 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`w-16 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors
          ${currentPage >= totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;