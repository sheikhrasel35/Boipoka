import React, { useEffect, useState } from "react";
import BookList from "../BookCard/Booklist";

const AllBooks = ({ sortOption }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => {
        let sortedData = [...data];

        // Sort based on selected option
        if (sortOption === "name") {
          sortedData.sort((a, b) => a.bookName.localeCompare(b.bookName));
        } else if (sortOption === "rating") {
          sortedData.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === "year") {
          sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        // Default: keep original order

        setBooks(sortedData);
      })
      .catch((err) => console.error("Failed to fetch books:", err));
  }, [sortOption]); // Re-run when sortOption changes

  return (
    <div className="p-4 max-w-[1170px] mx-auto space-y-4">
      {books.length > 0 ? (
        books.map((book) => <BookList key={book.id} book={book} />)
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No books available.
        </p>
      )}
    </div>
  );
};

export default AllBooks;
