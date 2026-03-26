import React, { useState } from 'react';
import AllBooks from '../components/ListedBooks/AllBooks';
import ReadingList from '../components/ListedBooks/ReadingList';
import Wishlist from '../components/ListedBooks/Wishlist';

const ListedBooks = () => {
  const [sortOption, setSortOption] = useState('default');
  const [activeTab, setActiveTab] = useState('read'); // 'read' or 'wishlist'

  return (
    <div className="max-w-[1170px] mx-auto px-4">
      <h1 className="bg-gray-300 flex justify-center items-center font-bold text-3xl p-3 rounded-lg mt-2">
        Books
      </h1>

      {/* Tabs and Sorting */}
      <div className="bg-gray-300 flex flex-col sm:flex-row justify-between items-center mt-3 p-2 rounded-lg gap-2">
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start w-full sm:w-auto">
          <button
            className={`btn ${activeTab === 'read' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('read')}
          >
            All Books
          </button>
          <button
            className={`btn ${activeTab === 'ReadingList' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('ReadingList')}
          >
            Reading List
          </button>
          <button
            className={`btn ${activeTab === 'wishlist' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist Books
          </button>
        </div>

        {/* Sorting Dropdown only for AllBooks tab */}
        {activeTab === 'read' && (
          <select
            className="border rounded-md px-2 py-1 text-sm w-full sm:w-auto mt-2 sm:mt-0"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="name">Book Name</option>
            <option value="rating">Rating</option>
            <option value="year">Year of Publishing</option>
          </select>
        )}
      </div>

      {/* Render active tab */}
      <div className="mt-4">
        {activeTab === 'read' && <AllBooks sortOption={sortOption} />}
        {activeTab === 'ReadingList' && <ReadingList />}
        {activeTab === 'wishlist' && <Wishlist />}
      </div>
    </div>
  );
};

export default ListedBooks;
