// Pagination.tsx
import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {pages.map(page => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${page === currentPage ? 'text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {page}
            </button>
          </li>
        ))}
        <li style={{ visibility: currentPage >= totalPages ? 'hidden' : 'visible' }}>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
