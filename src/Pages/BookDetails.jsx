import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const [isReading, setIsReading] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const [loadingRead, setLoadingRead] = useState(false);
  const [loadingWish, setLoadingWish] = useState(false);

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.bookId === parseInt(bookId));
        setBook(foundBook);
      });

    const readingList = JSON.parse(localStorage.getItem("readingList")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsReading(readingList.some((b) => b.bookId === parseInt(bookId)));
    setIsWishlist(wishlist.some((b) => b.bookId === parseInt(bookId)));
  }, [bookId]);

  const handleRead = () => {
    setLoadingRead(true);
    setTimeout(() => {
      let readingList = JSON.parse(localStorage.getItem("readingList")) || [];
      if (isReading) {
        readingList = readingList.filter((b) => b.bookId !== book.bookId);
        toast.info("Removed from Reading List!");
      } else {
        readingList.push(book);
        toast.success("Added to Reading List!");
      }
      localStorage.setItem("readingList", JSON.stringify(readingList));
      setIsReading(!isReading);
      setLoadingRead(false);
    }, 1000);
  };

  const handleWishlist = () => {
    setLoadingWish(true);
    setTimeout(() => {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (isWishlist) {
        wishlist = wishlist.filter((b) => b.bookId !== book.bookId);
        toast.info("Removed from Wishlist!");
      } else {
        wishlist.push(book);
        toast.success("Added to Wishlist!");
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsWishlist(!isWishlist);
      setLoadingWish(false);
    }, 1000);
  };

  if (!book) {
    return <p className="text-center text-lg mt-10">Loading book details...</p>;
  }

  return (
    <div className="max-w-[1170px] mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image */}
        <div className="flex justify-center items-center w-full lg:w-[573px] h-auto lg:h-[711px] bg-gray-50 rounded-xl p-4 lg:p-0 mx-auto lg:mx-0">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-full max-w-[425px] h-auto lg:h-[564px] rounded-xl object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-start gap-4 mt-4">
          <h1 className="text-3xl font-bold">{book.bookName}</h1>
          <p className="text-gray-500 text-lg">By: {book.author}</p>
          <hr className="my-2 border-gray-300" />
          <p className="text-gray-700 font-medium">Category: {book.category}</p>
          <hr className="my-2 border-gray-300" />
          <p className="text-gray-700">
            <span className="font-bold">Review:</span> {book.review}
          </p>

          {book.tags && (
            <p className="text-gray-700">
              <span className="font-bold">Tag:</span>{" "}
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#e0f0de] text-[#18b101] py-1 px-3 rounded-full text-sm ml-2"
                >
                  #{tag}
                </span>
              ))}
            </p>
          )}

          <hr className="my-2 border-gray-300" />

          <div className="flex gap-[60px]">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Number of Pages:</p>
              <p className="font-bold">Publisher:</p>
              <p className="font-bold">Publication Year:</p>
              <p className="font-bold">Ratings:</p>
            </div>
            <div className="flex flex-col gap-4 text-gray-700">
              <p>{book.totalPages}</p>
              <p>{book.publisher}</p>
              <p>{book.yearOfPublishing}</p>
              <p>{book.rating}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-[32px]">
            <button
              onClick={handleRead}
              disabled={loadingRead}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold ${
                isReading ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
            >
              {loadingRead && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loadingRead
                ? isReading
                  ? "Removing..."
                  : "Adding..."
                : isReading
                ? "Unmark as Read"
                : "Mark as Read"}
            </button>

            <button
              onClick={handleWishlist}
              disabled={loadingWish}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold ${
                isWishlist ? "bg-orange-400 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {loadingWish && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loadingWish
                ? isWishlist
                  ? "Removing..."
                  : "Adding..."
                : isWishlist
                ? "Wishlisted"
                : "Wishlist"}
            </button>
          </div>

          <ToastContainer position="bottom-right" autoClose={1500} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
