import React from "react";
import { Calendar, BookOpen, Tag, Star, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const BookList = ({ book }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 w-full max-w-[1170px] mx-auto h-auto sm:h-[277px]">

      {/* Image Section */}
<div
  className="flex items-center justify-center bg-gray-200 rounded-lg my-5 mx-auto sm:my-5 sm:mx-[20px]"
  style={{ width: "230px", height: "230px" }}
>
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

        <div className="flex flex-col sm:flex-row mt-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mr-4">
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Year of Publishing */}
          <div className="mt-2 sm:mt-0">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>
        </div>

          {/* Publisher and Total Pages */}
          <div className="flex flex-wrap gap-6 mt-4 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <Users size={16} /> Publisher: {book.publisher}
            </span>
            <span className="flex items-center gap-1">
              <FileText size={16} /> Pages: {book.totalPages}
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

<div className="flex flex-col sm:flex-row sm:items-center gap-2">
  {/* Top row for Category & Rating */}
  <div className="flex justify-between w-full sm:w-auto gap-2">

    {/* Category */}
    <span className="bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs px-2 py-1 h-[32px] w-[160px] sm:text-sm sm:h-[41px] sm:w-[174px]">
      Category: {book.category}
    </span>

    {/* Rating */}
    <span className="bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs gap-1 px-2 py-1 h-[32px] w-[120px] sm:text-sm sm:h-[42px] sm:w-[123px]">
      Rating: <Star size={12} /> {book.rating}
    </span>

  </div>

  {/* View Detail button */}
  <Link
    to={`/book/${book.bookId}`}
    className="bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm hover:bg-[#32c91b] transition-colors mt-2 sm:mt-0 sm:ml-auto w-full h-[36px] sm:h-[41px] sm:w-[150px]"
  >
    View Detail
  </Link>
</div>


      </div>
    </div>
  );
};

export default BookList;
