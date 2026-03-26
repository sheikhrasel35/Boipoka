import React, { useEffect, useState } from "react";
import Booklist from "../BookCard/Booklist";
import errorImg from "../../assets/404-error.png";  

const ReadingList = () => {
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("readingList")) || [];
    setReadingList(saved);
  }, []);

  return (
    <div className="max-w-[1170px] mx-auto space-y-4 p-4">
      {readingList.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 mt-[80px] mb-[80px]">
          <img src={errorImg} alt="404 Error" className="w-[460px] mb-6" />
          <h1 className="text-4xl font-semibold mb-4">Oops! No Book found!</h1>
          <p className="text-[#627382] text-lg mb-6">
            You haven’t added any books to your reading list yet. Start exploring and mark your favorites!
          </p>
        </div>
      ) : (
        readingList.map((book) => <Booklist key={book.bookId} book={book} />)
      )}
    </div>
  );
};

export default ReadingList;
