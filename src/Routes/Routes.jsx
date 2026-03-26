import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import ReadingPage from "../Pages/Reading";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/BookDetails";
import ReadingList from "../components/ListedBooks/ReadingList";
import Wishlist from "../components/ListedBooks/Wishlist";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Default route, rendering Home page
        element: <Home />,
        loader: () => {
          return fetch('/Books.json')
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch Books.json');
              }
              return response.json();
            })
            .catch(error => {
              console.error(error);
              return [];  // Return an empty array if the fetch fails
            });
        },
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
      },
      {
        path: '/reading',
        element: <ReadingPage />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
      },
      { path: "/reading", element: <ReadingList /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
