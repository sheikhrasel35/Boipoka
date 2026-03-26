import React from "react";
import { Calendar, BookOpen, Tag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const BookList = ({ book }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border-1 border-gray-200"
         style={{ width: "1169px", height: "277px", margin: "20px auto" }}>
      
      {/* Image Section */}
      <div className="flex items-center justify-center bg-gray-200 rounded-lg"
           style={{ width: "230px", height: "230px", margin: "auto 20px" }}>
        <img
          src={book.image}
          alt={book.bookName}
          style={{ width: "129px", height: "172px", objectFit: "cover" }}
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-between" style={{ padding: "20px" }}>
        
        {/* Top Info */}
        <div>
          <h2 className="text-2xl font-semibold">{book.bookName}</h2>
          <p className="text-gray-500 text-sm mt-4">{book.author}</p>

            <div className="flex mt-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 ml-0 mr-4">
                    {book.tags.map((tag, i) => (
                        <span
                        key={i}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                        >
                        #{tag}
                        </span>
                    ))}
                    </div>
                    <div>
                        <span className="flex items-center gap-1">
                        <Calendar size={16} /> Year of Publishing: {book.yearOfPublishing}
                        </span>
                    </div>
            </div>


          <div className="flex flex-wrap gap-6 mt-4 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <BookOpen size={16} /> Publisher: {book.publisher}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={16} /> Pages: {book.totalPages}
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Category, Rating, View Detail */}
        <div className="flex items-center gap-3">
            {/* Category */}
            <span
                className="bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm"
                style={{ width: "174px", height: "41px" }}
            >
                Category: {book.category}
            </span>

            {/* Rating */}
            <span
                className="bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm gap-1"
                style={{ width: "123px", height: "42px" }}
            >
              Rating:  <Star size={14} /> {book.rating}
            </span>

            {/* View Detail button */}
            <Link
            to={`/book/${book.bookId}`}
            className="ml-auto bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm hover:bg-[#32c91b] transition-colors"
            style={{ width: "150px", height: "41px" }}
            >
            View Detail
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
