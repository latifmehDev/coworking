'use client';

import { WpfSearch } from "@/app/assets/icons/search";
import styles from './SearchBar.module.css';
import { useState, FormEvent } from "react";

const SearchBar: React.FC<{ onSearch: (search: string) => void }> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="flex items-center justify-center py-4 main-content">
      <div className="relative rounded-full shadow-lg w-full max-w-md ">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Work Space finden in"
            aria-label="Suchfeld"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`rounded-full w-full py-2 pl-4 pr-12 text-sm focus:outline-none focus:ring-3 focus:ring-purple-500 ${styles.searchInput} `}
          />
          <button
            type="submit"
            className={`absolute right-0 rounded-r-full p-2 focus:outline-none 
                        text-white hover:bg-teal-500 focus:ring-3 focus:ring-purple-500 
                        ${styles.searchButton}`}
            aria-label="Suchen"
          >
            <WpfSearch className="text-white svg-hover-enlarge" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;