import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const TrendingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 9))) // show top 6 trending
      .catch((error) => console.error("Error loading books:", error));
  }, []);

  return (
    <div className="my-12 max-w-[1170px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">📚 Trending Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default TrendingBooks;
