import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.bookId}`} className="block">
      <div className="w-[374px] h-[440px] bg-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl flex flex-col p-4">
        {/* Image */}
        <div className="w-[326px] h-[230px] bg-gray-200 flex items-center justify-center rounded-xl mx-auto">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-[134px] h-[166px] object-contain"
          />
        </div>


        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {book.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="text-lg font-semibold mt-4 line-clamp-1">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-[16px] text-gray-500 mt-2">By: {book.author}</p>

        {/* Divider */}
        <hr className="my-3 border-t border-gray-200" />

        {/* Bottom Info */}
        <div className="flex justify-between items-center mt-auto">
          <p className="text-[16px] text-gray-600">{book.category}</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-base">⭐</span>
            <span className="text-[16px] font-medium">{book.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
