import React, { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import errorImg from "../assets/404-error.png"; // your empty state image
import { Link } from "react-router-dom";
import ReadingList from "../components/ListedBooks/ReadingList"

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// Custom triangle bar shape
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => (
  <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
);

const ReadingGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const readingList = JSON.parse(localStorage.getItem("readingList")) || [];

    if (readingList.length === 0) {
      setData([]);
      return;
    }

    fetch("/Books.json")
      .then((res) => res.json())
      .then((books) => {
        const filtered = books.filter((b) =>
          readingList.some((r) => parseInt(r.bookId) === b.bookId)
        );

        const chartData = filtered.map((book) => ({
          name: book.bookName,
          value: book.totalPages,
        }));

        setData(chartData);
      });
  }, []);

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 mt-[80px] mb-[80px]">
        <img src={errorImg} alt="No books" className="w-[460px] mb-6" />
        <h1 className="text-4xl font-semibold mb-4">No books in your Reading List!</h1>
        <p className="text-[#627382] text-lg mb-6">
          You haven’t added any books to your reading list yet. Start exploring and mark your favorites!
        </p>
        <Link to="/">
          <button className="w-[150px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                             text-white text-[16px] font-medium rounded-lg flex items-center justify-center">
            Go Back!
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1170px] mx-auto p-6 flex flex-col items-center justify-center mt-3">
      <h1 className="text-3xl font-bold text-center mb-8">Your Reading Journey</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={-20} textAnchor="end" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
       <hr className="my-2 mt-3 border-gray-300" />
       <h1 className="text-3xl font-bold text-center mb-8">Books You’ve Enjoyed So Far</h1>
      <ReadingList/>
    </div>
  );
};

export default ReadingGraph;
